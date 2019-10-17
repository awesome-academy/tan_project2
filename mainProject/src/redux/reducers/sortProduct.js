const productSort = (state = "az", action) => {
    switch (action.type) {
        case 'SORT_PRODUCTS':
            return action.data
        default:
            return state
    }
}

export default productSort
