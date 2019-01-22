import './Header.css';
import React, { Component } from 'react';
import HeaderItem from './components/HeaderItem';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='main_header'>
                <HeaderItem label='GitLab Stats' link='/' />
            </div>
        );
    }
}

export default Header;
