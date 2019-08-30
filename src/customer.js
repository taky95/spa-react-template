import React, { Component } from 'react';

const style = {
    backgroundColor:'rgba(120, 153, 116)',
    padding: '20px',
    textAlign: 'center',
    color: '#363636',
    height: '450px',
}

export default class Customer extends Component{
    render(){
        return(
            <div style={style}>
                <img 
                    src={'./customers/customer' + this.props.customer + '.jpg'}  
                    alt="customers" 
                    style={{borderRadius:'100%', width:'20%'}}
                />
                <p>{this.props.name}</p>
                <p>&#10077;{this.props.comment}&#10078;</p>
            </div>
        );
    }
}