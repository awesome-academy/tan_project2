import React from 'react';
import Hot from './hot';
import './../../../../css/pages/style.scss';
import News from './news';
import Customer from './customer';
import { connect } from 'react-redux';
import Banner from './banner';
import Slider from '../../common/product/slider';
import { fetchDataHomeAsync } from '../../../../redux/actions';

class Home extends React.Component {
    componentDidMount() {
        this.props.fetchDataHomeAsync()
    }

    render() {
        let sliderProductNew, sliderProductHot;
        if(this.props.ProductList.newProduct){
            sliderProductNew = <Slider productList={this.props.ProductList.newProduct}></Slider>
            sliderProductHot = <Slider productList={this.props.ProductList.hotProduct}></Slider>
        }
        return (
            <div>
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
                    {sliderProductNew}
                </section>
                <Banner></Banner>
                <h3 className="title__block">SẢN PHẨM BÁN CHẠY</h3>
                <section className="container">
                    {sliderProductHot}
                </section>
                <section className="features container">
                    <News></News>
                    <Customer></Customer>
                </section>
            </div>
        )
    };
}

const mapStateToProps = state => {
    return {
        ProductList: state.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDataHomeAsync: () => dispatch(fetchDataHomeAsync())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Home);
