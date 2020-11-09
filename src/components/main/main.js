import React from 'react';
import PrimaryCol from '../primaryCol/primary-col';
import SidebarCol from './sidebarCol/sidebar-col';
import './stylesMain.css';

const Main = (props) => {
    return (
        <div className="t-main">
            <PrimaryCol profileUrl={props.profileUrl} />
            <SidebarCol cambiarImagen={props.cambiarImagen} />
        </div>
    )
}

export default Main;