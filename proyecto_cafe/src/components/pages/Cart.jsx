import React, { useState } from 'react'
import { useContext } from 'react';
import { CoffeContext } from '../context/Context';
import CartElement from '../CartElement';
import CartTotal from '../CartTotal';

const Cart = () => {

    const { cart } = useContext(CoffeContext);


    return cart.length > 0 ? (
        <div className="containerCard">
            <div className="titulo cesta">

            </div>
            <div className="containerframe2">
                <div className="containerfame">
                    <div className="product">
                        <h3 className="colorH2 frameh3">Productos</h3>

                        <div className="separador"></div>

                        <div className="counter-container">

                            {/* ---------------------------Pintando Los productos seleccionados --------------*/}


                            <div className='containerProduct'>
                                {cart.map((product) => <CartElement product={product} key={product._id} />)}
                            </div>
                        </div>

                        <h3 className="colorH2 frameh3">Seleccionar envío</h3>

                        {/* <!-- ------------------------------------------------------------- --> */}

                        <div className="shipping">
                            <div className="containerShipping">
                                <div>
                                    <input className="radio" type="radio" />
                                </div>

                                <div className="details">
                                    <p className="paragraphsColor titleProduct">Envío 5-7 días</p>
                                    <p className="paragraphsColor">
                                        Opción estándar sin seguimiento
                                    </p>
                                </div>
                            </div>
                            <div className="price">
                                <h3 className="frameh3">GRATIS</h3>
                            </div>
                        </div>

                        <div className="shipping">
                            <div className="containerShipping">
                                <div>
                                    <input className="radio" type="radio" />
                                </div>

                                <div className="details">
                                    <p className="paragraphsColor titleProduct">
                                        Envío urgente 24h
                                    </p>
                                    <p className="paragraphsColor">
                                        Recibe tu pedido en las siguientes 24h (Para pedidos
                                        realizados altes de las 13:00).
                                    </p>
                                </div>
                            </div>
                            <div className="price">
                                <h3 className="frameh3">9,00€</h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- -----------------------------------total de carrito --> */}
                <div className="total">
                    <div className="details-total">
                        <h3 className="colorH2 frameh3 total-aling">Total del carrito</h3>

                        <div className="separador"></div>

                        <div className="card-details">
                            <div className="subtotal">
                                <p>SUBTOTAL</p>

                            </div>

                            <div id="price" className="price">
                                <CartTotal />
                            </div>
                        </div>

                        <div className="card-details">
                            <div className="subtotal">
                                <p>ENVÍO</p>
                            </div>

                            <div className="price">
                                <p className="paragraph">GRATIS</p>
                            </div>
                        </div>

                        <div className="separador"></div>

                        <div className="card-details">
                            <div className="subtotal">
                                <p className="paragraph">TOTAL</p>
                            </div>

                            <div className="frame-total">
                                <div className="priceIva">
                                    <p>0,00 €</p>
                                    <div className="smal">
                                        <small className="iva">Incluye 3,78€ de IVA</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-----------------boton total---------- --> */}

                        <div className="buttonWrapper">
                            <button className="btnChec bgV">Ir a checkout</button>

                            <button className="btnChec btnPaint">Seguir comprando</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className='cartContainer'>

            <h2 className='titleCart'>your cart is empty</h2>
        </div>
    );
}

export default Cart