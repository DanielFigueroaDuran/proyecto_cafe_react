import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { CoffeContext } from './context/Context';

const CartCounter = ({ minius, plus, product, quanty }) => {

    const { cart, setCart } = useContext(CoffeContext);

    const [counter, setCounter] = useState(quanty)
    //console.log(product.quanty);

    const handleSubs = () => {
        const productRepeat = cart.find((coffe) => coffe._id === product._id);
        setCounter(
            productRepeat.quanty !== 1 && setCart(cart.map((item) => (item._id === product._id
                ? { ...product, quanty: productRepeat.quanty -= 1 }
                : item))));


        // setCounter(prev => prev -= 1)
        // if (counter === 0) {
        //     return setCounter(0);
        // }
    }

    const handleAdd = (product) => {
        // setCounter(prev => prev += 1)
        //        console.log(product);

        //     const productRepeat = cart.find((coffe) => coffe._id === product._id);

        //     if (productRepeat) {
        //         setCart(cart.map((coffe) => (coffe.id === product._id
        //             ? { ...product, quanty: productRepeat.quanty += 1 }
        //             : coffe)))
        //     } else {
        //         setCart([...cart, product]);
        //     }

    }


    return (
        <>
            <button className="btn disminuir" onClick={handleSubs} >
                <img
                    src={minius}
                    alt=""
                />
            </button>

            <span id="counter">

                <p className='counter'>{counter}</p>

            </span>

            <button className="btn aumentar" onClick={handleAdd} >
                <img src={plus} alt="" />
            </button>



            {/* <button className="btn disminuir">
                    <img
                        src={Minus}
                        alt=""
                    />
                </button>*/}
            {/* <span id="counter">

                    <p className='counter'>{counter}</p>

                </span> */}

            {/* <CartCounter plus={Plus} /> */}

            {/* <button className="btn aumentar">
                    <img src={Plus} alt="" />
                </button>  */}
        </>
    )
}

export default CartCounter