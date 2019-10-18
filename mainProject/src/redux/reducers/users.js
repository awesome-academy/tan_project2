const users= (state = [], action) => {
    switch (action.type) {
        case 'ALL_USERS':
            console.log(action.data)
            return action.data
        default:
            return state
    }
}

export default users
