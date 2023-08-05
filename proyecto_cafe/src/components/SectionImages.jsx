import React from 'react'
import Icon from "../assets/icon/Icon.png";
import { Link } from 'react-router-dom';


const SectionImages = () => {
    return (
        <section className="hero2">
            <div className="wrapper2">
                <div className="content2">

                    <h2 className="pre-title2">Pruébalo en nuestro coffee shop</h2>

                    <p className="paragraph">
                        Visita nuestra cafetería en el centro de la ciudad para probar los
                        granos de café antes de hacer tu pedido y llévate un descuento
                    </p>
                    <div className="footer-card2">
                        <Link className="paragraph-2">Cómo llegar</Link>
                        {/* <a className="paragraph-2" href="#">Cómo llegar</a> */}

                        <img
                            src={Icon}
                            alt="Arrow"
                        />
                    </div>
                </div>
                <div className="hero-image2"></div>
            </div>
        </section>
    )
}

export default SectionImages