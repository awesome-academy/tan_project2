const filterOrder = (state = "", action) => {
    switch (action.type) {
        case 'FILTER_ORDER':
            return action.data
        default:
            return state
    }
}

export default filterOrder;
