import React from 'react';
import './stylesSearchbar.css';
import {SearchOutline} from "@graywolfai/react-heroicons";

const Searchbar = () => {
    return (
        <div className="searchbar-container">
          <div className="searchbar">
            <SearchOutline className="search-outline" />
            <input className="input" type="text" placeholder="Buscar en Twitter" />
          </div>
        </div>
    )
}

export default Searchbar;
