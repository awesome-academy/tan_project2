import React from 'react';
import { connect } from 'react-redux';
import { getOrderAsync, filterOrder } from '../../redux/actions';
import { Link } from 'react-router-dom';
class Order extends React.Component {
    componentDidMount() {
        this.props.GetOrderAsync()
    }

    countOccurrences = (arr) => {
        let result = arr.reduce(function (count, item) {
            if (count[item.day] === undefined) count[item.day] = 1;
            else count[item.day] += 1;
            return count;
        }, {})
        return result;
    }

    render() {
        let allOrder = this.props.AllOrder;
        let timeOrder;
        if (allOrder.length) {
            let listDayy = this.countOccurrences(allOrder);
            timeOrder = Object.keys(listDayy).map((item, index) =>
                <Link to={`/orderDetail${item}`} key={index * 2} onClick={this.props.FilterOrder.bind(this,item)} className="btn btn__cart"> {item} </Link>
            )
        }
        return (
            <div className="adMain_content">
                <h3> Thời gian: </h3>
                <br></br>
                <div>
                    {timeOrder}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        AllOrder: state.orders
    }
}

const mapDispatchToProps = dispatch => {
    return {
        GetOrderAsync: () => dispatch(getOrderAsync()),
        FilterOrder: (data) => dispatch(filterOrder(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);
