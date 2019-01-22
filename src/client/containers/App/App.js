import 'antd/dist/antd.css';
import './App.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { getProjects } from '../../api/gitlab';

import Header from '../Header/Header';
import Content from '../Content/Content';
import Menu from '../Menu/Menu';

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
        this.fetchProjects();
    }

    fetchProjects() {
        getProjects().then(data => {
            this.setState({ projects: data });
        });
    }

    render() {
        return (
            <div className='app_main'>
                <Header />
                <Menu projects={this.state.projects} />
                <Content />
            </div>
        );
    }
}

export default App;
