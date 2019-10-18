import React from 'react';
import Home from './page/home';
import Products from './page/products';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './common/header';
import Footer from './common/footer';
import { connect } from 'react-redux';
import ProductDetail from './page/detailProduct';
import Register from './page/register';
import Login from './page/login';
import Profile from './page/profile';
import Cart from './page/cart';
import { setCart, setProfile } from '../../redux/actions';
import Checkout from './page/checkout';
import Success from './page/checkout/success';

class Users extends React.Component {

    componentDidMount() {
        let cart = JSON.parse(localStorage.getItem("myCart"));
        let user = JSON.parse(sessionStorage.getItem("user"))
        if (cart) {
            this.props.SetCart(cart);
        }
        else {
            this.props.SetCart([]);
        }
        if (user) {
            this.props.SetProfile(user)
        }
        else {
            this.props.SetProfile({})
        }
    }

    render() {
        return (
            <>
                <Router>
                    <Header></Header>
                    <Switch>
                        <Route exact path="/" component={Home} ></Route>
                        <Route path="/products" component={Products} ></Route>
                        <Route path="/productDetail/:idP" component={ProductDetail} ></Route>
                        <Route path="/register" component={Register} ></Route>
                        <Route path="/login" component={Login} ></Route>
                        <Route path='/profile' component={Profile}></Route>
                        <Route path="/cart" component={Cart}></Route>
                        <Route path="/checkout" component={Checkout}></Route>
                        <Route path="/success" component={Success}></Route>
                    </Switch>
                    <Footer></Footer>
                </Router>
            </>
        )
    };
}

const mapDispatchToProps = dispatch => {
    return {
        SetCart: (data) => dispatch(setCart(data)),
        SetProfile: (data) => dispatch(setProfile(data))
    }
}

export default connect(null, mapDispatchToProps)(Users);

