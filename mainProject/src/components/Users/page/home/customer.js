import React from 'react';

class Customer extends React.Component {

    render() {
        return (
            <div className="customer">
                <h3 className="title__block">KHÁCH HÀNG</h3>
                <div className="customer__content">
                    <div className="customer__icon"><i className="fas fa-quote-right"></i></div>
                    <p className="customer__detail">
                        Vang nổ Thăng Long có hương vị đặc trưng của sản phẩm lên men tự nhiên từ hoa quả với độ rượu nhẹ, bọt ga đầy trắng mịn. Vang Nổ thăng long ...
                    </p>
                    <button className="btn btn__more" type="button">Read more</button>
                    <div className="customer__avatar"><img src="./images/Layer 44.jpg" alt="44" /></div>
                    <p className="customer__name">Giang LT</p><small><i>Graphic desgin</i></small>
                </div>
            </div>
        )
    };
}

export default Customer;
