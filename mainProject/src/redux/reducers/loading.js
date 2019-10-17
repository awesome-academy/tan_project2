const loading = (state = false, action) => {
    switch (action.type) {
        case 'LOADING':
            return action.data
        default:
            return state
    }
}

export default loading
