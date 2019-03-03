import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';

export default class CarouselDisplay extends React.Component {
    dontClose(e) {
        e.stopPropagation();;
    }
    
    render() {
        if (this.props.showing == true) {
            console.log(this.props.image + ' showing')
            return (
                <div className="carousel-test" onClick={this.props.action}>
                <div className="close-carousel" onClick={this.props.action}>X</div>
                    <Carousel interval={null} onClick={this.dontClose}>
                        {this.props.slides.map(
                            (slide, i) => {
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