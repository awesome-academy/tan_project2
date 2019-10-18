import React from 'react';
import Breadcrumb from '../../common/breadcrumb';
import ItemCart from './itemCart';
import { connect } from 'react-redux';
import './../../../../css/pages/cart.scss';
import EmptyCart from './emptyCart';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
    render() {
        let infoBreadcrumb = { name: "Giỏ hàng", path: "/cart" };
        let cartList;
        const cart = this.props.GetCart;
        if (cart) {
            if (cart.length) {
                cartList = cart.map((item, index) => <ItemCart key={item.name} infoCart={item} index={index}></ItemCart>)
            }
            else {
                return <EmptyCart></EmptyCart>
            }
        }
        else {
            return <EmptyCart></EmptyCart>
        }
        return (
            <div className="container">
                <Breadcrumb InfoBreadcrumb={infoBreadcrumb}></Breadcrumb>
                <table>
                    <thead>
                        <tr>
                            <th>HÌNH ẢNH</th>
                            <th>TÊN SẢN PHẨM</th>
                            <th>GIÁ</th>
                            <th>SỐ LƯỢNG</th>
                            <th>TỔNG SỐ</th>
                            <th>XOÁ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartList}
                    </tbody>
                </table>
                {!this.props.Profile.id ? <p>Bạn chưa đăng nhập. Vui lòng đăng nhập để thanh toán đơn hàng</p> : null}
                <div className="cart_btn">
                    {this.props.Profile.id ?
                        <Link className="btn btn__cart" to="/checkout">THANH TOÁN</Link>
                        : <Link className="btn btn__cart" to="/login">ĐĂNG NHẬP</Link>
                    }
                    <Link className="btn btn__cart" to="/products">TIẾP TỤC MUA HÀNG</Link>
                    <button className="btn btn__cart cancelCart" type="button">XOÁ</button>
                </div>
            </div>
        )
    };
}

const mapStateToProps = state => {
    return {
        GetCart: state.cart,
        Profile: state.profile
    }
}
export default connect(mapStateToProps, null)(Cart);

