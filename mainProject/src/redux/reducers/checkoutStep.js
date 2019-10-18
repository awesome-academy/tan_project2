const checkoutStep = (state = 1, action) => {
    switch(action.type){
        case "CHECKOUT_STEP":
            return action.data
        default:
            return state
    }
}

export default checkoutStep;
