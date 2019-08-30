import React, {Component} from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import styled from "styled-components";

export class Iframe extends Component{
    render(){
        return(
            <Wrapper>
                <Map
                  google={this.props.google}
                  zoom={10}
                  style={mapStyles}
                  initialCenter={{ lat: 33.649, lng: 130.263}}

                >
                    <Marker position={{ lat: 33.649, lng: 130.263}} />
                </Map>
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    position: absolute;
    width: 30%;
    height: 30%;

    @media only screen and (max-width:1024px){
            width: 65%;
            height: 25%;

    }
`;

const mapStyles = {
  width: '100%',
  height: '100%',
};

export default GoogleApiWrapper({
    apiKey: 'PASTE YOUR API KEY HERE'
})(Iframe);