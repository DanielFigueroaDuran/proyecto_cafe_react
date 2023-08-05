import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { CoffeContext } from "../context/Context";
import Show from '../Show'
import Arrow from "../../assets/icon/Icon.png";
import { getData } from "../../helpers/data";
import SectionCoffeComponents from '../SectionCoffeComponents';
import Cesta from '../Cesta';

const Tienda = ({ children }) => {

    const { products, cart, setProducts, setCart } = useContext(CoffeContext);


    //console.log(cart);

    // useEffect(() => {
    //     getData(apiCoffe).then(data => setProducts(data))
    // }, [])

    const handleClick = (product) => {

        //console.log(product);

        setCart([...cart, product]);

        console.log(cart);

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