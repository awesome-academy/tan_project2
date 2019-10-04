import React from 'react';
import Hot from './hot';
import Header from '../../common/header';
import Footer from '../../common/footer';
import './../../../../css/pages/style.scss';
import BannerItem from './bannerItem';
import News from './news';
import Customer from './customer';
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from 'react-redux';
import SliderContent from './sliderContent';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            transLateX: 0
        }
        this.handleSlider = this.handleSlider.bind(this)
    }

    handleSlider(num) {
        if (num < 0) {
            if (this.state.transLateX === -100) {
                this.setState({
                    transLateX: 0
                })
            }
            else {
                this.setState({
                    transLateX: this.state.transLateX + num * 25
                })
            }
        }
        else {
            if (this.state.transLateX === 0) {
                this.setState({
                    transLateX: -100
                })
            }
            else {
                this.setState({
                    transLateX: this.state.transLateX + num * 25
                })
            }
        }
    }

    render() {
        let styleSlider = {transform: `${"translate(" + this.state.transLateX + "%)"}`};
        let productList = this.props.ProductList;
        let productNew = productList.filter(product => product.new);
        let productBestSelling = productList.sort( (a,b) => b.sold - a.sold);
        return (
            <div>
                <Header></Header>
                <section className="intro__home">
                    <div className="intro__container">
                        <h3 className="title__block">Giới thiệu</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi vero, omnis natus excepturi laborum ipsa ad ratione facere mollitia id officiis illo consectetur ullam suscipit quod. Harum, illum fugit. Cupiditate sed repellendus illo veniam Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi vero, omnis natus excepturi laborum ipsa ad ratione facere mollitia id officiis illo consectetur ullam suscipit quod. Harum, illum fugit. Cupiditate sed repellendus illo veniam Quasi vero, omnis natus excepturi laborum ipsa ad rationefacere mollitia id officiis illo consectetur ullam suscipit quod. Harum, illum fugit. Cupiditate repellendus illo veniam eveniet.
                        </p>
                        <button className="btn btn__cart" type="button">XEM THÊM</button>
                    </div>
                </section>
                <Hot></Hot>
                <h3 className="title__block">SẢN PHẨM MỚI</h3>
                <section className="container">
                    <div className="slider__home">
                        <div className="product product__four" style={styleSlider}>
                            <SliderContent products={productNew}></SliderContent>
                        </div>
                        <button type="button" className="btn slider__prev" onClick={this.handleSlider.bind(this, 1)}>
                            <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                        </button>
                        <button type="button" className="btn slider__next" onClick={this.handleSlider.bind(this, -1)}>
                            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                        </button>
                    </div>
                </section>
                <section className="banner">
                    <BannerItem img={"./images/Layer 19.jpg"}></BannerItem>
                    <BannerItem img={"./images/Layer 20.jpg"}></BannerItem>
                    <BannerItem img={"./images/Layer 22.jpg"}></BannerItem>
                    <BannerItem img={"./images/Layer 27.jpg"}></BannerItem>
                    <BannerItem img={"./images/Layer 25.jpg"}></BannerItem>
                    <BannerItem img={"./images/Layer 23.jpg"}></BannerItem>
                    <BannerItem img={"./images/Layer 29.jpg"}></BannerItem>
                    <BannerItem img={"./images/Layer 31.jpg"}></BannerItem>
                </section>
                <h3 className="title__block">SẢN PHẨM BÁN CHẠY</h3>
                <section className="container">
                    <div className="slider__home">
                        <div className="product product__four" style={styleSlider}>
                            <SliderContent products={productBestSelling}></SliderContent>
                        </div>
                        <button type="button" className="btn slider__prev" onClick={this.handleSlider.bind(this, 1)}>
                            <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                        </button>
                        <button type="button" className="btn slider__next" onClick={this.handleSlider.bind(this, -1)}>
                            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                        </button>
                    </div>
                </section>
                <section className="features container">
                    <News></News>
                    <Customer></Customer>
                </section>
                <Footer></Footer>
            </div>
        )
    };
}

const mapStateToProps = state => {
    return {
        ProductList: state.products
    }
}

export default connect(mapStateToProps, null) (Home);
