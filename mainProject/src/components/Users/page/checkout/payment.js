import React from 'react';
import { connect } from 'react-redux';
import { setStepCheckout } from '../../../../redux/actions';

class Payment extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            select: 3
        }
    }

    handle

    render() {
        return (
            <div className="ship">
                <div>
                    <span>Chọn phương thức thanh toán </span>
                    <button
                        onClick={() => this.setState({ select: 1 })}
                        className={this.state.select === 1 ? "btn active" : "btn"}
                    >Ví Airpay
                    </button>
                    <button
                        onClick={() => this.setState({ select: 2 })}
                        className={this.state.select === 2 ? "btn active" : "btn"}
                    >Thẻ tín dụng / ghi nợ
                    </button>
                    <button
                        onClick={() => this.setState({ select: 3 })}
                        className={this.state.select === 3 ? "btn active" : "btn"}
                    >Thanh toán khi nhận hàng
                    </button>
                    <div>
                        {this.state.select === 1 ? <div className="airpay">Use Airpay</div>
                            : (this.state.select === 2 ? <div className="card">Nhập mã thẻ
                                <input onChange={this.getCard} type="text"></input>
                            </div>
                                : <div className="cod">Bạn sẽ thanh toán sau khi nhận hàng .</div>
                            )
                        }
                    </div>
                </div>
                <div>
                    <button className="btn" onClick={this.props.SetStepCheckout.bind(this,1)}> Quay lại </button>
                    <button className="btn" onClick={this.props.SetStepCheckout.bind(this,3)}> Tiếp theo </button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        SetStepCheckout: (data) => dispatch(setStepCheckout(data))
    }
}

export default connect(null, mapDispatchToProps) (Payment);
