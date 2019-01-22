import './HeaderItem.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import history from '../../../services/history';

class HeaderItem extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        history.push(this.props.link);
    }

    render() {
        return (
            <div className='header_item' onClick={this.onClick}>
                {this.props.label}
            </div>
        );
    }
}

HeaderItem.propTypes = {
    label: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default HeaderItem;
