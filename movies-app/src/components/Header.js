import { React, useState } from 'react';
import SearchBar from './SearchBar';
import { LogIn, LogOut } from './Access';
import Dropdown from './Dropdown';

function Header(props) {
    const moviesList = props.movies;
    const categories = [...new Set(moviesList.map(movie => movie.category))];

    return (
        <header>
            <nav className="nav-list">
                <ul className="nav-options">
                    <li className="homeLogo">
                        <a href="#####link_to_home_page#####" title="Movies App Home">
                            <img src="createLogoImageForApp" />
                        </a>
                    </li>
                    <li className="categories">
                        <Dropdown options={categories} value="" />
                    </li>
                    <li>
                        <SearchBar />
                    </li>
                    <li>
                        <LogIn />
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;


/* Stuff to still do:
    - create a logo for the header
*/