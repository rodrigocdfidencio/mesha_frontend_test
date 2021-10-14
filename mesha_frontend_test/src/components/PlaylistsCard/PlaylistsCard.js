import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cards from '../Cards/Cards';
import './PlaylistsCard.css';

const PlaylistsCard = () => {
  const [playlists, setPlaylists] = useState(false);
  let playlistsArr;
  let arrPl;
  let arr;

  const getPlaylists = () => {
    playlistsArr = JSON.parse(localStorage.getItem('data'));
    if (playlistsArr) {
      arrPl = playlistsArr.map((playlist) => playlist[0]);
      arr = arrPl.map((arr) => arr);
    }
  };

  getPlaylists();

  useEffect(() => {
    getPlaylists();
  }, [playlists]);

  const deletePlaylist = (index) => {
    playlistsArr.splice(index, 1);
    localStorage.setItem('data', JSON.stringify(playlistsArr));
    setPlaylists(!playlists);
  };

  return (
    <div>
      {!playlistsArr ? (
        <div>
          <h2>Você não tem playlists salvas</h2>
          <Link to='/'>
            <button className='btn btn-primary btn-xs' type='submit'>
              Home
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <h2>Playlists Salvas</h2>
          <Link to='/'>
            <button className='btn btn-primary btn-xs' type='submit'>
              Home
            </button>
          </Link>
          {arr.map((ar, index) => (
            <div className='playlists'>
              <div className='pl-card'>Data da pesquisa: {ar.data}</div>
              <div className='pl-card'>Cidade Pesquisada: {ar.cidade}</div>
              <div className='pl-card'>
                Temperatura no dia: {ar.temperatura}
                <sup>&deg;C</sup>
              </div>
              <div className='pl-card'>
                Estilo musical recomendado foi: {ar.estilo}
              </div>

              <div className='row'>
                {ar.musicas.map((music) => (
                  <Cards key={music.track.title} music={music} />
                ))}
              </div>

              <button
                className='btn btn-primary btn-xs'
                type='submit'
                onClick={() => deletePlaylist(index)}
              >
                Apagar Playlist
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlaylistsCard;
