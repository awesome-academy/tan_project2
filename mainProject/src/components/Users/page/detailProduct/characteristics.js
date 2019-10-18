import React from 'react';
import { connect } from 'react-redux';

class Characteristics extends React.Component {
    componentDidMount() {
        window.fbAsyncInit = function () {
            window.FB.init({
                appId: "xxxxxxxxx",
                autoLogAppEvents: true,
                xfbml: true,
                version: 'v3.0'
            });
        };

        // Load the SDK asynchronously
        (function (d, s, id) {
            var js,
                fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        })(document, "script", "facebook-jssdk");
    }

    componentDidUpdate() {
        window.FB.XFBML.parse();
    }

    render() {
        let descProduct, id;
        if (this.props.Product) {
            descProduct = this.props.Product.decription;
            id = this.props.Product.id
        }
        return (
            <div className="characteristics">
                <div className="characteristics__content">
                    <input type="radio" name="inputGroup" id="tab1" defaultChecked />
                    <input type="radio" name="inputGroup" id="tab2" />
                    <input type="radio" name="inputGroup" id="tab3" />
                    <nav>
                        <ul>
                            <li className="tab1">
                                <label htmlFor="tab1">ĐẶC ĐIỂM NỔI BẬT</label>
                            </li>
                            <li className="tab2">
                                <label htmlFor="tab2">THÔNG TIN SẢN PHẨM</label>
                            </li>
                            <li className="tab3">
                                <label htmlFor="tab3">ĐÁNH GIÁ</label>
                            </li>
                        </ul>
                    </nav>
                    <section>
                        <div className="tab1">
                            <p> {descProduct} laudantium inventore autem doloribus atque labore numquam non. Hic, animi.</p>
                        </div>
                        <div className="tab2">
                            <h2>Second</h2>
                            <p> {descProduct} </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, nobis culpa rem, vitae earum aliquid.</p>
                            <p>Lorem ipsum officiis aliquid a, vitae reprehenderit, accusantium vero, ad. Obcaecati numquam sapiente cupiditate. Praesentium eaque, quae error!</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, maiores.</p>
                        </div>
                        <div className="tab3">
                            <div className="fb-comments" data-href={"http://localhost:3001/productDetail/" + id} data-numposts="5"></div>
                        </div>
                    </section>
                </div>
                <div className="characteristics__img"><img src="/images/Layer 74.png" alt="Layer 74" /></div>
            </div>
        )
    };
}

const mapStateToProps = state => {
    return {
        Product: state.productDetail.product
    }
}

export default connect(mapStateToProps, null)(Characteristics);
