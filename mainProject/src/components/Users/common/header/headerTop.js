import React from 'react';
import { Link } from "react-router-dom";
import { faSearch, faSignOutAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from 'react-redux';
import { setProfile } from '../../../../redux/actions';

class HeaderTop extends React.Component {

    SetProfile = () => {
        sessionStorage.setItem("user", JSON.stringify({}));
        this.props.SetProfile({});
    }

    render() {
        return (
            <div className="header_top">
                <div className="container">
                    <nav>
                        <ul>
                            {!this.props.Profile.id ? null : <li><Link to="/profile">Tài khoản của tôi</Link ></li>}
                            <li><Link to="/">Danh sách ưa thích</Link ></li>
                            <li><Link to="/cart">Giỏ hàng</Link ></li>
                            {this.props.Profile.id ?
                                <>
                                    <li><Link to="/profile"> <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> {this.props.Profile.id}</Link ></li>
                                    <li><Link to="/" onClick={this.SetProfile}> <FontAwesomeIcon icon={faSignOutAlt}></FontAwesomeIcon> Logout</Link ></li>
                                </> :
                                <>
                                    <li><Link to="/login">Đăng nhập</Link ></li>
                                    <li><Link to="/register">Đăng kí</Link ></li>
                                </>}
                        </ul>
                    </nav>
                    <nav>
                        <ul>
                        {this.props.Profile.id ? <li><Link to="/profile">Tài khoản của tôi</Link ></li> : <><li><Link to="/login">Đăng nhập</Link ></li>
                            <li><Link to="/register">Đăng kí</Link ></li></>}
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

const mapStateToProps = state => {
    return {
        Profile: state.profile
    }
}

const mapDispatchToProps = dispatch => {
    return {
        SetProfile: (data) => dispatch(setProfile(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (HeaderTop);
