import React, { Component } from 'react';

import './App.css';
import ProductDetail from './productDetail';
import NavButton from './button';
import DivCarousel from './crousel';

export default class Content extends Component{
    render(){
        return(
            <div className="content">
                {/* Link Anchor */}
                <section id='content'></section>
                <div className="slide1">
                    <img src="./farmer.png" height="150px" alt="portrailt" data-delighter="start:0.5;"/>
                    <span style={{fontSize:'150px', lineHeight:'0.6em', opacity:'0.2', userSelect:'none'}}>&#10077;</span>
                    <h1>We Are:</h1>
                    <p data-delighter="start:0.5;">
                        A family-owened local retailer who delivers the fresh, house-made, delicious veggetables and fruits
                        through our trusted local farmers. The foods we offer daily garantees the 100 % of satisfaction and you sure will love coocking with them once you get the taste. 
                        The business was passed down through the familiy of Mitsuishi for three generations, and with the srtong connection we have built with local producers,
                        we will assure your perfect meals with highly nutircious options. 
                    </p>
                </div>
            
                <div className="slide2">
                    <h1>Products</h1>
                    <p>Vegies that we sell are crazy delicious.we garunteed for the quality taste for your special meals.</p>
                    <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
                        <ProductDetail item="apple" producer="Jane Kim" location="Vancouver BC" price="1.99"/>
                        <ProductDetail item="brocolli" producer="Jane Kim" location="Victoria BC" price="2.00" />
                        <ProductDetail item="carrot" producer="Megan Drake" location="Edmonton AB" price="1.69"/>
                        <ProductDetail item="lettuce" producer="Leon Popper" location="Ignace ON" price="0.99"/>
                    </div>
                    <div style={{textAlign:"center"}}>
                        <NavButton link='./products' title='Check out more of our products'/>
                    </div>
                </div>
            
                <div className="slide3">
                    <h1>Customers</h1>
                    <DivCarousel />
                </div>
            
                <div className="slide4">
                    <h1>Contact</h1>
                    <div className="contact">
                        <p>You can call us in, or come in to the store and see for yourself our freash and delicious food. </p>
                        <h3>Reach Us At</h3>
                        <p>1256 Center St, Hixon OB <br/> +1(877)123-1234</p>
                        <h3>Open Hours</h3>
                        <p>
                            Mon-Fri:9:00AM - 6:00PM<br/>
                            *Closed for weekends and holidays.
                        </p>
                    </div>
                </div> 
            </div>
        );
    }
}