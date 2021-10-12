import React, { useState, useEffect } from 'react';
import Cards from '../Cards/Cards'
import axios from 'axios';

import './Search.css';

export default function Search() {
    const [weather, setWeather] = useState(false);
    const [musics, setMusics] = useState(false);
    const [search, setSearch] = useState('');
    const [musicalStyle, setMusicalStyle] = useState(false);


    const getWeather = async () => {
        let res = await axios.get("http://api.openweathermap.org/data/2.5/weather", {
            params: {
                q:search,
                appid: 'c9f7dfe3a358ca7a55cc3fb42a9bbebf',
                lang: 'pt',
                units: 'metric'
            }
            
        })
        .then((res) => res.data)
        console.log(res);
        setWeather(res);
    }

    useEffect(() => {
        if(weather) recomendedStyle();
      }, [weather]);
    

    const recomendedStyle = () => {
        let temp = weather['main']['temp'];
        if(temp <= 16){
            setMusicalStyle('lofi');
        } else if(temp > 16 && temp <= 24){
            setMusicalStyle('classica');
        } else if(temp > 24 && temp <= 32){
            setMusicalStyle('pop');
        } else if(temp > 32 ){
            setMusicalStyle('rock');
        }
        console.log('recom');
        setTimeout(function() {
            getMusicsList();
        }, 1000);
    }

    const getMusicsList = async () => {
            let res = await axios.get("https://shazam.p.rapidapi.com/search", {
        method: 'GET',
        params: {
            term: musicalStyle,
            locale: 'pt-br',
            limit: '5',
        },
        headers: {
            'x-rapidapi-host': 'shazam.p.rapidapi.com',
            'x-rapidapi-key': 'a73d3918demshdd7bd31bd74dbd4p1a61dcjsn9ca453de8010'
        }
    })
    .then((res) => res.data)
    console.log(res);
    setMusics(res);
        } 

    if(!weather) {
        return (
        <div>
        <input
        placeholder="Cidade"
        id="city"
        type="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}></input>
        <button type="submit" onClick={ getWeather }>Buscar</button>
        
        </div>
        )
    } else {
    return (
        <div>
        <div>
        <input
        placeholder="Cidade"
        id="city"
        type="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}></input>
        <button type="submit" onClick={ getWeather }>Buscar</button>
        </div>
            <div class="search-card">
                <h4>Clima em { weather['name']}</h4>
                <p>{weather['weather'][0]['description']}</p>
                <ul>
                    <li>Temperatura atual: { weather['main']['temp'] }</li>
                </ul>
                {/* { musics.tracks.hits.map((music) => <Cards key={ music.track.title } music={ music } />) } */}
            </div>
            
        </div>
    )
}
}
