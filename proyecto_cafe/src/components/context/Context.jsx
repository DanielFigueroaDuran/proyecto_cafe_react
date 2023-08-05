import React, { useEffect } from 'react'
import { createContext, useState } from "react";
import { getData } from '../../helpers/data';

export const CoffeContext = createContext();

const Context = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const apiCoffe = `https://cafe-de-altura.vercel.app/api/products`;

    useEffect(() => {
        getData(apiCoffe).then(coffe => setProducts(coffe))
    }, [])

    //console.log(products);

    return (
        <CoffeContext.Provider value={{ products, cart, setProducts, setCart }}>
            {children}
        </CoffeContext.Provider>
    )
}

export default Context

