import React from 'react'
import { Link, Outlet } from "react-router-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Tienda from './pages/Tienda';


const Header = () => {
    return (
        <>
            <header>
                <div className='logo'>
                    <Link to={'/'}><h2 className='title'>cafedealtura.com</h2></Link>
                    <div className='icon icon_coffee'></div>
                </div>

                <nav>
                    <ul className='links'>
                        <Link to="/tienda">Tienda</Link>
                        <Link to="#">Suscripción</Link>
                        <Link to="#">Para Empresas</Link>
                        <Link to="#">Sobre nosotros</Link>
                        <Link to="#">Contacto</Link>
                    </ul>
                </nav>

                <div className='tel'>
                    <div className='icon_tel'></div>
                    <Link to={'#'}><p className='numero'>+34 919 49 05 18</p></Link>
                    <Link to={'#'} className='button'>Iniciar sesión</Link>
                </div>

                <div>
                    <Link to={'/cesta'}>
                        <div className='icon_lock'></div>
                    </Link>
                    {/* <img src="./assets/icon/Defaul.png " alt="icon-lock" /> */}

                </div>

            </header>
            <Outlet />
        </>
    )
}

export default Header