import React from 'react';

class BannerItem extends React.Component {

    render() {
        return (
            <div className="banner__item">
                <div className="banner__hover">
                    <p>1987</p>
                    <p>RƯỢU</p>
                </div><img src={this.props.img} alt="Layer 19" />
            </div>
        )
    };
}

export default BannerItem;
