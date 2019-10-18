import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { setCart } from './../../../../redux/actions';
import axios from 'axios';

class ContentText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 1,
            Quantity: 1
        }
    }

    handleRating(data){
        axios.patch('http://localhost:3000/products/' + this.props.Product.id,
                    {
                        rating: data
                    }
                )
                .then(() => this.setState({
                    rating: data
                }))
        
    }

    handleQuantity(num) {
        this.setState({
            Quantity: this.state.Quantity + num
        })
    }

    handleAddToCart = (e) => {
        let { id, name, img, price } = e.target.dataset;
        let cart = JSON.parse(localStorage.getItem("myCart"));
        let quantity = this.state.Quantity;
        if (cart) {
            let indexProduct = cart.findIndex(x => x.id === id);
            if (indexProduct === -1) {
                cart = cart.concat({id: id, img: img, name: name, price: price, quantity: quantity })
            }
            else {
                cart[indexProduct].quantity = parseInt(cart[indexProduct].quantity) + quantity;
            }
            localStorage.setItem("myCart", JSON.stringify(cart));
            this.props.SetCart(cart);
        }
        else {
            let myCart = [{id: id, img: img, name: name, price: price, quantity: quantity }];
            localStorage.setItem("myCart", JSON.stringify(myCart));
            this.props.SetCart(myCart);
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.Product !== prevProps.Product) {
            this.setState({
                rating: this.props.Product.rating
            });
        }
    }

    render() {
        let productName, price, priceString, ratingView, id, image;
        ratingView = [];
        for (let i = 1; i <= 5; i++) {
            if (i === this.state.rating) {
                ratingView.push(<span data-rating={i} className="rating_active" onClick={this.handleRating.bind(this,i)} key={i + '1a'}><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>)
            }
            else ratingView.push(<span data-rating={i} onClick={this.handleRating.bind(this,i)} key={i + '1'}><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>)
        }
        if (this.props.Product) {
            productName = this.props.Product.productName;
            price = this.props.Product.price;
            priceString = price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
            id = this.props.Product.id;
            image = this.props.Product.image;
        }

        return (
            <div className="text">
                <h2 className="title__arrow">{productName}</h2>
                <p className="product__price_new product__price_new--big">{priceString} đ</p>
                <div className="rating">
                    {ratingView}
                </div>
                <div className="custom_color">
                    <h5 className="title">MÀU SĂC</h5>
                    <div>
                        <button className="btn btn__color" type="button"></button>
                        <button className="btn btn__color" type="button"></button>
                        <button className="btn btn__color" type="button"></button>
                    </div>
                </div>
                <div className="custom_param">
                    <h5 className="title">KÍCH CỠ</h5>
                    <select name="size">
                        <option value="1">Loại to</option>
                        <option value="2">Loại vừa</option>
                        <option value="3">Loại nhỏ</option>
                    </select>
                </div>
                <div className="custom_count">
                    <h5 className="title">SỐ LƯỢNG</h5>
                    <div>
                        <button className="btn" type="button" disabled={this.state.Quantity < 2} onClick={this.handleQuantity.bind(this,-1)}>-</button>
                        <span> {this.state.Quantity} </span>
                        <button className="btn" type="button" onClick={this.handleQuantity.bind(this,1)}>+</button>
                        <button
                            className="btn btn__cart"
                            type="button" title="ADD TO CART"
                            data-id={id}
                            data-name={productName}
                            data-img={image}
                            data-price={price}
                            onClick={this.handleAddToCart}
                        >ADD TO CART
                        </button>
                    </div>
                </div>
                <div className="interaction">
                    <button className="btn btn__more" type="button"><i className="fas fa-heart"></i>&nbsp; Yêu thích</button>
                    <button className="btn btn__more" type="button"><i className="fas fa-signal"></i>&nbsp; So sánh</button>
                    <button className="btn btn__more" type="button"><i className="fas fa-envelope"></i>&nbsp; Email</button>
                </div>
                <div className="desc">
                    <h5 className="title">MÔ TẢ</h5>
                    <p>Một hợp chất có trong rượu vang được gọi là resveratro có khả năng làm tăng tối đa tuổi thọ. Resveratro còn có khả năng ngăn chặn mật độ ôxy hoá của protein béo.</p>
                </div>
            </div>
        )
    };
}

const mapStateToProps = state => {
    return {
        Product: state.productDetail.product
    }
}

const mapDispatchToProps = dispatch => {
    return {
        SetCart: (data) => dispatch(setCart(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentText);
