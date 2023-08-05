import React from 'react'
import CardCondicionesComponente from './CardConditionsComponents'
import receive from "../assets/icon/Illustration.png";
import shipping from "../assets/icon/Illustration2.png";
import discounts from "../assets/icon/Illustration3.png";

const CardConditions = () => {
    return (
        <div className="cards">
            <h2 >Café con las mejores condiciones</h2>
            <div className="card-wrapper">

                <CardCondicionesComponente img={receive}
                    title={'Recibe tu pedido sin preocuparte'}
                    paragraph={'Tienes cosas más importantes en la cabeza, por eso con nuestra suscripción de café, nunca te quedarás sin tu taza de la mañana.'}
                />

                <CardCondicionesComponente
                    img={shipping}
                    title={'Envío en 24/48h'}
                    paragraph={' Pide tu café antes de las 12h y lo recibirás al día siguiente.'}
                />

                <CardCondicionesComponente
                    img={discounts}
                    title={'Descuentos y beneficios'}
                    paragraph={'Cada dos meses, te regalamos una bolsa de un nuevo origen sorpresa, para que lo descubras junto a nosotros.'}
                />
            </div>
        </div>
    )
}

export default CardConditions