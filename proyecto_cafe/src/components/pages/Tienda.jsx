import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { CoffeContext } from "../context/Context";
import Show from '../Show'
import Arrow from "../../assets/icon/Icon.png";
import { getData } from "../../helpers/data";
import SectionCoffeComponents from '../SectionCoffeComponents';
//import Cart from './Cart';

const Tienda = () => {

    const { products, cart, setProducts, setCart } = useContext(CoffeContext);

    //console.log(cart);


    const handleClick = (product) => {

        // console.log(product);
        setCart(prev => {
            const productRepeat = prev.find((coffe) => coffe._id === product._id);
            if (productRepeat) {
                productRepeat.quanty += 1;
                return prev;
            } else {
                return [...prev, { quanty: 1, ...product }]
            }

        })

        // const productRepeat = cart.find((coffe) => coffe._id === product._id);
        // if (productRepeat) {
        //     setCart(cart.map((item) => (item._id === product._id
        //         ? { ...product, quanty: productRepeat.quanty + = 1 }
        //         : item)));
        // } else {
        //     setCart([...cart, {quanty: 1 ...product}]);
        // }

        //console.log(cart);
    };

    return (
        <div className="cardss">
            <h2 className="title-cards">Últimos orígenes</h2>

            <div className="card-wrapper2">
                <div className="coffe">
                    {
                        products.map((product, i) => <SectionCoffeComponents product={product} key={product._id} handleClick={() => handleClick(product)} />)
                    }
                </div>
            </div>

            <Show
                className={'footer-card'}
                link={'Tienda'}
                label={'Ver Todos'}
                icon={Arrow}
            />
        </div>
    )
}

export default Tienda