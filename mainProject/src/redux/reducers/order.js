const orders = (state = [], action) => {
    switch (action.type) {
        case 'ALL_ORDER':
            return action.data
        default:
            return state
    }
}

export default orders
