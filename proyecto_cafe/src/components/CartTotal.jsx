import React, { useEffect } from 'react'
import { useContext } from 'react';
import { CoffeContext } from './context/Context';

const CartTotal = () => {


    const { cart } = useContext(CoffeContext);

    const subTotal = cart.reduce((acc, coffe) => acc + coffe.price * coffe.quanty, 0)

    //const iva = cart.reduce((acc, coffe) => acc + coffe.price * coffe.quanty * 21 / 100, 0)

    //console.log(iva)

    return (
        <div>
            <p className="paragraph">{subTotal}, 00 €</p>
        </div>
    )
}

export default CartTotal