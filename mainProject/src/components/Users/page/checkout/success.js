import React from 'react';
import imgSuccess from './payment-successful.png';
import {Link} from 'react-router-dom';

class Success extends React.Component {
    render() {
        return (
            <div className="emptyCart">
                <div className="emptyCart_img">
                    <img src={imgSuccess} alt="sdsddf" />
                </div>
                <h1> Successful! </h1>
                <h2> Thank you for your purchase! </h2>
                <div>
                    <Link to="/products" className="emptyCart_btn"> Tiếp tục mua sắm </Link>
                </div>
            </div>
        )
    }
}

export default Success;
