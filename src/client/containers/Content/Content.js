import './Content.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Content extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='content_main'>
                {this.props.children}
            </div>
        );
    }
}

Content.propTypes = {
    children: PropTypes.node,
};

export default Content;
