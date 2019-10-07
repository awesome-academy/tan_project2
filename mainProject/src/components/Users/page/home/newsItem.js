import React from 'react';

class NewsItem extends React.Component {

    render() {
        return (
            <div className="news__item">
                <div><img src="./images/Layer 41.jpg" alt="41" /></div>
                <div>
                    <h3 className="news__title">VANG THĂNG LONG CLASSIC</h3>
                    <p className="news__desc">Đăng bởi Giangle | 30/06/2015 | 60 bình luận</p>
                    <p className="news__detail">
                        Vang nổ Thăng Long có hương vị đặc trưng của sản phẩm lên men tự nhiên từ hoa quả với độ rượu nhẹ, bọt ga đầy trắng mịn. Vang Nổ thăng long tạo cảm giác hương phấn, êm dịu, vui tươi, sản phẩm được đóng chai dung tích 750ml...
                    </p>
                    <button className="btn btn__more" type="button">Read more</button>
                </div>
            </div>
        )
    };
}

export default NewsItem;
