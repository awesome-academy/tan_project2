import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import ContentText from './contentText';
import { connect } from 'react-redux';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: ""
        }
    }

    handleGallery(data) {
        this.setState({
            image: data
        });
    }

    componentDidUpdate(prevProps) {
        if (this.props.Product !== prevProps.Product) {
            this.setState({
                image: this.props.Product.image
            });
        }
    }
    render() {
        let listImg;
        if (this.props.Product) {
            listImg = this.props.Product.optionImg.map(item => <div key={item} className="gallery__thumb" ><img onClick={this.handleGallery.bind(this,item)} src={"/images/" + item} alt={item + "hehe"} /></div>)
        }
        return (
            <div className="content_detail">
                <div className="gallery">
                    <div className="gallery__list">
                        <div className="gallery__thumb">
                            <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
                        </div>
                        {listImg}
                        <div className="gallery__thumb">
                            <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
                        </div>
                    </div>
                    <div className="gallery__preview"><img src={"/images/" + this.state.image} alt={this.state.image} /></div>
                </div>
                <ContentText></ContentText>
            </div>
        )
    };
}

const mapStateToProps = state => {
    return {
        Product: state.productDetail.product
    }
}

export default connect(mapStateToProps, null)(Content);
