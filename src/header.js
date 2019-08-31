import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export default class Header extends Component {
    render(){
        return(
            <Wrapper>
                <img src="./logo.png" height="45px" alt="logo"/>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="about">About</Link></li>
                    <li><Link to="products">Products</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    height: 45px;
    display: flex;
    align-items: center;
    background-color: rgba(0, 187, 255, 0.1);
    -moz-box-shadow: 0 4px 4px rgba(0, 0, 0, 0.05);
    -webkit-box-shadow: 0 4px 4px rgba(0, 0, 0, 0.05);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.05);
    font-family: 'Roboto', sans-serif;
    justify-content: flex-end;
    position: fixed;
    width: 100%;
    z-index:5;
    
    ul{
        margin:0;
        padding:0;
    }
    
    img{
        margin-right: auto; 
        margin-left: 20px;
    }

    li{
        display: inline-block;
        margin-right:20px;
        
        @media only screen and (max-width:480px){
            margin-right: 5px;
        }          

        @media only screen and (max-width:320px){
            margin-right: 3px;
        } 
        
        a{
            text-decoration: none;
            font-size: 20px;
            color: #f7f7f7;
            transition: color .2s;
            font-weight: 900;
            
            @media only screen and (max-width:480px){
                font-size: 15px;
            }
            @media only screen and (max-width:320px){
                font-size: 13px;
            } 
            
            &::after {
                border-bottom: solid 1px #FF8A20;
                bottom: 0;
                content: "";
                display: block;
                transition: all .3s ease;
                width: 0;           
            }
    
            &:hover::after {
                width: 100%;
            }

            &:hover{
                color: #ffae65;
            }
            
        }
        
    }
`;