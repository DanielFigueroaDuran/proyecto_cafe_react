import React from 'react'
import { Link } from 'react-router-dom';
import Phone from "../assets/icon/Phone.png";
import Email from "../assets/icon/email2.png";
import ButtonContact from './ButtonContact';


const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-wrapper">
                    <div className="logo">
                        <a href="index.html"><h2 className="title">cafedealtura.com</h2></a>
                        <div className="icon icon_coffee"></div>

                    </div>

                    <div className="content-footer">
                        <div className="footer-car">
                            <h3>Te ayudamos en</h3>
                            <div className="details">
                                <div className="tel-footer button">

                                    <Link>

                                        <ButtonContact
                                            className={'icon_tel2'}
                                            classnumber={'numero'}
                                            img={Phone}
                                            paragraph={'+34 919 49 05 18'}
                                        />

                                    </Link>

                                </div>

                                <div className="email-footer email button">

                                    <Link to={'#'}>

                                        <ButtonContact
                                            className={'icon_email'}
                                            img={Email}
                                            paragraph={'hola@cafedealtura.com'}
                                        />

                                    </Link>

                                </div>
                            </div>
                        </div>

                        <div className="footer-car">
                            <ul className="list-footer">
                                <Link to={'#'} ><h4>Tienda</h4></Link>
                                <Link to={'#'} ><h4>Suscripción</h4></Link>
                                <Link to={'#'} ><h4>Para empresas</h4></Link>
                                <Link to={'#'} ><h4>Sobre nosotros</h4></Link>
                                <Link to={'#'} ><h4>Contacto</h4></Link>
                            </ul>
                        </div>

                        <div className="footer-car list">
                            <ul className="list-footer">
                                <Link to={'#'} ><h4>Política de privacidad</h4></Link>
                                <Link to={'#'} ><h4>Política de cookies</h4></Link>
                                <Link to={'#'} ><h4>Términos y condiciones</h4></Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="footer-copy">
                <h4>Todos los derechos reservados - Café de Altura SL - 2022</h4>
            </div>
        </>
    )
}

export default Footer