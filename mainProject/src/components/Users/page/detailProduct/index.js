import React from 'react';
import Breadcrumb from '../../common/breadcrumb';
import Content from './content';
import './../../../../css/pages/detailProduct.scss';
import Characteristics from './characteristics';
import Same from './same';

class ProductDetail extends React.Component {

    render() {
        let info = {name: "Products", path: "/products"}
        return (
            <div className="container">
                <Breadcrumb InfoBreadcrumb={info}></Breadcrumb>
                <Content></Content>
                <Characteristics></Characteristics>
                <Same></Same>
            </div>
        )
    };
}

export default ProductDetail;
