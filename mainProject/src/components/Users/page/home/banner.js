import React from 'react';
import BannerItem from './bannerItem';

class Banner extends React.Component {

    render() {
        const lists = ["Layer 19.jpg","Layer 20.jpg", "Layer 22.jpg", "Layer 27.jpg", "Layer 25.jpg", "Layer 23.jpg", "Layer 29.jpg", "Layer 31.jpg"];
        const listItem = lists.map( list => <BannerItem img={list} key={list}></BannerItem>)
        return (
            <section className="banner">
                {listItem}
            </section>
        )
    };
}

export default Banner;