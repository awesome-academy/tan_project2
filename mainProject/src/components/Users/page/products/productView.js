import React from 'react';
import { connect } from 'react-redux';
import { getListProduct } from '../../../../redux/actions';
import Card from '../../common/product/Card';
import List from '../../common/product/List';

class ProductView extends React.Component {

    componentDidMount() {
        this.props.getListProduct(1)
    }

    pagination = (num) => {
        this.props.getListProduct(num)
    }

    sortName = (arr) => {
        arr.sort((a, b) => {
            let x = a.productNameE;
            let y = b.productNameE;
            return x < y ? -1 : x > y ? 1 : 0;
        });
        return arr
    }

    sortPrice = (arr) => {
        arr.sort((a, b) => a.price - b.price)
        return arr
    }

    render() {
        let productsPerPage = 9;
        let currentProducts = this.props.Products.List;
        let totalPage = this.props.Products.total;
        let pageNumbers = [];
        let renderProducts, renderPageNumbers;
        if (currentProducts) {
            switch (this.props.SortP) {
                case "az":
                    this.sortName(currentProducts);
                    break;
                case "za":
                    this.sortName(currentProducts).reverse()
                    break;
                case "lowestPrice":
                    this.sortPrice(currentProducts);
                    break;
                case "highestPrice":
                    this.sortPrice(currentProducts).reverse();
                    break;
                default:
            }
            if (this.props.viewStyle) { //Grid or List
                renderProducts = currentProducts.map((item, index) => <Card key={index} productInfo={item} />);
            }
            else {
                renderProducts = currentProducts.map((item, index) => <List key={index} productInfo={item} />);
            }

            for (let i = 1; i <= Math.ceil(Number(totalPage) / productsPerPage); i++) {
                pageNumbers.push(i);
            }
            renderPageNumbers = pageNumbers.map(number => {
                return (
                    <button
                        type="button"
                        className={this.props.Products.currentPage === number ? "page active" : "page"}
                        key={number}
                        id={number}
                        onClick={() => { this.pagination(parseInt(number)) }}
                    >
                        {number}
                    </button>
                );
            });
        }
        return (
            <>
                <div className="product product__three">
                    {renderProducts}
                </div>
                <div className="pageController_product">
                    {this.props.Products.currentPage < 2 ? <button type="button" className="pagePrev" disabled> Trang trước </button> : <button type="button" className="pagePrev" onClick={() => { this.props.pagination(parseInt(this.props.currentPage - 1)) }}> Trang trước </button>}
                    {renderPageNumbers}

                    {Number(this.props.Products.currentPage) !== Number(Math.ceil(totalPage / productsPerPage)) ?
                        <button type="button" className="pageLast" onClick={() => { this.pagination(Math.ceil(totalPage / productsPerPage)) }} > Trang cuối </button>
                        :
                        <button type="button" className="pageLast" disabled > Trang cuối </button>
                    }
                </div>
            </>
        )
    };
}

const mapStateToProps = state => {
    return {
        Products: state.productList,
        SortP: state.productSort
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getListProduct: (num) => dispatch(getListProduct(num))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductView);
