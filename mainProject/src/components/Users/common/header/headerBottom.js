import React from 'react';
import { Link } from 'react-router-dom';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class HeaderBottom extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            toggle: false
        }
        this.toggleMenu = this.toggleMenu.bind(this);
    }
    toggleMenu() {
        function hidemenu() {
            this.setState({
                toggle: !this.state.toggle
            })
        }
        //window.addEventListener('click', function(e){console.log(e.target)})
        document.querySelector('a.header_bottom__toggle').addEventListener('click', hidemenu.bind(this));
    }

    componentDidMount() {
        this.toggleMenu();
    }

    render() {
        const classNameMenu = this.state.toggle ? "" : "hide";
        return (
            <div className="header_bottom">
                <div className="container">
                    <Link to="/" className="header_bottom__logo">
                        <img src="./images/logoooo.png" alt="logo" />
                    </Link >
                    <Link to="/" className="header_bottom__toggle" >
                        <FontAwesomeIcon icon={faBars}/>
                    </Link >
                    <nav className={classNameMenu}>
                        <ul>
                            <li><Link to="/">Trang chủ</Link ></li>
                            <li className="dropdown"><Link to="/products">Rượu</Link >
                                <div className="dropdown__content">
                                    <div className="dropdown__header"></div>
                                    <div className="dropdown__row">
                                        <div className="dropdown__column">
                                            <h3> RƯỢU NGOẠI</h3>
                                            <Link to="/">Rượu Chivas</Link >
                                            <Link to="/">Hàng độc - Rượu độc đáo</Link >
                                            <Link to="/">Johnnie Walker</Link >
                                            <Link to="/">Rượu Whisky</Link >
                                            <Link to="/">Rượu Remy Martin</Link >
                                            <Link to="/">Rượu Glenmorangie</Link >
                                            <Link to="/">Rượu Vodka</Link >
                                        </div>
                                        <div className="dropdown__column">
                                            <h3> RƯỢU NGOẠI</h3>
                                            <Link to="/">Rượu Chivas</Link >
                                            <Link to="/">Hàng độc - Rượu độc đáo</Link >
                                            <Link to="/">Johnnie Walker</Link >
                                            <Link to="/">Rượu Whisky</Link >
                                            <Link to="/">Rượu Remy Martin</Link >
                                            <Link to="/">Rượu Glenmorangie</Link >
                                            <Link to="/">Rượu Vodka</Link >
                                        </div>
                                        <div className="dropdown__column">
                                            <h3> RƯỢU NGOẠI</h3>
                                            <Link to="/">Rượu Chivas</Link >
                                            <Link to="/">Hàng độc - Rượu độc đáo</Link >
                                            <Link to="/">Johnnie Walker</Link >
                                            <Link to="/">Rượu Whisky</Link >
                                            <Link to="/">Rượu Remy Martin</Link >
                                            <Link to="/">Rượu Glenmorangie</Link >
                                            <Link to="/">Rượu Vodka</Link >
                                        </div>
                                        <div className="dropdown__column"><img src="./images/Layer 1311X.png" alt="imggggg" /></div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <Link to="/products">Rượu trắng</Link >
                            </li>
                            <li>
                                <Link to="/products">Champagne</Link >
                            </li>
                            <li>
                                <Link to="/intro">Thông tin</Link >
                            </li>
                            <li>
                                <Link to="/blog">Blog</Link >
                            </li>
                            <li>
                                <Link to="/contact">Liên hệ</Link >
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    };
}

export default HeaderBottom;
