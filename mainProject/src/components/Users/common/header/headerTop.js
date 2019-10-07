import React from 'react';
import { Link } from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class HeaderTop extends React.Component {

    render() {
        return (
            <div className="header_top">
                <div className="container">
                    <nav>
                        <ul>
                            <li><Link to="/profile">Tài khoản của tôi</Link ></li>
                            <li><Link to="/order">Trạng thái đơn hàng</Link ></li>
                            <li><Link to="/">Danh sách ưa thích</Link ></li>
                            <li><Link to="/cart">Giỏ hàng</Link ></li>
                            <li><Link to="/login">Đăng nhập</Link ></li>
                            <li><Link to="/register">Đăng kí</Link ></li>
                        </ul>
                    </nav>
                    <nav>
                        <ul>
                            <li><Link to="/">Đăng nhập</Link ></li>
                            <li><Link to="/">Đăng kí</Link ></li>
                        </ul>
                    </nav>
                    <div className="header_top__search">
                        <input className="header_top__input" type="text" placeholder="Tìm kiếm ở đây ..." />
                        <button className="header_top__button btn" type="button">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </div>
            </div>
        )
    };
}

export default HeaderTop;
