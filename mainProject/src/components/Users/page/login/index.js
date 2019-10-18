import React from 'react';
import Breadcrumb from '../../common/breadcrumb';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import './../../../../css/pages/login.scss';
import { setProfile } from '../../../../redux/actions';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pw: "",
            username:"",
            usernameValid: "*",
            pwValid: "*",
            status: "",
            redirect: false
        }
    }

    checkLength = (o, n, min, max) => {
        if (o.length > max || o.length < min) {
            switch (n) {
                case "usernameValid": this.setState({
                    usernameValid: " phải từ 6-16 kí tự"
                })
                    break;
                case "pwValid": this.setState({
                    pwValid: " phải từ 6-16 kí tự"
                })
                    break;
                default:
                    break;
            }

            return false;
        } else {
            switch (n) {
                case "usernameValid": this.setState({
                    usernameValid: "*"
                })
                    break;
                case "pwValid": this.setState({
                    pwValid: "*"
                })
                    break;
                default:
                    break;
            }
            return true;
        }
    }
    getUser = (e) => {
        var valid = true;
        e.preventDefault();
        this.checkLength(this.state.pw, "pwValid", 6, 16);
        this.checkLength(this.state.username, "usernameValid", 6, 16);
        valid = valid && this.checkLength(this.state.username, "usernameValid", 6, 25) && this.checkLength(this.state.pw, "pwValid", 6, 16);
        if (valid) {
            axios.get(`http://localhost:3000/users/${this.state.username}`)
                .then((res) => {
                    if (res.data.pw === this.state.pw) {
                        this.props.Profile({id: res.data.id, role: res.data.role, name: res.data.name, phone: res.data.phone, address: res.data.address})
                        this.setState({
                            status: "Đăng nhập thành công",
                            redirect: true
                        })
                        sessionStorage.setItem("user", JSON.stringify({id: res.data.id, role: res.data.role, name: res.data.name, phone: res.data.phone, address: res.data.address}))
                    }
                    else this.setState({
                        status: "Tên đăng nhập hoặc mật khẩu không chính xác"
                    })
                })
                .catch(() => this.setState({
                    status: "Tên đăng nhập hoặc mật khẩu không chính xác"
                }))
        }
    }

    getInputUser = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    getInputPw = (e) => {
        this.setState({
            pw: e.target.value
        })
    }

    render() {
        let infoBreadcrumb = {name: "ĐĂNG NHẬP", path: "/login"}
        if(!this.state.redirect)
        return (
            <div className="container">
                <Breadcrumb InfoBreadcrumb={infoBreadcrumb}></Breadcrumb>
                <div className="login">
                    <div className="login__heading">
                        <h2 className="title__arrow">ĐĂNG NHẬP</h2>
                        <Link to="/register" className="btn btn__cart" type="button">ĐĂNG KÝ</Link>
                    </div>
                    <div className="login__content">
                        <h4 className="login__title">KHÁCH HÀNG ĐĂNG NHẬP</h4>
                        <p className="login__desc">Nếu bạn có một tài khoản, xin vui lòng đăng nhập</p>
                        <p ><span>{this.state.status}</span> </p>
                        <br></br>
                        <form>
                            <div>
                                <label htmlFor="inputEmail">Tên đăng nhập <span> {this.state.usernameValid}</span> </label>
                                <input onChange={this.getInputUser} type="text" placeholder="Vui lòng nhập tên đăng nhập của bạn" id="inputEmail" />
                            </div>
                            <div>
                                <label htmlFor="inputPass">Mật khẩu <span>{this.state.pwValid}</span> </label>
                                <input onChange={this.getInputPw} type="password" placeholder="Vui lòng nhập mật khẩu của bạn" id="inputPass" />
                            </div>
                            <div>
                                <input type="checkbox" id="inputCheck" />
                                <label htmlFor="inputCheck">Quên mật khẩu</label>
                            </div>
                            <div>
                                <button className="btn btn__cart" type="button" onClick={this.getUser}>ĐĂNG NHẬP</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
        else return <Redirect to="/cart"/>
    };
}

const mapDispatchToProps = dispatch => {
    return {
        Profile: (data) => dispatch(setProfile(data))
    }
}

export default connect(null, mapDispatchToProps) (Login);
