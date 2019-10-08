const productList = (state = {}, action) => {
    switch (action.type) {
        case 'LIST_PRODUCTS':
            return {List: action.data.List, total: action.data.total, currentPage: action.data.currentPage}
        default:
            return state
    }
}

export default productList
