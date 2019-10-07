import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import './../../../../css/pages/footer.scss';

class Footer extends React.Component {

    render() {
        return (
            <footer>
                <div className="footer_top">
                    <div className="container">
                        <div className="footer_top__item">
                            <img src="./images/Layer 511X.png" alt="img511" />
                        </div>
                    </div>
                </div>
                <div className="footer_content container">
                    <div className="footer_content__item">
                        <p className="footer_content__title">THÔNG TIN</p>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/" >VỀ CHÚNG TÔI</Link>
                                    </li>
                                <li>
                                    <Link to="/" >GIAO HÀNG</Link>
                                    </li>
                                <li>
                                    <Link to="/" >CẢM NGHĨ</Link>
                                </li>
                                <li>
                                    <Link to="/" >LƯU TRỮ</Link>
                                </li>
                                <li>
                                    <Link to="/" >CHÍNH SÁCH RIÊNG TƯ</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="footer_content__item">
                        <p className="footer_content__title">MUA HÀNG</p>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/" >VẬN CHUYỂN VÀ TRA HÀNG</Link>
                                    </li>
                                <li>
                                    <Link to="/" >MUA HÀNG AN TOÀN</Link>
                                    </li>
                                <li>
                                    <Link to="/" >VẬN CHUYỂN QUỐC TẾ</Link>
                                    </li>
                                <li>
                                    <Link to="/" >LIÊN KẾT</Link>
                                    </li>
                                <li>
                                    <Link to="/" >DỊCH VỤ GIẢM GIÁ</Link>
                                    </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="footer_content__item">
                        <p className="footer_content__title">GỬI MAIL</p>
                        <p className="footer_content__desc">Gửi email cho chúng tôi để được hỗ trợ</p>
                        <div className="footer_content__input">
                            <input type="email" placeholder="Enter your email" />
                            <button className="btn footer_content__btn" type="button">Gửi</button>
                        </div>
                        <div className="footer_content__icon">
                            <FontAwesomeIcon icon={['fab', 'twitter']} />
                            <FontAwesomeIcon icon={['fab', 'google-plus-g']} />
                            <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                            <FontAwesomeIcon icon={ faWifi }/>
                        </div>
                    </div>
                    <div className="footer_content__item">
                        <p className="footer_content__title">LIÊN HỆ</p>
                        <p className="footer_content__detail">
                            <i className="fas fa-map-marker-alt"> </i>
                            <span>4, Toà nhà Hannoi Group Số 442 Đội Cấn, P.Cống Vị, Q.Ba Đình, Hà Nội</span>
                        </p>
                        <p className="footer_content__detail">
                            <i className="fas fa-phone-alt" /> (04) 6674 2332 - &nbsp;
                            <i className="fas fa-phone-alt" /> (04) 3786 8904
                            <br />
                            <i className="fas fa-phone-alt" />(04) 6680 9686 &nbsp; &nbsp;
                            <i className="fas fa-envelope"> </i>
                            <i>Support@bizweb.vn</i>
                        </p>
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className="container">
                        <p className="footer_bottom__text">©  Copyright 2008-2014 DKT Technology JSC</p>
                        <div className="footer_bottom__icon">
                            <img src="./images/Layer 54.png" alt="Layer54" />
                        </div>
                    </div>
                </div>
            </footer>
        )
    };
}

export default Footer;