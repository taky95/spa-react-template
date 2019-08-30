import React from 'react';
import styled from "styled-components";
import Iframe from './googleMap';

function Contact() {
    return(
        <Wrapper>
            <h1>Contact</h1>
            <Map>
                <p>You can call us in, or come in to the store and see for yourself our freash and delicious food.</p>
                <h3>Reach Us At</h3>
                <p>1256 Center St, Hixon OB <br/> +1(877)123-1234</p>
                <h3>Open Hours</h3>
                    <p>
                        Mon-Fri:9:00AM - 6:00PM<br/>
                        *Closed for weekends and holidays.
                    </p>
                <Iframe/>
            </Map>
        </Wrapper>
    );
}

const Map = styled.div`
    background-color: rgba(244, 244, 244, 0.9); 
    padding: 10%;
    border-radius: 5px;
    padding-bottom: 40%;

    @media only screen and (max-width:1024px){
        padding-bottom: 70%;
    }
    
`;

const Wrapper = styled.div`
    background: linear-gradient(to bottom, rgba(212,228,239,0.5) 0%, rgba(134,174,204,0.5) 100%),
                url(about.jpg) no-repeat fixed;
    padding: 10%;
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
`;

export default Contact