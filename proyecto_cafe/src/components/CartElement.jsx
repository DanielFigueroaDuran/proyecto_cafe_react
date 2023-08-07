import React, { useState } from 'react'
import Minus from "../assets/icon/heroicons-outline_minus-sm.png";
import Plus from "../assets/icon/heroicons-outline_plus-sm.png";
import Counter from "../assets/icon/Counter.png";
import Button from './Button';
import CartCounter from './CartCounter';


const CartElement = ({ product }) => {
    //const { price, brand, img_url } = product
    const { price, brand, img_url, _id, quanty } = product;

    //console.log(quanty);

    return (
        <div className='cartCoffe'>
            <div className="btn">

                <CartCounter minius={Minus} plus={Plus} product={product} quanty={quanty} />

            </div>

            <div className='containerProduct' key={_id}>
                <div className='productCoffe' >
                    <img className="article" src={img_url} alt="cafe" />

                    <div className="detailContainer">
                        <div className="details">
                            <p className="paragraphsColor titleProduct">
                                {brand}
                            </p>
                            <p className="paragraphsColor">Paquete de café, 250 gr</p>
                        </div>

                        <div className="price">
                            <h3 className="frameh3">{price * quanty},00€</h3>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    )
}

export default CartElement