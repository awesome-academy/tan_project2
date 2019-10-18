import React from 'react';
import { connect } from 'react-redux';

class OrderDetail extends React.Component {
    render() {
        let allOrder = this.props.AllOrder;
        let filterOrder = this.props.FilterOrder;
        let dataOrder;
        if(filterOrder) {
            dataOrder = allOrder.filter(item => item.day === filterOrder);
        }
        return (
            <div className="adMain_content">
                {dataOrder ? dataOrder.length : 0} Đơn hàng.
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        AllOrder: state.orders,
        FilterOrder: state.filterOrder
    }
}

export default connect(mapStateToProps, null) (OrderDetail);
