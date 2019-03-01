import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';

export default class CarouselDisplay extends React.Component {
    render() {
        if (this.props.showing == true) {
            console.log(this.props.image + ' showing')
            return (
                <div className="carousel-test" style={{backgroundColor: this.props.image}}>
                <div className="close-carousel" onClick={this.props.action}>X</div>
                    <Carousel>
                        {this.props.slides.map(slide =>
                            {
                                return (
                                    <Carousel.Item>
                                        <div className="item-car" style={{backgroundColor: slide}}></div>
                                    </Carousel.Item>
                                )
                            }
                        )}
                    </Carousel>
                </div>
            )
        } else {
            return null;
        }
    }
}