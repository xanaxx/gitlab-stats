import 'antd/dist/antd.css';
import './App.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { getProjects } from '../../api/gitlab';

import Header from '../Header/Header';
import Content from '../Content/Content';
import Menu from '../Menu/Menu';
import IssueList from '../Content/components/IssueList/IssueList';

class App extends Component {
    constructor(props) {
        super(props);
        // TODO: Make some use of title changing.
        document.title = 'GitLab issues stats';
        this.state = {
            projects: [],
            selectedProject: -1,
        };
        this.fetchProjects = this.fetchProjects.bind(this);
        this.selectProject = this.selectProject.bind(this);
    }

    componentDidMount() {
        this.fetchProjects();
    }

    selectProject(projectId) {
        this.setState({ selectedProject: projectId });
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
                <Content>
                    <Route exact path='/project/:projectId' render={({ match }) => (
                        <IssueList projectId={match.params.projectId} />
                    )} />
                    <Route exact path='/' render={() => (
                        <div className='content_empty'>
                            WITAJ!
                        </div>
                    )}>
                    </Route>
                </Content>
            </div>
        );
    }
}

export default App;
