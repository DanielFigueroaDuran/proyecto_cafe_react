import React from 'react'
import { Link } from 'react-router-dom';

const UserForm = () => {
    return (
        <form action="#">
            <div className="input-group">
                <div className="cont">
                    <label htmlFor="username">Nombre Completo</label>
                    <input type="text" name="username" id="username" placeholder="Nombre Completo" />
                </div>

                <div className="cont">
                    <label htmlFor="email">Email</label>
                    <input required type="email" name="email" id="email" placeholder="Email" />
                </div>

                <div className="">
                    <label htmlFor="phone">Teléfono</label>

                    <div className="select-group">

                        <select name="phone" id="phone">
                            <option className="option-color" value="us">US</option>
                            <option className="option-color" value="es">ES</option>
                            <option className="option-color" value="otro">Otro</option>

                        </select>

                        <input type="tel" name="phone" id="phone" placeholder="+1 (555) 987-6543" />
                    </div>

                </div>

                <div className="cont cont-area">
                    <label htmlFor="massage"></label>
                    <textarea name="message" id="message" cols="30" rows="5" placeholder="¿En qué podemos ayudarte?"></textarea>
                </div>


                <div className="form-txt">
                    <input type="checkbox" name="terminos" value="condiciones" />
                    <label htmlFor="terminos">
                        <p>
                            Acepto la  <Link to={'#'}>Política de privacidad</Link> y los
                            <Link to={'#'}>Términos y condiciones</Link>
                        </p>
                    </label>
                </div>
                <input className="btn" type="submit" value="Enviar" />
            </div>
        </form>
    )
}

export default UserForm