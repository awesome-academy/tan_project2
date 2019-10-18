import React from 'react';
import Slider from './../../common/product/slider';
import { connect } from 'react-redux';

class Same extends React.Component {

    render() {
        let products= this.props.ProductSame;
        return (
            <div className="same">
                <h2 className="title__block">SẢN PHẨM LIÊN QUAN</h2>
                <Slider productList={products}></Slider>
            </div>
        )
    };
}

const mapStateToProps = state => {
    return {
        ProductSame: state.productDetail.productSame
    }
}

export default connect(mapStateToProps, null)(Same);
