import React, { Component } from "react";
import './catalog.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { getListProduct, sortProduct } from './../../redux/actions';
import { connect } from 'react-redux';
import ItemsCatalog from "./itemCatalog";


class Catalog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortState: 1
        }
    }

    componentDidMount() {
        this.props.getListProduct(1)
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

    pagination = (num) => {
        this.props.getListProduct(num)
    }

    handleSort = (check) => {
        if (check) {
            if (this.state.sortState === 2) {
                this.setState({
                    sortState: 1
                })
                this.props.SortProducts("az");
            }
            else {
                this.setState({
                    sortState: 2
                })
                this.props.SortProducts("za");
            }
        }
        else {
            if (this.state.sortState === 4) {
                this.setState({
                    sortState: 3
                })
                this.props.SortProducts("lowestPrice");
            }
            else {
                this.setState({
                    sortState: 4
                })
                this.props.SortProducts("highestPrice");
            }
        }
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
                    console.log(currentProducts);
                    break;
                case "za":
                    this.sortName(currentProducts).reverse();
                    console.log(currentProducts);
                    break;
                case "lowestPrice":
                    this.sortPrice(currentProducts);
                    console.log(currentProducts);
                    break;
                case "highestPrice":
                    this.sortPrice(currentProducts).reverse();
                    console.log(currentProducts);
                    break;
                default:
            }

            renderProducts = currentProducts.map((item, index) => <ItemsCatalog key={item.productNameE} index={index} {...item} />);

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
            <div className="adMain_content catalog_content">
                <button className="catalogBtn btn_add" onClick={() => this.openModal()}>New Product</button>
                <br></br>
                <table id="customers">
                    <thead>
                        <tr>
                            <th></th>
                            <th>
                                <p>Name</p>
                                <div className="table_sort" onClick={this.handleSort.bind(this, true)}>
                                    <button type="button" className={this.state.sortState === 1 ? "btn active" : "btn"}> <FontAwesomeIcon icon={faSortUp}></FontAwesomeIcon> </button>
                                    <button type="button" className={this.state.sortState === 2 ? "btn active" : "btn"}> <FontAwesomeIcon icon={faSortDown}></FontAwesomeIcon> </button>
                                </div>
                            </th>
                            <th>
                                <p>Price VNĐ</p>
                                <div className="table_sort" onClick={this.handleSort.bind(this, false)}>
                                    <button type="button" className={this.state.sortState === 3 ? "btn active" : "btn"}> <FontAwesomeIcon icon={faSortUp}></FontAwesomeIcon> </button>
                                    <button type="button" className={this.state.sortState === 4 ? "btn active" : "btn"}> <FontAwesomeIcon icon={faSortDown}></FontAwesomeIcon> </button>
                                </div>
                            </th>
                            <th>Images</th>
                            <th>Detail</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderProducts}
                    </tbody>
                </table>
                <div className="pageController_product">
                    {this.props.Products.currentPage < 2 ? <button type="button" className="pagePrev" disabled> Trang trước </button> : <button type="button" className="pagePrev" onClick={() => { this.pagination(parseInt(this.props.currentPage - 1)) }}> Trang trước </button>}
                    {renderPageNumbers}

                    {Number(this.props.Products.currentPage) !== Number(Math.ceil(totalPage / productsPerPage)) ?
                        <button type="button" className="pageLast" onClick={() => { this.pagination(Math.ceil(totalPage / productsPerPage)) }} > Trang cuối </button>
                        :
                        <button type="button" className="pageLast" disabled > Trang cuối </button>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        Products: state.productList,
        SortP: state.productSort
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getListProduct: (num) => dispatch(getListProduct(num)),
        SortProducts: (data) => dispatch(sortProduct(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);

