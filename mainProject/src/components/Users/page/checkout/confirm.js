import React from 'react';
import { connect } from 'react-redux';
import { setStepCheckout, setCart } from '../../../../redux/actions';
import axios from 'axios';
import { Redirect  } from 'react-router-dom';

class Confirm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            redirect: false
        }
    }
    Total = (arr) => {
        return arr.reduce((a,b) => {
            return a + b.price * b.quantity
        },0)
    }

    formatNumber = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    handleCheckout = () => {
        let dateNow = new Date();
        let dateNowString = dateNow.toISOString().slice(0, 10);
        let idCart = this.props.Profile.id + "Cart" + dateNow.getTime();
        let total = this.Total(this.props.GetCart);
        let productList = [];
        for(let i = 0; i < this.props.GetCart.length; i++){
            let item = {idProduct: this.props.GetCart[i].id, quantity: this.props.GetCart[i].quantity}
            productList.push(item)
        }
        console.log(productList);
        axios.post("http://localhost:3000/orders",
            {
                id: idCart,
                idUser: this.props.Profile.id,
                day: dateNowString,
                total: total,
                productList: productList
            }
        )
        .then(() => {
            localStorage.setItem("myCart", JSON.stringify([]));
            this.props.SetCart([]);
            this.setState({
                redirect: true
            })
        })
    }
    render() {
        let listCart = this.props.GetCart.map((item,index) => <tr key={item.id + index}><td>{item.name}</td><td>{this.formatNumber(item.price)}</td><td>{item.quantity}</td><td>{this.formatNumber(parseInt(item.price)*item.quantity)}</td></tr>)
        if(!this.state.redirect)
        return (
            <div>
                <div>
                    <h3>Xác nhận đơn hàng</h3>
                    <br></br>
                    <div>
                        {this.props.Profile.name + " - " + this.props.Profile.address + " - " + this.props.Profile.phone}
                    </div>
                    <div>
                        Thanh toán khi nhận hàng
                    </div>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        Tên
                                    </th>
                                    <th>
                                        Giá(đ)
                                    </th>
                                    <th>
                                        Số lượng
                                    </th>
                                    <th>
                                        Tổng(đ)
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {listCart}
                                <tr>
                                    <th> </th>
                                    <th> </th>
                                    <th></th>
                                    <th>
                                        {this.formatNumber(this.Total(this.props.GetCart))}
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <button className="btn btn__cart" onClick={this.props.SetStepCheckout.bind(this, 2)}> Quay lại </button>
                    <button className="btn btn__cart" onClick={this.handleCheckout}> Xác nhận </button>
                </div>
            </div>
        )

        else return <Redirect to="/success"/>
    }
}

const mapStateToProps = state => {
    return {
        Profile: state.profile,
        GetCart: state.cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        SetStepCheckout: (data) => dispatch(setStepCheckout(data)),
        SetCart: (data) => dispatch(setCart(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Confirm);
