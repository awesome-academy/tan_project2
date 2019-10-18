const productDetail = (state = {}, action) => {
    switch (action.type) {
        case 'PRODUCT_DETAIL':
            return { product: action.data.product, productSame: action.data.productSame }
        default:
            return state
    }
}

export default productDetail
