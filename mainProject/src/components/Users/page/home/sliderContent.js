import React from 'react';
import { connect } from 'react-redux';
import Card from '../../common/product/Card';

class SliderContent extends React.Component {
    

    render() {
        console.log(this.props.products);
        let cardList = null;
        if(this.props.products){
            if(this.props.products.length > 8) {
                let productSlice = this.props.products.slice(0,8);
                cardList = productSlice.map( (product,index) => <Card key={product.productName + index} productInfo={product}></Card> );
            }
            else {
                cardList = this.props.products.map( (product,index) => <Card key={product.productName + index} productInfo={product}></Card> );
            }
        }
        return (
            <>
                {cardList}
            </>
        )
    };
}

export default connect(null, null)(SliderContent);