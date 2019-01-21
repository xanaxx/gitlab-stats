import './HeaderItem.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HeaderItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='header_item'>
                {this.props.label}
            </div>
        );
    }
}

HeaderItem.propTypes = {
    label: PropTypes.string.isRequired,
};

export default HeaderItem;
