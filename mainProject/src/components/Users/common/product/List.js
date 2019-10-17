import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProductDetail } from '../../../../redux/actions';

class List extends React.Component {
    onProductDetail(id, idCategory) {
        this.props.GetProductDetail(id, idCategory)
    }

    render() {
        const {productName, image, price, id, idCategory} = this.props.productInfo;
        const priceString = price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        return (
            <div  className="product_list__item" >
                <Link to="productDetail" className="product__img" onClick={this.onProductDetail.bind(this, id, idCategory)}>
                    <img src={"./images/" + image} alt={image + "hehelist"} />
                </Link>
                <div className="product__content">
                    <p className="product__name product__name--big">{productName}</p>
                    <div className="product__price">
                        <span className="product__price_new product__price_new--big">{priceString} đ</span>
                    </div>
                    <p className="product__desc">Một hợp chất có trong rượu vang được gọi là resveratro có khả năng làm tăng tối đa tuổi thọ. Resveratro còn có khả năng ngăn chặn mật độ ôxy hoá của protein béo.</p>
                    <div>
                        <button className="btn btn__cart" type="button">ADD TO CART</button>
                        <button className="btn btn__more" type="button"><i className="fas fa-heart"></i>&nbsp; Yêu thích</button>
                        <button className="btn btn__more" type="button"><i className="fas fa-signal"></i>&nbsp; So sánh</button>
                    </div>
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

export default connect(null, mapDispatchToProps) (List);
