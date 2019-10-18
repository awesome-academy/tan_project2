import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { setCart } from '../../../../redux/actions';

class ItemCart extends React.Component {

    formatNumber = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    changeCart = (num) => {
        let indexCart = this.props.index;
        let cart = JSON.parse(localStorage.getItem("myCart"));
        cart[indexCart].quantity = cart[indexCart].quantity + num;
        localStorage.setItem("myCart", JSON.stringify(cart));
        this.props.SetCart(cart);
    }

    deleCart = () => {
        let indexCart = this.props.index;
        let cart = JSON.parse(localStorage.getItem("myCart"));
        cart.splice(indexCart,1);
        localStorage.setItem("myCart", JSON.stringify(cart));
        this.props.SetCart(cart);
    }

    render() {
        let {id, name, img, price, quantity } = this.props.infoCart;
        const priceString = price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        return (
            <tr>
                <td> <img src={'/images/' + img} alt={img} /> </td>
                <td> {name} </td>
                <td> {priceString} đ </td>
                <td>
                    <button disabled={quantity < 2} onClick={this.changeCart.bind(this,-1)}> - </button>
                    <span> {quantity} </span>
                    <button type="button" onClick={this.changeCart.bind(this,1)}> + </button>
                </td>
                <td> {this.formatNumber(parseInt(price) * quantity) + ' đ'} </td>
                <td>
                    <button type="button" data-delete={id} data-index={this.props.index} onClick={this.deleCart}>
                        <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </td>
            </tr>
        )
    };
}

const mapDispatchToProps = dispatch => {
    return {
        SetCart: (data) => dispatch(setCart(data))
    }
}

export default connect(null, mapDispatchToProps)(ItemCart);

