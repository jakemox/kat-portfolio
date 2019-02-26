import React from 'react';
import PColumn from './p-column/p-column.jsx';

export default class Portfolio extends React.Component {
    render() {
        return (
            <main>
                <PColumn
                    dimensions={[50, 50]}
                />
                <PColumn
                    dimensions={[30, 40, 30]}
                />
                <PColumn
                    dimensions={[40, 60]}
                />
            </main>
        )
    }
}