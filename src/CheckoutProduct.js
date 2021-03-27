import React from 'react'

function CheckoutProduct({id, image, price,title, rating}) {
    return (
        <div className="CheckoutProduct">
            <img className='checkoutProduct_image' src={image}/>
            <div className='checkoutProduct_info'>
                <p className="checkoutProduct_title">{title}
                </p>

                <p className="checkoutProduct_price">{price}</p>

                <p className="checkoutProduct_rating">{rating}</p>

                <p className="checkoutProduct_price">{price}</p>





            </div>
        </div>
    )
}

export default CheckoutProduct
