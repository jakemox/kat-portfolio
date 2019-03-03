import React from 'react';
import CarouselDisplay from './carousel/carousel.jsx';

export default class PItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            carouselShowing: false
        };
    };

    action = () => {
        if (this.state.carouselShowing == false) {
            this.setState({
                carouselShowing: true
            })
        } else {
            this.setState({
                carouselShowing: false
            })
        }
    };

    render() {
        return (
            <>
                <div 
                className="portfolio-item"
                style={{
                    height: this.props.height + '%',
                    backgroundColor: this.props.image
                }}
                onClick={this.action}>
                    <div className="hvr-fade">
                        {this.props.image}
                    </div>
                </div>
                <CarouselDisplay
                    showing={this.state.carouselShowing}
                    image={this.props.image}
                    action={this.action}
                    slides={this.props.slides}
                />
            </>
        );
    };
}