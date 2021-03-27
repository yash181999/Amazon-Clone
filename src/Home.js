import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className ="home">
            <div className="home_container">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/OPPO/FPF-Mar/F19/3000._CB657066900_.jpg" alt = ""/>

                <div className="home_row">
                    <Product id="12321341" title="The lean startup" price={29.99} image={"https://m.media-amazon.com/images/I/81vKT2GiQKL._AC_SY400_.jpg"} rating={3}/>
                    
                    <Product id="49538094" title="I Phone 12 Mini" image={"https://m.media-amazon.com/images/I/71ZOtNdaZCL._AC_SY400_.jpg"} price={999} rating={4}/>

                  
                </div>

                <div className="home_row">
                    <Product id="4903850" title="OnePlus Nord 5G (Blue Marble, 12GB RAM, 256GB Storage)" price={1000} image={"https://images-na.ssl-images-amazon.com/images/I/71Lx9l3NivL._SL1500_.jpg"} rating={5}/>
                    
                    <Product id="23445930" title="All-new Echo Dot (4th Gen) | Next generation smart speaker with improved bass and Alexa (Black)" price={200} image={"https://images-na.ssl-images-amazon.com/images/I/61KIy6gX-CL._SL1000_.jpg"} rating={3} />
                    <Product id="3254354345" title="New Apple iPad Pro (12.9-inch, Wi-Fi, 512GB) - Space Grey (4th Generation)" price={1000} image={"https://images-na.ssl-images-amazon.com/images/I/811aBwuSuIL._SL1500_.jpg"} rating={4}/>
                </div>

                <div className="home_row">
                    <Product id="90829332" title="Samsung 32-inch (80.01cm) Flat UHD Monitor with 178 Degree Viewing Angle - LU32J590UQWXXL" price={300} image={"https://images-na.ssl-images-amazon.com/images/I/91XfEXGz9UL._SL1500_.jpg"} rating={4}/>
                </div>

            </div>
        </div>
    )
}

export default Home
