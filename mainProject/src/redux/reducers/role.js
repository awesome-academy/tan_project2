const role = (state = "USERS", action) => {
    switch (action.type) {
        case 'HANDLE_ROLE':
            return action.data
        default:
            return state
    }
}

export default role