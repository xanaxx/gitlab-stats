import './App.css';

import React, { Component } from 'react';
import { getProjects } from '../../api/gitlab';

import Header from '../Header/Header';

class App extends Component {
    constructor(props) {
        super(props);
        // TODO: Make some use of title changing.
        document.title = 'GitLab issues stats';
        this.state = {
            projects: [],
        };
        this.fetchProjects = this.fetchProjects.bind(this);
    }

    componentDidMount() {

    }

    fetchProjects() {
        getProjects().then(res => {
            this.setState({ projects: res });
        });
    }

    render() {
        return (
            <div className='app_main'>
                <Header />
            </div>
        );
    }
}

export default App;
