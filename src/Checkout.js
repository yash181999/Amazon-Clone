import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'

function Checkout() {

    const [{basket},dispatch] = useStateValue();
    


    return (
        <div className="checkout">

            <div className="checkout_left">
                <img className="checkout_ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Events/250_cashback/1500x600_Hero-Tall_NP. _CB656864116_.jpg"/>

            <div>
                <h2 className="checkout_title">Your Shopping Basket</h2>

                
            </div>

        </div>
            <div className="checkout_right">
                <Subtotal></Subtotal>
            </div>
        </div>
    )
}

export default Checkout
