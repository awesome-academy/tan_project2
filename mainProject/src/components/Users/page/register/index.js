import React from 'react';
import Breadcrumb from '../../common/breadcrumb';
import { Link, Redirect  } from 'react-router-dom';
import axios from 'axios';
import './../../../../css/pages/register.scss'

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            pw: "",
            pw2: "",
            name: "",
            email: "",
            checkLogIn: false,
            usernameValid: "*",
            emailValid: "*",
            pwValid: "*",
            pw2Valid: "*",
            redirect: false
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
    getInputPw2 = (e) => {
        this.setState({
            pw2: e.target.value
        })
    }
    getInputMail = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    goBack = () => {
        this.setState({
            redirect: true
        })
    }
    checkLength = (o, n, min, max) => {
        if (o.length > max || o.length < min) {
            switch (n) {
                case "usernameValid": this.setState({
                    usernameValid: "Tên đăng nhập phải từ 6-16 kí tự"
                })
                    break;
                case "pwValid": this.setState({
                    pwValid: "Mật khẩu phải từ 6-16 kí tự"
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
                case "nameValid": this.setState({
                    nameValid: "*"
                })
                    break;
                default:
                    break;
            }
            return true;
        }
    }
    checkMail = (regexp) => {
        if (!(regexp.test(this.state.email))) {
            this.setState({
                emailValid: "Xin nhập email"
            })
            return false;
        } else {
            this.setState({
                emailValid: "*"
            })
            return true;
        }
    }
    checkPw = (pw, pw2) => {
        if (pw !== pw2) {
            this.setState({
                pw2Valid: "Mật khẩu không khớp, xin nhập lại"
            })
            return false;
        }
        else {
            this.setState({
                pw2Valid: "*"
            })
            return true;
        }
    }
    addUser = () => {
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        let valid = true;
        this.checkLength(this.state.pw, "pwValid", 6, 16);
        this.checkLength(this.state.username, "usernameValid", 6, 16);
        this.checkMail(emailRegex);
        this.checkPw(this.state.pw, this.state.pw2)
        valid = valid && this.checkLength(this.state.pw, "pwValid", 6, 16)
            && this.checkLength(this.state.username, "usernameValid", 6, 16)
            && this.checkMail(emailRegex) && this.checkPw(this.state.pw, this.state.pw2)

        if (valid) {
            axios.post('http://localhost:3000/users',
                {
                    name: this.state.name, id: this.state.username, email: this.state.email,
                    username: this.state.username, pw: this.state.pw, phone: "", address: "", role: 2
                }
            )
            .then(() => {
                alert("Đăng kí thành công !");
                this.setState({
                    redirect: true
                })
            });            
        }
    }

    render() {
        let infoBreadcrumb = {name: "ĐĂNG KÝ", path: "/register"}
        if(!this.state.redirect)
        return (
            <div className="container">
                <Breadcrumb InfoBreadcrumb={infoBreadcrumb}></Breadcrumb>
                <div className="regis">
                    <div className="regis__heading">
                        <h2 className="title__arrow">ĐĂNG KÝ</h2>
                        <Link to="/login" className="btn btn__cart" >ĐĂNG NHẬP </Link>
                    </div>
                    <div className="regis__content">
                        <h4 className="regis__title">THÔNG TIN CÁ NHÂN</h4>
                        <form className="form_top">
                            <div>
                                <label htmlFor="inputName"> Họ và Tên </label>
                                <input type="text" id="inputName" onChange={this.getInputName} placeholder="Vui lòng nhập họ và tên" />
                            </div>
                            <div>
                                <label htmlFor="inputEmail">Email <span>{this.state.emailValid}</span> </label>
                                <input type="email" id="inputEmail" onChange={this.getInputMail} placeholder="Vui lòng nhập Email"/>
                            </div>
                        </form>
                        <h4 className="regis__title">THÔNG TIN ĐĂNG NHẬP</h4>
                        <form className="form_bottom">
                            <div>
                                <label htmlFor="inputUser"> Tên đăng nhập <span> {this.state.usernameValid}</span> </label>
                                <input type="text" id="inputUser" onChange={this.getInputUser} placeholder="Vui lòng nhập tên đăng nhập" />
                            </div>
                            <div>
                                <label htmlFor="inputPass1">Mật khẩu <span>{this.state.pwValid}</span></label>
                                <input type="password" id="inputPass1" onChange={this.getInputPw} placeholder="Vui lòng nhập mật khẩu" />
                            </div>
                            <div>
                                <label htmlFor="inputPass2">Xác nhận mật khẩu <span>{this.state.pw2Valid} </span> </label>
                                <input type="password" id="inputPass2" onChange={this.getInputPw2} placeholder="Vui lòng nhập lại mật khẩu"/>
                            </div>
                            <div>
                                <button className="btn btn__cart" type="button" onClick={this.addUser}> ĐĂNG KÝ </button>
                                <Link to="/" className="btn btn__cart" >QUAY LẠI </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )

        else return <Redirect to="/login"/>
    }
}

export default Register;
