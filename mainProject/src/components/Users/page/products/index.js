import React from 'react';
import Breadcrumb from '../../common/breadcrumb';
import SideBar from './sideBar';
import './../../../../css/pages/products.scss';
import Products from './products';

class ProductsPage extends React.Component {

    render() {
        let info = {name: "Products", path: "/products"}
        return (
            <div className="container">
                <Breadcrumb InfoBreadcrumb={info}></Breadcrumb>
                <div className="banner__products">
                    <img src="./images/Layer781X.png" alt="Layer781X" />
                </div>
                <div className="wrapper">
                    <SideBar></SideBar>
                    <Products></Products>
                </div>
            </div>
        )
    };
}

export default ProductsPage;
