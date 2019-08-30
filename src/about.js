import React from 'react';
import styled from "styled-components";

function About() {
    return(
        <Wrapper>
            <h1>About</h1>
            <div style={{backgroundColor:'rgba(244, 244, 244, 0.9)', padding:'10%', borderRadius:'5px'}}>
                <img src="./farmer.png" height="150px" alt="portrailt"/>
                <span style={{
                    fontSize:'150px', 
                    lineHeight:'0.6em', 
                    opacity:'0.2', 
                    userSelect:'none', 
                    float: 'right'
                }}>
                    &#10077;
                </span>
                <h3>We Are:</h3>
                <p>
                    A family-owened local retailer who delivers the fresh, house-made, delicious veggetables and fruits
                    through our trusted local farmers. The foods we offer daily garantees the 100 % of satisfaction and you sure will love coocking with them once you get the taste. 
                    The business was passed down through the familiy of Mitsuishi for three generations, and with the srtong connection we have built with local producers,
                    we will assure your perfect meals with highly nutircious options. 
                </p>
                <h3>Company Overview</h3>
                <ul>
                    <li>Established in 2019.02.08</li>
                    <li>Current Number of Staff: 2</li>
                    <li>Products Category: veggies, fruits, flowers, etc.</li>
                </ul>
                <h3>Strategies</h3>
                <p>
                    Sampleon (20a) refrains from using pesticides and chemical fertilizers as much as possible, manages cultivation using wood vinegar and charcoal, packs up the morning harvest by 3 pm, and delivers it to consumers by courier. Paddy rice is currently under trial cultivation with the aim of producing pesticide-free rice using paper mulch. In addition, an unmanned direct sales office is set up along the town road, selling mainly sampled-on and flowering plants, and providing local agricultural products to local consumers.
                </p>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    background: linear-gradient(to bottom, rgba(212,228,239,0.5) 0%, rgba(134,174,204,0.5) 100%),
                url(about.jpg) no-repeat fixed;
    height: 100vh;
    padding: 10%;
    font-family: 'Roboto', sans-serif;
    font-size: 120%;
    overflow: auto;

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

    h3{
        font-weight: 900;
    }
`;

export default About