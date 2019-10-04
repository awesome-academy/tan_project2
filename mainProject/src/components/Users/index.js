import React from 'react';
import Home from './page/home';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchDataAsync } from './../../redux/actions';

class Users extends React.Component {
    componentDidMount() {
        this.props.fetchDataAsync();
    }

    render() {
        return (
            <>
                <Router>
                    <Route exact path="/" component={Home} ></Route>
                </Router>
            </>
        )
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDataAsync: () => dispatch(fetchDataAsync())
    }
}

export default connect(null, mapDispatchToProps)(Users);

