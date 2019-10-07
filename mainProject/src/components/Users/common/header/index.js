import React from 'react';
import HeaderBottom from './headerBottom';
import HeaderTop from './headerTop';
import './../../../../css/pages/header.scss';

class Header extends React.Component {

    render() {
        return (
            <header>
                <HeaderTop></HeaderTop>
                <HeaderBottom></HeaderBottom>
            </header>
        )
    };
}

export default Header;
