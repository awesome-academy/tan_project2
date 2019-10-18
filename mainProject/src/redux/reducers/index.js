import { combineReducers } from 'redux';
import role from './role';
import products from './products';
import loading from './loading';
import productList from './productList';
import productSort from './sortProduct';
import productDetail from './productDetail';
import profile from './profile';
import cart from './cart';
import checkoutStep from './checkoutStep';
import users from './users';
import orders from './order';
import filterOrder from './filterOrder';

export default combineReducers({
    role,
    products,
    loading,
    productList,
    productSort,
    productDetail,
    profile,
    cart,
    checkoutStep,
    users,
    orders,
    filterOrder
})
