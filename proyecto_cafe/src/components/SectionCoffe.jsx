import React, { useContext, useEffect, useState } from 'react'
import SectionCoffeComponents from './SectionCoffeComponents'
import Show from './Show'
import Arrow from "../assets/icon/Icon.png";
import Tienda from "./pages/Tienda";
import { getData } from '../helpers/data';
import { CoffeContext } from './context/Context';


const SectionCoffe = ({ children }) => {
    const { products, setProducts } = useContext(CoffeContext);

    // console.log(products);

    //const apiCoffe = `https://cafe-de-altura.vercel.app/api/products`;

    // const getData = async (url) => {
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     const newData = data.products;
    //     //console.log(data.products);
    //     return newData;

    //     // const coffe = [];

    //     // for (let i = 0; i < 4; i++) {
    //     //     coffe.push(newData[i]);

    //     // }


    // }

    // useEffect(() => {
    //     getData(apiCoffe).then(data => setProducts(data));
    // }, []);

    // console.log(products);

    return (
        <div className="cardss">
            <h2 className="title-cards">Novedades</h2>
            <div className="card-wrapper2">

                {
                    // products.map((product, i) => i < 4 ? <SectionCoffeComponents product={product} key={product._id} /> : null)
                    products.slice(0, 4).map((product, i) => <SectionCoffeComponents product={product} key={product._id} />)
                }

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

export default SectionCoffe