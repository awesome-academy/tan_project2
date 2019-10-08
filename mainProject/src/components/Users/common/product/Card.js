import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProductDetail } from '../../../../redux/actions';

class Card extends React.Component {
    onProductDetail(id, idCategory) {
        this.props.GetProductDetail(id, idCategory)
    }
    render() {
        const {productName, image, price, id, idCategory} = this.props.productInfo;
        const priceString = price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        const oldPriceString = (price + 50000).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        return (
            <div className="product__item">
                <Link to="/productDetail" className="product__img" onClick={this.onProductDetail.bind(this, id, idCategory)}>
                    <div className="product__interactive">
                        <button className="btn btn__cart" type="button"><i className="fas fa-heart" />&nbsp; Yêu thích</button>
                        <button className="btn btn__cart" type="button"> <i className="fas fa-signal" />&nbsp; So sánh</button>
                    </div>
                    <img src={"./images/" + image} alt={image + "hehe"} />
                </Link>
                <div className="product__content product__content--center">
                    <h3 className="product__name"> {productName} </h3>
                    <div className="product__price">
                        <span className="product__price_new"> {priceString} đ</span>
                        <span className="product__price_old"> {oldPriceString} đ</span>
                    </div>
                    <button className="btn btn__cart" type="button" title="ADD TO CART">ADD TO CART</button>
                </div>
            </div>
        )
    };
}

const mapDispatchToProps = dispatch => {
    return {
        GetProductDetail: (id, idCategory) => dispatch(getProductDetail(id, idCategory))
    }
}

export default connect(null, mapDispatchToProps) (Card);
