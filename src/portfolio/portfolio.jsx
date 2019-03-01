import React from 'react';
import PItem from './p-item/p-item.jsx';

const portfolioProperties = [
    {
        dimension: 50,
        image: 'red',
        slides: ['crimson', 'red', 'firebrick']
    },
    {
        dimension: 50,
        image: 'blue',
        slides: ['deepskyblue', 'dodgerblue']
    },
    {
        dimension: 30,
        image: 'purple',
        slides: ['darkorchid', 'deeppink', 'darkviolet', 'fuchsia']
    },
    {
        dimension: 40,
        image: 'green',
        slides: ['darkseagreen', 'forestgreen']
    },
    {
        dimension: 30,
        image: 'orange',
        slides: ['lightsalmon', 'orange', 'orangered']
    },
    {
        dimension: 40,
        image: 'yellow',
        slides: ['palegoldenrod', 'yellow']
    },
    {
        dimension: 60,
        image: 'grey',
        slides: ['slategray', 'lightslategray', 'grey']
    }
]

export default class Portfolio extends React.Component {
    render() {
        return (
            <main>
               {portfolioProperties.map(
                    (property, i) => 
                    <PItem 
                        key={i}
                        height={property.dimension}
                        image={property.image}
                        slides={property.slides}
                    />
                )}
            </main>
        )
    }
}