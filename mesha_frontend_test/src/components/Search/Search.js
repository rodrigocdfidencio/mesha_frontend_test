import React, { useState, useEffect } from 'react';
import { fetchWeather, fetchMusic } from '../../services/api';
import Cards from '../Cards/Cards';

import './Search.css';

export default function Search() {
    const [weather, setWeather] = useState(false);
    const [search, setSearch] = useState('');
    const [musicalStyle, setMusicalStyle] = useState('');
    const [musics, setMusics] = useState(false);
    
    const weatherSearch = async () => {
        const data = await fetchWeather(search);
            setWeather(data);
            setSearch('');
    }

    useEffect(() => {
        if(weather){
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
        };
    }, [weather])

    useEffect(() => {
        if(musicalStyle){
            getMusicsList(musicalStyle)
        };
    }, [musicalStyle])
    
    const getMusicsList = async () => {
        const data = await fetchMusic(musicalStyle);
            setMusics(data.data.tracks.hits);
    }
    
        return (
    <div>
        {!musics ? (
        <div>
        <input
        className="search"
        placeholder="Cidade"
        id="city"
        type="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}></input>
        <button className="btn btn-primary btn-xs" type="submit" onClick={ weatherSearch }>Buscar</button>
        </div>
        ) : (
        <div class="row">
        <div class="search-card">
        <div>
        <input
        className="search"
        placeholder="Cidade"
        id="city"
        type="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}></input>
        <button className="btn btn-primary btn-xs" type="submit" onClick={ weatherSearch }>Buscar</button>
        </div>
        
            {weather.main && (
                <div className="city col-sm-6">
                    <h2 className="city-name">
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className="city-temp">
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        <p>{weather.weather[0].description}</p>
                    </div>
                    <p>O estilo de música recomendado é: { musicalStyle }</p>
                </div>
            )}
            <div class="row">
            <p>{ musics.map((music) => <Cards key={music.track.title} music={music} />)}</p>
            </div>
            </div>
            </div>
        )
    
}
</div>
)
}
