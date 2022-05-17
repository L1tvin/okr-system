import React, {Component} from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="#" className="navbar-brand"> </a>OKR Management App</div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;