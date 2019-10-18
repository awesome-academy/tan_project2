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

export const fetchDataHomeAsync = () => {
    return (dispatch) => {
        dispatch(loadingPage(true));
        axios.all([getNewProduct(), getHotProduct()])
            .then(axios.spread(function (newP, hotP) {
                dispatch(loadDataHome({ newP: newP.data, hotP: hotP.data }));
                dispatch(loadingPage(false));
            }))
            .catch((err) => console.log(err))
    };
}
//data Home

export const loadDataProductsPage = (data) => ({
    type: 'LIST_PRODUCTS',
    data: data
})

export const getListProduct = (num) => {
    return (dispatch) => {
        dispatch(loadingPage(true));
        axios.get(`http://localhost:3000/products?_limit=9&_page=${num}`)
            .then(function (res) {
                dispatch(loadDataProductsPage({ List: res.data, total: res.headers["x-total-count"], currentPage: num }))
            })
            .catch((err) => console.log(err))
    }
}
//data product page

export const sortProduct = (data) => ({
    type: 'SORT_PRODUCTS',
    data: data
})

//sort product

function getProduct(id) {
    return axios.get(`http://localhost:3000/products/${id}`);
}

function getSameProduct(id) {
    return axios.get(`http://localhost:3000/products?idCategory=${id}&_limit=8`);
}

export const getProductDetail = (id, idCategory) => {
    return (dispatch) => {
        dispatch(loadingPage(true));
        axios.all([getProduct(id), getSameProduct(idCategory)])
            .then(axios.spread(function (Pr, Same) {
                dispatch(productDetail({ product: Pr.data, productSame: Same.data }));
                dispatch(loadingPage(false));
            }))
            .catch((err) => console.log(err))
    }
}

export const productDetail = (data) => ({
    type: 'PRODUCT_DETAIL',
    data: data
})
// product detail

export const setProfile = (data) => ({
    type: 'PROFILE',
    data: data
})

// profile

export const loadingPage = (data) => ({
    type: 'LOADING',
    data: data
})
//loadingPage

export const setCart = (data) => ({
    type: 'CART',
    data: data
})
//set Cart

export const setStepCheckout = (data) => ({
    type: 'CHECKOUT_STEP',
    data: data
})
// step checkout

export const getUsersAsync = () => {
    return (dispatch) => {
        dispatch(loadingPage(true));
        axios.get(`http://localhost:3000/users`)
            .then(function (res) {
                dispatch(getUsers(res.data));
                dispatch(loadingPage(false));
            })
            .catch((err) => console.log(err))
    }
}

export const getUsers = (data) => ({
    type: "ALL_USERS",
    data: data
})
// Get Users

export const deleteUserAsync = (id,arr,index) => {
    return (dispatch) => {
        dispatch(loadingPage(true));
        axios.delete(`http://localhost:3000/users/${id}`)
            .then(() => {
                console.log(arr)
                arr.splice(index,1);
                console.log(arr)
                dispatch(getUsers(arr));
                dispatch(loadingPage(false));
            })
    }
}
// delete User

export const getOrder = (data) => ({
    type: "ALL_ORDER",
    data: data
})

export const getOrderAsync = () => {
    return (dispatch) => {
        dispatch(loadingPage(true));
        axios.get(`http://localhost:3000/orders/`)
        .then((res) => {
            dispatch(loadingPage(false));
            dispatch(getOrder(res.data))
        })
    }
}
// get orders

export const filterOrder = (data) => ({
    type: "FILTER_ORDER",
    data: data
})
