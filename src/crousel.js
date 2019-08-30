import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

import Customer from './customer';

export default class DivCarousel extends Component {
    render() {
        return (
            <Carousel 
                    autoPlay={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showArrows={false} 
                    showStatus={false}
                    className="presentation-mode"
            >
                <div className="my-slide">
                    <Customer customer='1' name='Dorothy Hodgkin' 
                    comment="I love ordering foods from AgroPro. They know how to take care of foods, and these foods keeps me eating healthy."/>
                </div>
                <div className="my-slide">
                    <Customer customer='2' name='Enrico Fermi' 
                    comment="Lots of love and care. Everytime I called in, the store staffs are very kind and quick. I love asking about the details of the food I get and they're very knowlegeble about it too!"/>
                </div>
                <div className="my-slide">
                    <Customer customer='3' name='Geraldine Seydoux' 
                        comment="The service helps me on a daily basis. I have been getting veggies from them for over 10yrs and it's still great!"/>
                </div>
            </Carousel>
        );
    }
}
 