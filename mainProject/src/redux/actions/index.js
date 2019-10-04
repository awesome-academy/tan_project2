import axios from 'axios';

export const loadData = (Products) => ({
    type: 'HANDLE_PRODUCTS',
    data: Products
})

export const loadingPage = (data) => ({
    type: 'LOADING',
    data: data
})

export const fetchDataAsync = () => {
    return (dispatch) => {
        dispatch(loadingPage(true));
        axios({
            method: 'get',
            url: 'http://localhost:3000/products'
        })
        .then((res) => {
            dispatch(loadData(res.data));
            dispatch(loadingPage(false));
        })
        .catch((err) => console.log(err))
    };
}