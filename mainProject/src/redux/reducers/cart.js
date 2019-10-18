const Cart = (state = [], action) => {
    switch (action.type) {
        case 'CART':
            return action.data
        default:
            return state
    }
}

export default Cart
