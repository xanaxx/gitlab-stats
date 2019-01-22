import './Content.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';


class Content extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='content_main'>
                <div>
                    <Route exact path='/project/:projectId' render={({ match }) => (
                        <div>
                            {match.params.projectId}
                        </div>
                    )} />
                    <Route path='/b' render={() => (
                        <div>
                            bbb
                        </div>
                    )} />
                </div>
            </div>
        );
    }
}

export default Content;
