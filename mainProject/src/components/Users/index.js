import React from 'react';
import Home from './page/home';
import Products from './page/products';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './common/header';
import Footer from './common/footer';

class Users extends React.Component {

    render() {
        return (
            <>
                <Router>
                    <Header></Header>
                    <Switch>
                        <Route exact path="/" component={Home} ></Route>
                        <Route path="/products" component={Products} ></Route>
                    </Switch>
                    <Footer></Footer>
                </Router>
            </>
        )
    };
}

export default Users;

