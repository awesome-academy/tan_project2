import React from 'react';
//import { Link } from 'react-router-dom';
import { faTh, faThList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductView from './productView';
import { connect } from 'react-redux';
import { sortProduct } from '../../../../redux/actions';

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            viewGrid: true
        }
        this.handleView = this.handleView.bind(this);
        this.handleSort = this.handleSort.bind(this);
    }

    handleView(data) {
        this.setState({
            viewGrid: data
        })
    }

    handleSort(e) {
        this.props.SortProducts(e.target.value);
    }

    render() {
        const view = <ProductView viewStyle={this.state.viewGrid}></ProductView>
        return (
            <section className="content">
                <div className="sort_bar">
                    <div className="sort_bar__view">
                        <input type="radio" name="styleView" id="viewGrid" defaultValue={true} defaultChecked onClick={this.handleView.bind(this,true)}></input>
                        <label htmlFor="viewGrid">
                            <FontAwesomeIcon icon={faTh}></FontAwesomeIcon>
                        </label>
                        <input type="radio" name="styleView" id="viewList" defaultValue={false} onClick={this.handleView.bind(this,false)}></input>
                        <label htmlFor="viewList">
                            <FontAwesomeIcon icon={faThList}></FontAwesomeIcon>
                        </label>
                    </div>
                    <div className="sort_bar__order">
                        <span> Order by </span>
                        <select onChange={this.handleSort}>
                            <option value="az"> Name lowest to highest </option>
                            <option value="za"> Name highest to lowest </option>
                            <option value="highestPrice"> Price highest to lowest </option>
                            <option value="lowestPrice"> Price lowest to highest </option>
                        </select>
                    </div>
                </div>
                {view}
            </section>
        )
    };
}

const mapDispatchToProps = dispatch => {
    return {
        SortProducts: (data) => dispatch(sortProduct(data))
    }
}

export default connect(null, mapDispatchToProps) (Products);
