import React from 'react'
import Minus from "../assets/icon/heroicons-outline_minus-sm.png";
import Plus from "../assets/icon/heroicons-outline_plus-sm.png"
import Counter from "../assets/icon/Counter.png";
import Colombia from "../assets/img/colombia.png";

const Cesta = () => {
    return (
        <div className="containerCard">
            <div className="titulo cesta">

            </div>
            <div className="containerframe2">
                <div className="containerfame">
                    <div className="product">
                        <h3 className="colorH2 frameh3">Productos</h3>

                        <div className="separador"></div>

                        <div className="counter-container">
                            <div className="btn">
                                <button className="btn disminuir">
                                    <img
                                        src={Minus}
                                        alt=""
                                    />
                                </button>
                                <span id="counter"
                                ><img src={Counter} alt=""
                                    /></span>
                                <button className="btn aumentar">
                                    <img
                                        src={Plus}
                                        alt=""
                                    />
                                </button>
                            </div>

                            <div>
                                <img
                                    className="article"
                                    src={Colombia}
                                    alt="cafe"
                                />
                            </div>

                            <div className="detailContainer">
                                <div className="details">
                                    <p className="paragraphsColor titleProduct">
                                        Colombia La Casita
                                    </p>
                                    <p className="paragraphsColor">Paquete de café, 250 gr</p>
                                </div>

                                <div className="price">
                                    <h3 className="frameh3">9,00€</h3>
                                </div>
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
                                {/* <!-- <p className="paragraph">18,00€</p> --> */}
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
                                    <p className="paragraph">18,00€</p>
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
    )
}

export default Cesta