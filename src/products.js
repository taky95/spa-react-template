import React from 'react';
import styled from "styled-components";
import ProductDetail from './productDetail';

const style = {
    display:'flex', 
    justifyContent:'flex-start',
    flexWrap:'wrap',
    padding: '10%',
}

function Products() {
    return(
        <Wrapper>
            <h1>Products</h1>
            <div style={style}>
                <ProductDetail item="apple" producer="Jane Kim" location="Vancouver BC" price="1.45"/>
                <ProductDetail item="brocolli" producer="Jane Kim" location="Victoria BC" price="2.00"/>
                <ProductDetail item="carrot" producer="Megan Drake" location="Edmonton AB" price="1.30"/>
                <ProductDetail item="lettuce" producer="Leon Popper" location="Ignace ON" price="0.99"/>
                <ProductDetail item="apricot" producer="Bertha H. Squires" location="Ignace ON" price="1.76"/>
                <ProductDetail item="bellpepper" producer="Blanche Bias" location="Macewan AB" price="1.68"/>
                <ProductDetail item="peach" producer="Joyce Hoover" location="Harvest Hills, BC " price="2.99" />
            </div>
        </Wrapper>     
    );
}

const Wrapper = styled.div`
    background: linear-gradient(to bottom, rgba(212,228,239,0.5) 0%, rgba(134,174,204,0.5) 100%), 
                url(about.jpg) no-repeat fixed;
    padding: 5%;
    overflow: auto;
    height: 100vh;
    
    h1{ 
        color: white;
        font-family: 'Roboto', sans-serif;
        font-weight: 900;
        font-size: 150%; 
        
        &::after{
            border-bottom: solid 1px #FF8A20;
            bottom: 0;
            content: "";
            display: block;
            width: 15%;
        }
    }

    .wrapper{
        opacity: 1;
        transform: rotateY(0deg);
    }

    @media only screen and (max-width:1024px){
        padding-top: 10%;
    }
    
`;

export default Products