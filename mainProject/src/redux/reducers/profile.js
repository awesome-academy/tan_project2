const profile = (state = {}, action) => {
    switch (action.type) {
        case 'PROFILE':
            return action.data
        default:
            return state
    }
}

export default profile
