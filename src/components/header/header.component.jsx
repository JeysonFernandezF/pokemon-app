import React from 'react'

import './header.style.scss';

import { Link } from 'react-router-dom';

const Header = () => (
        <div className="header">
            <Link to='/'>
                HomePage
            </Link>
            <Link to='/pokedex'>
                Pokedex
            </Link>
        </div>
)


export default Header;
