const products = (state = [], action) => {
    switch (action.type) {
        case 'HANDLE_PRODUCTS':
            return action.data
        default:
            return state
    }
}

export default products