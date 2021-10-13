import React, { useState, useEffect } from 'react';
import Cards from '../Cards/Cards';
import './PlaylistsCard.css';

const PlaylistsCard = () => {
    const [playlists, setPlaylists] = useState(false);
        let playlistsArr;
        let arrPl;
        let arr;

    const getPlaylists = () => {
        playlistsArr = JSON.parse(localStorage.getItem('data'));
        arrPl = playlistsArr.map((playlist) => playlist[0]);
        arr = arrPl.map((arr) => arr);
        console.log(playlistsArr);
    }

    getPlaylists();

    useEffect(() => {

        getPlaylists();

    }, [playlists]);

    

    const deletePlaylist = (index) => {
        playlistsArr.splice(index, 1);
        localStorage.setItem('data', JSON.stringify(playlistsArr));
        setPlaylists(!playlists);
    }

    return (
        <div>
        <h2>Playlists Salvas</h2>
            {arr.map((ar, index) => 
            <div>
            
            <div className="pl-card">Data da pesquisa: {ar.data}</div>
            <div className="pl-card">Cidade Pesquisada: {ar.cidade}</div>
            <div className="pl-card">Temperatura no dia: {ar.temperatura}</div>
            <div className="pl-card">Estilo musical recomendado foi: {ar.estilo}</div>

            <div className='row'>
                {ar.musicas.map((music) => (
                    <Cards key={music.track.title} music={music} />
                ))}
                </div>


            <button className='btn btn-primary btn-xs delete-button' type="submit" onClick={() => deletePlaylist(index)}>Apagar Playlist</button>
            <hr></hr>
        </div>)}
        </div>
    );
}

export default PlaylistsCard;

