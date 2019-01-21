import './App.css';

import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        // TODO: Make some use of title changing.
        document.title = 'GitLab issues stats';
    } 

    render() {
        return (
            <div className='app_main'>
                Hello world!
            </div>
        );
    }
}

export default App;
