import React from 'react';
import './stylesSearchbar.css';
// import {
//   SearchOutline
// } from "@graywolfai/react-heroicons";

const Searchbar = () => {
    return (
        <div className="searchbar">
          {/* <SearchOutline /> */}
          <input type="text" placeholder="Buscar en Twitter" />
        </div>
    )
}

export default Searchbar;
