import React from 'react';
import './PlaceHolder.scss';
import SideMenu from './../SideMenu/SideMenu';

function PlaceHolder() {
    const mostrarAlerta = () => {
        alert('Hola Mundo');
    };

    return (
        <div className='placeholder'>
            <SideMenu />
            <button onClick={mostrarAlerta} style={{ zIndex: 1 }} >Mostrar Alerta</button>
        </div>
    );
}

export default PlaceHolder;
