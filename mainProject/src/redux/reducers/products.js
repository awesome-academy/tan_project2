const products = (state = {}, action) => {
    switch (action.type) {
        case 'STORE_PRODUCTS':
            return {newProduct: action.data.newP, hotProduct: action.data.hotP}
        default:
            return state
    }
}

export default products