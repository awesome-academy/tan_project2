import React from 'react';

class Hot extends React.Component {

    render() {
        return (
            <section className="hot container">
                <div className="hot__content">
                    <div className="hot__img focus focus__sale">
                        {/*img(src="./images/14.jpg", alt="9")*/}
                    </div>
                    <div className="hot__text">
                        <h2 className="title__arrow">RƯỢU NHO NĂM 1987</h2>
                        <p className="hot__price"> 330.000 đ </p>
                        <button className="btn btn__cart" type="button" title="ADD TO CART">ADD TO CART</button>
                        <p className="hot__desc">
                            Một hợp chất có trong rượu vang được gọi là resveratro
                            có khả năng làm tăng tối đa tuổi thọ. Resveratro còn có khả
                            năng ngăn chặn mật độ ôxy hoá của protein béo.
                        </p>
                        <div className="hot__date">
                            <div>
                                <p>342</p><small>ngày</small>
                            </div>
                            <div>
                                <p>26</p><small>giờ</small>
                            </div>
                            <div>
                                <p>50</p><small>phút</small>
                            </div>
                            <div>
                                <p>15</p><small>giây</small>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    };
}

export default Hot;
