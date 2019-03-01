import React from 'react';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <>
                <header className="sidebar">
                    <div className="top-image">
                        <a href="#">KS</a>
                    </div>
                    <nav>
                        <div className="" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-item" href="#">Home</a>
                                <a className="nav-item" href="#">Work</a>
                                <a className="nav-item" href="#">About</a>
                            </div>
                        </div>
                    </nav>
                    <div className="bottom-image"></div>
                </header>
            </>
        );
    }
}