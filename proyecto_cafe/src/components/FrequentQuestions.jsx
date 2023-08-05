import React from 'react'
import CardQuestions from './CardQuestions'
import Icon from "../assets/icon/Iconpico.png";
import Arrow from "../assets/icon/Icon3.png";
import Show from './Show';

const FrequentQuestions = () => {
    return (

        <div className="faq">
            <h2 className="faq-title">Preguntas frecuentes</h2>
            <div className="faq-wrapper">

                <CardQuestions className={'separador'} title={'¿Cómo hago el pedido?'} img={Icon} paragraph={' Selecciona el café que desees probar y completa el proceso de compra. Si lo prefieres, te preguntaremos cada cuánto quieres que te lo mandemos a casa y así nunca te quedarás sin café.'} />

                <CardQuestions className={'separador'} title={'¿Por qué los precios son tan bajos?'} img={Icon} paragraph={' Viajamos constantemente para encontrar los mejores granos y a los agricultores más exigentes. Si podemos ofrecerte estos precios es porque tratamos directamente con los productores de café, sin intermediarios. Así obtenemos el mejor precio para ti y la persona que está detrás de los granos de café recibe el mayor beneficio posible.'} />


                <CardQuestions title={'¿Es posible enviar café a mi oficina?'} img={Icon} />

            </div>

            <Show
                className={'footer-card2'}
                label={'Resolvemos tus dudas'}
                icon={Arrow}
                classIcon={'arrow'}
            />
        </div>
    )
}

export default FrequentQuestions