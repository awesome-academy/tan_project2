import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setStepCheckout, setProfile } from '../../../../redux/actions';

class Address extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneValid: "",
            nameValid: "",
            addrValid: "",
            toggle: false,
        }
        this.nameRef = React.createRef();
        this.addrRef = React.createRef();
        this.phoneRef = React.createRef();
    }

    checkLength = (o, n, min, max) => {
        if (o.length > max || o.length < min) {
            switch (n) {
                case "phoneValid": this.setState({
                    phoneValid: "Số điện thoại gồm 10 kí tự"
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
                case "nameValid": this.setState({
                    nameValid: ""
                })
                    break;
                case "addrValid": this.setState({
                    addrValid: ""
                })
                    break;
                default:
                    break;
            }
            return true;
        }
    }

    onUpdate = () => {
        let valid = true;
        let name = this.nameRef.current.value;
        let phone = this.phoneRef.current.value;
        let addr = this.addrRef.current.value;

        this.checkLength(name, "nameValid", 1, 1000);
        this.checkLength(phone, "phoneValid", 10, 10);
        this.checkLength(addr, "addrValid", 10, 100);
        valid = valid && this.checkLength(name, "nameValid", 1, 1000) && this.checkLength(phone, "phoneValid", 10, 11) && this.checkLength(addr, "addrValid", 1, 100)

        if (valid) {
            axios.patch('http://localhost:3000/users/' + this.props.Profile.id,
                {
                    name: name, phone: phone,
                    address: addr
                }
            )
                .then((res) => {
                    this.props.AcProfile({ id: res.data.id, name: res.data.name, phone: res.data.phone, address: res.data.address });
                    this.props.SetStepCheckout(2);
                })
                .catch((err) => console.log(err))
        }
    }

    render() {
        return (
            <div className="Profile">
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
                        <button onClick={this.onUpdate} >Cập nhật</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        Profile: state.profile
    }
}

const mapDispatchToProps = dispatch => {
    return {
        SetStepCheckout: (data) => dispatch(setStepCheckout(data)),
        AcProfile: (data) => dispatch(setProfile(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Address);
