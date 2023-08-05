import React from 'react'
import Icont from "../assets/icon/Icont.png";
import Mail from "../assets/icon/Mail.png";
import UserForm from './UserForm';
import { Link } from 'react-router-dom';


const Contact = () => {
    return (
        <div className="desktop">
            <div className="leading">
                <div className="sections-contact">
                    <div className="header-contact">
                        <h3>Entra en contacto con nosotros</h3>

                        <p>Si tienes dudas, ponte en contacto con nosotros a    través del formulario y te responderemos lo antes   posible.
                        </p>

                    </div>
                    <div className="hero-content">
                        <p >También puedes ponerte en contacto con nostros en nuestra dirección o a través del teléfono de la tienda.</p>

                        <address>
                            <p>742 Evergreen Terrace</p>
                            <p>Springfield, OR 12345</p>
                        </address>
                        <div className="details">
                            <div className="tel2">
                                <div className="icon_tel2">
                                    <img src={Icont} alt="" />

                                    <p className="numero">+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div className="email">
                                <div className="icon_email">
                                    <img src={Mail} alt="" />

                                    <p>support@example.com</p>
                                </div>
                            </div>
                        </div>

                        <p>¿Buscas un trabajo? <Link to={'#'}>Ver nuestras ofertas.</Link></p>

                    </div>
                </div>

                {/* <!------------------- Formulario----------------- --> */}
                <UserForm />
            </div>
        </div>
    )
}

export default Contact