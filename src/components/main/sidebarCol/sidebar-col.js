import React from 'react';
import Searchbar from './searchbar/searchbar';
import Trends from './trends/trends';

const SidebarCol = (props) => {
    return (
        <div className="t-sidebar-col">
            {/* <button onClick={props.cambiarImagen}>Cambiar la imagen de perfil</button> */}
            <Searchbar />
            <Trends />
        </div>
    )
}

export default SidebarCol;