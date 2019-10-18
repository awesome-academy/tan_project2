import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faHistory } from '@fortawesome/free-solid-svg-icons';
import { setProfile } from '../../../../redux/actions';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneValid: "",
            pwValid: "",
            pw2Valid: "",
            pw3Valid: "",
            samePwValid: "",
            nameValid: "",
            addrValid: "",
            toggle: false,
            toggleOrder: false,
            order: ""
        }
        this.nameRef = React.createRef();
        this.addrRef = React.createRef();
        this.phoneRef = React.createRef();
        this.pwRef = React.createRef();
        this.pw2Ref = React.createRef();
        this.pw3Ref = React.createRef();
    }

    componentDidMount() {
        axios.get(`http://localhost:3000/orders?idUser=${this.props.Profile.id}`)
        .then((res) => {
            if(res.data.length) {
                let data;
                res.data.forEach((item, index) => data+= `${index +1} : Thời gian: ${item.day} - Tổng tiền: ${item.total} VND`  )
                console.log(data);
                this.setState({
                    order: data
                })
            }
            else{
                this.setState({
                    order: "Lịch sử trống"
                })
            }
        })
        .catch(() => {
            this.setState({
                order: "Lịch sử trống"
            })
        })
    }

    changeToggle = () => {
        this.setState({
            toggle : !this.state.toggle
        })
    }

    changeToggleOrder = () => {
        this.setState({
            toggleOrder: !this.state.toggleOrder
        })
    }
    

    checkLength = (o, n, min, max) => {
        if (o.length > max || o.length < min) {
            switch (n) {
                case "phoneValid": this.setState({
                    phoneValid: "Số điện thoại gồm 10 kí tự"
                })
                    break;
                case "pwValid": this.setState({
                    pwValid: "Mật khẩu phải từ 6-16 kí tự"
                })
                    break;
                case "nameValid": this.setState({
                    nameValid: "Xin nhập họ tên"
                })
                    break;
                case "addrValid": this.setState({
                    addrValid: "Xin nhập địa chỉ"
                })
                    break;
                case "pw2Valid": this.setState({
                    pw2Valid: "Xin nhập mật khẩu mới"
                })
                    break;
                default:
                    break;
            }

            return false;
        } else {
            switch (n) {
                case "phoneValid": this.setState({
                    phoneValid: ""
                })
                    break;
                case "pwValid": this.setState({
                    pwValid: ""
                })
                    break;
                case "nameValid": this.setState({
                    nameValid: ""
                })
                    break;
                case "addrValid": this.setState({
                    addrValid: ""
                })
                    break;
                case "pw2Valid": this.setState({
                    pw2Valid: ""
                })
                    break;
                default:
                    break;
            }
            return true;
        }
    }
    checkOldPw = (pw) => {
        axios.get(`http://localhost:3000/users/${this.state.username}`)
            .then((res) => {
                if (res.data.pw === pw) {
                    this.setState({
                        pwValid: ""
                    })
                    return true;
                }
                else {
                    this.setState({
                        pwValid: "Mật khẩu không đúng, xin nhập lại"
                    })
                    return false
                }
            })
            .catch(() => {
                this.setState({
                    pwValid: "Mật khẩu không đúng, xin nhập lại"
                })
                return false
            })
    }
    checkPw = (pw, pw2) => {
        if (pw !== pw2) {
            this.setState({
                pw3Valid: "Mật khẩu không khớp, xin nhập lại"
            })
            return false;
        }
        else {
            this.setState({
                pw3Valid: ""
            })
            return true;
        }
    }
    onUpdate = () => {
        let valid = true;
        let name = this.nameRef.current.value;
        let phone = this.phoneRef.current.value;
        let addr = this.addrRef.current.value;
        let pw, pw2, pw3;

        this.checkLength(name, "nameValid", 1, 1000);
        this.checkLength(phone, "phoneValid", 10, 10);
        this.checkLength(addr, "addrValid", 10, 100);
        valid = valid && this.checkLength(name, "nameValid", 1, 1000) && this.checkLength(phone, "phoneValid", 10, 11) && this.checkLength(addr, "addrValid", 1, 100)
        if (this.state.toggle) {
            pw = this.pwRef.current.value;
            pw2 = this.pw2Ref.current.value;
            pw3 = this.pw3Ref.current.value;
            this.checkLength(pw2, "pw2Valid", 6, 16);
            this.checkOldPw(pw);
            this.checkPw(pw2, pw3);
            valid = valid && this.checkOldPw(pw)
                && this.checkPw(pw2, pw3)
                && this.checkLength(pw2, "pw2Valid", 6, 16);
        }

        if (valid) {
            if (this.state.toggle) {
                axios.patch('http://localhost:3000/users/' + this.props.Profile.id,
                    {
                        name: name, phone: phone,
                        address: addr, pw: pw2
                    }
                )
                    .then((res) => {
                        this.props.AcProfile({ id: res.data.id, name: res.data.name, phone: res.data.phone, address: res.data.address });
                        alert("Thay đổi thông tin thành công !")
                    })
            }
            else {
                axios.patch('http://localhost:3000/users/' + this.props.Profile.id,
                    {
                        name: name, phone: phone,
                        address: addr
                    }
                )
                    .then((res) => {
                        this.props.AcProfile({ id: res.data.id, name: res.data.name, phone: res.data.phone, address: res.data.address });
                        alert("Thay đổi thông tin thành công !")
                    })
            }

        }
    }
    render() {


        return (
            <div className="Profile">
                <div className="title">
                    <div>
                        <p>THÔNG TIN CỦA TÔI</p>
                    </div>
                </div>
                <div className="name">
                    <div>Tên</div>
                    <div>
                        <input onChange={this.getInputName} type="text" defaultValue={this.props.Profile.name} ref={this.nameRef}></input>
                    </div>
                    <span>{this.state.nameValid}</span>
                </div>
                <div className="addr">
                    <div>Địa chỉ</div>
                    <div>
                        <input onChange={this.getInputAddr} type="text" defaultValue={this.props.Profile.address} ref={this.addrRef}></input>
                    </div>
                    <span>{this.state.addrValid}</span>

                </div>
                <div className="phone">
                    <div>Số điện thoại</div>
                    <div>
                        <input onChange={this.getInputPhone} type="text" defaultValue={this.props.Profile.phone} ref={this.phoneRef}></input>
                    </div>
                    <span>{this.state.phoneValid}</span>
                </div>

                <div className="pw">
                    <div>
                        <button type="button" className="btn" onClick={this.changeToggleOrder}>
                            <FontAwesomeIcon icon={faHistory}></FontAwesomeIcon>
                            Lịch sử order
                        </button>
                    </div>
                    {this.state.toggleOrder ? <div>{this.state.order}</div> : null}
                    
                </div>

                <div className="pw">
                    <div>
                        <button className="btn changepw" onClick={this.changeToggle}>
                            <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
                            Đổi mật khẩu
                        </button>
                    </div>
                </div>
                {this.state.toggle
                    ? <>
                        <div className="pw">
                            <div>Mật khẩu cũ</div>
                            <div>
                                <input onChange={this.getInputPw} type="password" ref={this.pwRef} ></input>
                            </div>
                            <span>{this.state.pwValid}</span>

                        </div>
                        <div className="pw">
                            <div>Mật khẩu mới</div>
                            <div>
                                <input onChange={this.getInputPw2} type="password" ref={this.pw2Ref} ></input>
                            </div>
                            <span>{this.state.pw2Valid}</span>
                        </div>
                        <div className="pw">
                            <div>Nhập lại mật khẩu</div>
                            <div>
                                <input onChange={this.getInputPw3} type="password" ref={this.pw3Ref} ></input>
                            </div>
                            <span>{this.state.pw3Valid}</span>

                        </div>
                    </>
                    : <></>
                }
                <div className="pw">
                    <div></div>
                    <div>
                        <button onClick={this.onUpdate} >Cập nhật</button>
                    </div>
                </div>
            </div>

        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        AcProfile: (data) => dispatch(setProfile(data))
    }
}

const mapStateToProps = state => {
    return {
        Profile: state.profile
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);