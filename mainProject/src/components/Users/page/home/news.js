import React from 'react';
import NewsItem from './newsItem';

class News extends React.Component {

    render() {
        return (
            <div className="news">
                <h3 className="title__block">TIN TỨC & BLOG</h3>
                <div className="news__content">
                    <NewsItem></NewsItem>
                    <NewsItem></NewsItem>
                </div>
            </div>
        )
    };
}

export default News;
