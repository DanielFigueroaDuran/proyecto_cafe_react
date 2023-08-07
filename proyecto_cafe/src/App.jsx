import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context from './components/context/Context';
import Header from './components/Header'
import CoffePages from './components/pages/CoffeePage';
import Tienda from './components/pages/Tienda';
import Cart from './components/pages/Cart';

function App() {

    return (
        <Context>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Header />}>
                            <Route index element={<CoffePages />} />
                            <Route path='tienda' element={<Tienda />} />
                            <Route path='/cesta' element={<Cart />} />
                        </Route>
                    </Routes>
                </BrowserRouter >
            </div>
        </Context>
    )
}

export default App
