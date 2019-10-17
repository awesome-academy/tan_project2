import { combineReducers } from 'redux';
import role from './role';
import products from './products';
import loading from './loading';
import productList from './productList';
import productSort from './sortProduct';

export default combineReducers({
    role,
    products,
    loading,
    productList,
    productSort
})
