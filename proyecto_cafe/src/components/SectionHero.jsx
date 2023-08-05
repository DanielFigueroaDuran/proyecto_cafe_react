import React from 'react'
import Button from './Button'

const SectionHero = () => {
    return (
        <section className='hero'>
            <div className="wrapper">
                <div className="content">
                    <h3 className="pre-title">De la planta a tu taza</h3>
                    <h1>El mejor café del mundo, ahora en tu casa.</h1>

                    <p className="paint">
                        Trabajamos con agricultores de todo el mundo para seleccionar los
                        mejores granos de café y que puedas viajar desde la comodidad de tu
                        hogar.
                    </p>
                    <div className="button-wrapper">
                        <Button className={'button1'} label={'Descubrir orígenes'} />

                        <Button className={'button2'} label={'Comparar Café'} />  {/*le falta colocar el link */}
                    </div>
                </div>
                <div className="hero-image">
                    {/* <img src="../assets/img/Hero image.png" alt="image_cafe"> */}
                </div>
            </div>
        </section>
    )
}

export default SectionHero