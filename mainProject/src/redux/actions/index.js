import axios from 'axios';

function getNewProduct() {
    return axios.get('http://localhost:3000/products?new=true');
}

function getHotProduct() {
    return axios.get('http://localhost:3000/products?_sort=view&_order=desc&_limit=8');
}

export const loadDataHome = (data) => ({
    type: 'STORE_PRODUCTS',
    data: data
})

export const loadingPage = (data) => ({
    type: 'LOADING',
    data: data
})

export const fetchDataHomeAsync = () => {
    return (dispatch) => {
        dispatch(loadingPage(true));
        axios.all([getNewProduct(), getHotProduct()])
            .then(axios.spread(function (newP, hotP) {
                dispatch(loadDataHome({newP: newP.data, hotP: hotP.data}));
                dispatch(loadingPage(false));
            }))
            .catch((err) => console.log(err))
    };
}