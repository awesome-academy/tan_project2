import { combineReducers } from 'redux';
import role from './role';
import products from './products';
import loading from './loading';

export default combineReducers({
    role,
    products,
    loading
})