import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header class="header"><h1>Weather Music App</h1>
        <Link to="/playlists">
              <button
                className='btn btn-primary btn-xs'
                type='submit'
              >
                Minhas Playlists
              </button>
              </Link>
              <Link to="/">
              <button
                className='btn btn-primary btn-xs'
                type='submit'
              >
                Home
              </button>
              </Link>
        </header>
    );
}

export default Header;