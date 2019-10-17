import React from 'react';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {

    render() {
        return (
            <section className="side_bar">
                <div className="side_bar__item">
                    <h2 className="title__arrow">DANH MỤC SẢN PHẨM</h2><Link to="/"><i className="fas fa-bars" /></Link >
                    <h3 className="side_bar__title">RƯỢU NGOẠI</h3>
                    <ul>
                        <li><Link to="/">Rượu Chivas (26)</Link ></li>
                        <li><Link to="/">Hàng độc - Rượu độc đáo (36)</Link ></li>
                        <li><Link to="/">Johnnie Walker (46)</Link ></li>
                        <li><Link to="/">Rượu Whisky (24)</Link ></li>
                        <li><Link to="/">Rượu Remy Martin (16)</Link ></li>
                        <li><Link to="/">Rượu Glenmorangie  (11)</Link ></li>
                        <li><Link to="/">Rượu Ballantine's (7)</Link ></li>
                        <li><Link to="/">Rượu Cognac (40)</Link ></li>
                        <li><Link to="/">Rượu Vodka (93)</Link ></li>
                        <li><Link to="/">Rượu Macallan (19)</Link ></li>
                        <li><Link to="/">Rượu Brandy (62)</Link ></li>
                        <li><Link to="/">Rượu Hennessy (20)</Link ></li>
                        <li><Link to="/">RượuGin - Tequila - Liqueur - Rượu mùi (36)</Link ></li>
                        <li><Link to="/">Rượu Champagne (12)</Link ></li>
                        <li><Link to="/">Rượu Single malt Scotch whisky (47)</Link ></li>
                        <li><Link to="/">Rượu Spirits (4)</Link ></li>
                    </ul>
                    <h3 className="side_bar__title">RƯỢU VANG</h3>
                    <ul>
                        <li><Link to="/">Rượu Vang Pháp (44)</Link ></li>
                        <li><Link to="/">Rượu Vang Úc (26)</Link ></li>
                        <li><Link to="/">Rượu Vang Mỹ (20)</Link ></li>
                        <li><Link to="/">Rượu Vang Chile (21)</Link ></li>
                        <li><Link to="/">Rượu Vang Philip (20)</Link ></li>
                        <li><Link to="/">Rượu Vang Nam Phi (23)</Link ></li>
                        <li><Link to="/">Rượu Vang Ý (26)</Link ></li>
                    </ul>
                </div>
                <div className="side_bar__item">
                    <h2 className="title__arrow">SO SÁNH SẢN PHẨM</h2>
                    <p>Bạn chưa có sản phẩm nào để so sánh</p>
                </div>
                <div className="side_bar__item">
                    <h2 className="title__arrow">TAG SẢN PHẨM</h2>
                    <div>
                        <button className="btn btn__list" type="button" title="Đồng hồ">Đồng hồ</button>
                        <button className="btn btn__list" type="button" title="Túi">Túi</button>
                        <button className="btn btn__list" type="button" title="Phụ kiện">Phụ kiện</button>
                        <button className="btn btn__list" type="button" title="Giày">Giày</button>
                        <button className="btn btn__list" type="button" title="Sandal">Sandal</button>
                        <button className="btn btn__list" type="button" title="Áo sơ mi">Áo sơ mi</button>
                        <button className="btn btn__list" type="button" title="Nước hoa">Nước hoa</button>
                        <button className="btn btn__list" type="button" title="Trẻ em">Trẻ em</button>
                        <button className="btn btn__list" type="button" title="Thời trang nữ">Thời trang nữ</button>
                    </div>
                </div>
                <div className="side_bar__item"><img src="./images/ads.png" alt="ads" /></div>
            </section>
        )
    };
}

export default SideBar;
