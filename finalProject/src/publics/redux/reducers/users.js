const initialState = {
    data: {},
    isLoading: false,
}

export default users = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_USER_PENDING':
            return {
                ...state,
                isLoading: true
            }

        case 'LOGIN_USER_REJECTED':
            return {
                ...state,
                isLoading: false
            }

        case 'LOGIN_USER_FULFILLED':
            // console.warn(JSON.stringify(action.payload.data))
            return {
                ...state,
                isLoading: false,
                data: action.payload.data
            }

        default:
            return state;
    }
}