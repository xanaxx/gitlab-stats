import './Menu.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';
import history from '../../services/history';

const Option = Select.Option;

class Menu extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(value) {
        history.push(`/project/${value}`);
    }

    render() {
        return (
            <div className='menu_main'>
                <div className='menu_main_label'>Project</div>
                <Select style={{ width: 200 }} onChange={this.onChange}>
                    {this.props.projects.map((item) => <Option key={item.id} value={item.id}>{item.name}</Option>)}
                </Select>
            </div>
        );
    }
}

Menu.propTypes = {
    projects: PropTypes.array.isRequired,
};

export default Menu;
