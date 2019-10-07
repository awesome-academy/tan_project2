import React from 'react';
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SliderContent from './sliderContent';

class Slider extends React.Component {
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
        let styleSlider = { transform: `${"translate(" + this.state.transLateX + "%)"}` };
        let products = this.props.productList.filter(product => product.new);
        return (
            <div className="slider__home">
                <div className="product product__four" style={styleSlider}>
                    <SliderContent products={products}></SliderContent>
                </div>
                <button type="button" className="btn slider__prev" onClick={this.handleSlider.bind(this, 1)}>
                    <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                </button>
                <button type="button" className="btn slider__next" onClick={this.handleSlider.bind(this, -1)}>
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </button>
            </div>
        )
    };
}

export default Slider;