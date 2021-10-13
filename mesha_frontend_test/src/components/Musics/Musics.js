import React, { useState } from 'react';
import { fetchMusic } from '../../services/api';

const Musics = () => {
    const [musics, setMusics] = useState(false);
    
    const getMusicsList = async () => {
        const data = await fetchMusic(musicalStyle);
            setMusics(data);
    }

    return (
        <div className="main">
        <div className="main-container">
            <input type="text" className="search" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)}onKeyPress={search}/>
            {weather.main && (
                <div className="city">
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
                </div>
            )}
        </div>
        </div>
    );
}

export default Musics;

/* { musics.tracks.hits.map((music) => <Cards key={ music.track.title } music={ music } />) } */