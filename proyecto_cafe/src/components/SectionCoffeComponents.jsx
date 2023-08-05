import React from 'react'
import Button from './Button'

const SectionCoffeComponents = ({ product, handleClick }) => {
    //console.log(product);
    const { price, brand, img_url } = product

    // <img src={img === "naranjos" ? naranjos : img === "laos" ? laos : ''} alt="coffe" />
    return (
        <div className='product-card card'>
            <div className='container-card images-cafe cardCafe'>
                <img className='cafeImg' src={img_url} alt="coffe" />
                <div className='tex'>
                    <p className='paragraph paragraph-card'>{brand}</p>
                    <p className='price'>{price},00 €</p>
                </div>
                <Button
                    className={'button-caja button-cafe'}
                    type={'button'}
                    label={'Añadir'}
                    handleClick={handleClick}
                />
            </div>
        </div>
    )
}

export default SectionCoffeComponents