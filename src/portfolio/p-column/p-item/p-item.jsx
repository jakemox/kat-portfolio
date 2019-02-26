import React from 'react';

export default class PItem extends React.Component {
    render() {
        return (
            <div className="portfolio-item" style={{height: this.props.height + '%'}}></div>
        )
    }
}