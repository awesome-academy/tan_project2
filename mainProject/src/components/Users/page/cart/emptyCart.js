import React, { Component } from "react";
import emptyCart from './emptyCart.png';
import { Link } from 'react-router-dom';
import './emptyCart.css';

class EmptyCart extends Component {

    render() {
        return (
            <div className="emptyCart">
                <div className="emptyCart_img">
                    <img src={emptyCart} alt="sdsf" />
                </div>
                <h1 className="emptyCart_title">Không có sản phẩm nào trong giỏ hàng của bạn.</h1>
                <Link to="/products" className="emptyCart_btn"> Tiếp tục mua sắm</Link>
            </div>
        )
    }
}
export default EmptyCart;
