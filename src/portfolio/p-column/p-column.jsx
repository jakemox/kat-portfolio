import React from 'react';
import PItem from './p-item/p-item.jsx';

export default class PColumn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    };
    
    render() {
        return (
            <div className="column">
               {this.props.dimensions.map(
                    (dimension, i) => 
                    <PItem 
                        key={i}
                        height={dimension}
                    />
                )}
            </div>
        )
    };
}