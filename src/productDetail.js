import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

export default class ProductDetail extends Component{
    constructor(props){
        super(props);
        this.state = {isToggleOn: false};
        
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(){
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }
    
    render(){
        return(
            <Wrapper>
                <img 
                    src={'./veggies/' + this.props.item + '.jpg'} 
                    height="100px" 
                    alt={this.props.item} 
                    style={{borderRadius:'100%'}}
                    onClick={this.handleClick}
                />
                <CSSTransition 
                    in={this.state.isToggleOn}
                    classNames ="detail"
                    timeout={200}
                >
                    <div className="wrapper">
                        <p>Item Name: {this.props.item}</p>
                        <p>Product location: {this.props.location}</p>
                        <p>Producer: {this.props.producer}</p>
                        <p>Price: $ {this.props.price} average/ea</p>
                    </div>
                </CSSTransition>
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    border-radius : 5px;
    padding: 5px;
    text-align: center;
    color: #363636;
    flex-shrink: 1;
    
    img{
        transition: border .1s ease-in;

        &:hover{
            box-sizing: border-box;
            border: solid 5px #FF8A20;
        }
    }
    
    .wrapper{
        opacity: 0;
        transition: opacity 0.6s, transform 0.6s;
        transform-style: preserve-3d;
        background-color: rgba(237, 237, 237, 0.8);
        border-radius : 5px;
        margin: 5px;
        padding: 20px;
        text-align: left;
    }

    .detail-enter-active {
        opacity: 0.01;
    }

    .detail-enter-done{
        opacity: 1;
        transform: rotateY(360deg);
    }

    detail-exit-active {
       opacity: 0.01;
    }

    .detail-exit-done {
        opacity: 0;
        transform: rotateY(180deg);
    }
`;

