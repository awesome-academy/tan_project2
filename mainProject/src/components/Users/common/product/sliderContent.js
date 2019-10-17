import React from 'react';
import Card from './Card';

class SliderContent extends React.Component {


    render() {
        let cardList;
        if(this.props.products){
            cardList = this.props.products.map((product, index) => <Card key={product.productName + index} productInfo={product}></Card>);
        }
        return (
            <>
                {cardList}
            </>
        )
    };
}

export default SliderContent;
