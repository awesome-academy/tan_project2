import React from 'react';
import './checkout.css';
import Address from './address';
import Payment from './payment';
import Confirm from './confirm';
import { connect } from 'react-redux';

class Checkout extends React.Component {
    render() {
        let view;
        switch(this.props.CheckoutStep){
            case 1:
                view = <Address></Address>
                break;
            case 2:
                view = <Payment></Payment>
                break;
            case 3:
                view = <Confirm></Confirm>
                break;
            default:
                view = <Address></Address>
        }
        return (
            <div className="container">
                <ul className="progressbar">
                    <li className={this.props.CheckoutStep >= 1 ? "active" : ""}> Địa chỉ </li>
                    <li className={this.props.CheckoutStep >= 2 ? "active" : ""}> Phương thức thanh toán </li>
                    <li className={this.props.CheckoutStep >= 3 ? "active" : ""}> Xác nhận </li>
                </ul>
                <div className="CheckOut">
                    {view}
                </div>
            </div>
        )
    };
}

const mapStateToProps = state => {
    return {
        CheckoutStep: state.checkoutStep
    }
}

export default connect(mapStateToProps, null) (Checkout);

