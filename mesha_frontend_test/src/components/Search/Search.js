import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchWeather, fetchMusic } from '../../services/api';
import Cards from '../Cards/Cards';

import './Search.css';

export default function Search() {
  const [weather, setWeather] = useState(false);
  const [search, setSearch] = useState('');
  const [musicalStyle, setMusicalStyle] = useState('');
  const [musics, setMusics] = useState(false);
  const [city, setCity] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const weatherSearch = async () => {
    setCity(search);
    const data = await fetchWeather(search);
    setWeather(data);
    setSearch('');
  };

  const getMusicsList = async () => {
    const data = await fetchMusic(musicalStyle);
    setMusics(data.data.tracks.hits);
  };

  const savePlaylist = () => {
    let date = new Date();
    let dataFormatada =
      date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

    let str = city;
    let capitalized = str[0].toUpperCase() + str.substr(1);

    let newData = [
      {
        data: dataFormatada,
        musicas: musics,
        temperatura: weather['main']['temp'],
        estilo: musicalStyle,
        cidade: capitalized,
      },
    ];

    if (localStorage.getItem('data') == null) {
      localStorage.setItem('data', '[]');
    }

    let oldData = JSON.parse(localStorage.getItem('data'));
    oldData.push(newData);

    localStorage.setItem('data', JSON.stringify(oldData));
    setDisabled(true);
  };

  useEffect(() => {
    if (weather) {
      let temp = weather['main']['temp'];
      if (temp <= 16) {
        setMusicalStyle('Lofi');
      } else if (temp > 16 && temp <= 24) {
        setMusicalStyle('Classica');
      } else if (temp > 24 && temp <= 32) {
        setMusicalStyle('Pop');
      } else if (temp > 32) {
        setMusicalStyle('Rock');
      }
    }
  }, [weather]);

  useEffect(() => {
    if (musicalStyle) {
      getMusicsList(musicalStyle);
    }
  }, [musicalStyle]);

  return (
    <div>
      {!musics ? (
        <div>
          <div>
            Selecione uma cidade e receba, al??m das condi????es meteorol??gicas,
            uma lista de m??sicas personalizada
          </div>
          <input
            className='search'
            placeholder='Cidade'
            id='city'
            type='search'
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          ></input>
          <button
            className='btn btn-primary btn-xs'
            type='submit'
            onClick={weatherSearch}
          >
            Buscar
          </button>
          <Link to='/playlists'>
            <button className='btn btn-primary btn-xs' type='submit'>
              Minhas Playlists
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <div>
            <div>
              <input
                className='search'
                placeholder='Cidade'
                id='city'
                type='search'
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              ></input>
              <button
                className='btn btn-primary btn-xs'
                type='submit'
                onClick={weatherSearch}
              >
                Buscar
              </button>
              <Link to='/playlists'>
                <button className='btn btn-primary btn-xs' type='submit'>
                  Minhas Playlists
                </button>
              </Link>
            </div>
            <div class='row'>
              <div class='col-4'>
                <div>
                  <div>
                    <div>
                      {weather.main && (
                        <div className='city'>
                          <h2 className='city-name'>
                            <span>{weather.name}</span>
                            <sup>{weather.sys.country}</sup>
                          </h2>
                          <div className='city-temp'>
                            {Math.round(weather.main.temp)}
                            <sup>&deg;C</sup>
                          </div>
                          <div className='info'>
                            <img
                              className='city-icon'
                              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                              alt={weather.weather[0].description}
                            />
                            <p>{weather.weather[0].description}</p>
                          </div>
                          <div className='music-style'>
                            O estilo de m??sica recomendado ??: {musicalStyle}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className='col'>
                <div className='row'>
                  {musics.map((music) => (
                    <Cards key={music.track.title} music={music} />
                  ))}
                </div>
                <button
                  className='btn btn-primary btn-xs'
                  onClick={savePlaylist}
                  type='submit'
                  disabled={disabled}
                >
                  {!disabled
                    ? 'Salvar playlist como favorita'
                    : 'Playlist salva'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
