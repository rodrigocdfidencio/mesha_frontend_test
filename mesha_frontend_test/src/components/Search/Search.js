import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Search() {
    const [weather, setWeather] = useState(false);
    const [musics, setMusics] = useState(false);
    const [search, setSearch] = useState('');


    let getWeather = async (city) => {
        let res = await axios.get("http://api.openweathermap.org/data/2.5/weather", {
            params: {
                q:city,
                appid: 'c9f7dfe3a358ca7a55cc3fb42a9bbebf',
                lang: 'pt',
                units: 'metric'
            }
        })
        setWeather(res.data);
    }

    let getMusicsList = async (musicalStyle) => {
        let res = await axios.get("https://shazam.p.rapidapi.com/auto-complete", {
        method: 'GET',
        params: {
            term: musicalStyle,
            locale: 'pt-br'
        },
        headers: {
          'x-rapidapi-host': 'shazam.p.rapidapi.com',
          'x-rapidapi-key': 'd1eda2ed66mshc6c886ffff63fdep15f419jsncd00c4310ad9'
        }
      })
      setMusics(res.data);
      console.log(res.data);
    }

    useEffect(() => {
            getWeather(search);
            getMusicsList("sertanejo")
    }, [search])

    if(!weather) {
        return (
        <div>
        <input
        placeholder="Cidade"
        id="city"
        type="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}></input>
        
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
        
        </div>
            <div>
                <h4>Clima em { weather['name']}</h4>
                <p>{ musics[0] }</p>
                <p>{weather['weather'][0]['description']}</p>
                <ul>
                    <li>Temperatura atual: { weather['main']['temp']}</li>
                </ul>
            </div>
        </div>
    )
}
}
