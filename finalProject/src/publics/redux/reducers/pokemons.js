const initialState = {
    data: [],
    isLoading: false,
    detail: {}
}

export default pokemons = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_POKEMONS_PENDING':
            return {
                ...state,
                isLoading: true
            }

        case 'GET_POKEMONS_REJECTED':
            return {
                ...state,
                isLoading: false
            }

        case 'GET_POKEMONS_FULFILLED':
            // console.warn(JSON.stringify(action.payload.data.id))
            return {
                ...state,
                isLoading: false,
                data: action.payload.data
            }
        case 'GET_POKEMON_DETAIL_PENDING':
            return {
                ...state,
                isLoading: true
            }

        case 'GET_POKEMON_DETAIL_REJECTED':
            return {
                ...state,
                isLoading: false
            }

        case 'GET_POKEMON_DETAIL_FULFILLED':
            // console.warn(JSON.stringify(action.payload))
            return {
                ...state,
                isLoading: false,
                detail: action.payload
            }
        case 'CREATE_POKEMON_PENDING':
            return {
                ...state,
                isLoading: true
            }

        case 'CREATE_POKEMON_REJECTED':
            return {
                ...state,
                isLoading: false
            }

        case 'CREATE_POKEMON_FULFILLED':
            // console.warn(JSON.stringify(action.payload.detail))
            return {
                ...state,
                isLoading: false,
                data: action.payload.data
            }
        case 'UPDATE_POKEMON_PENDING':
            return {
                ...state,
                isLoading: true
            }

        case 'UPDATE_POKEMON_REJECTED':
            return {
                ...state,
                isLoading: false
            }

        case 'UPDATE_POKEMON_FULFILLED':
            // console.warn(JSON.stringify(action.payload.detail))
            return {
                ...state,
                isLoading: false,
                detail: action.payload
            }

        case 'DELETE_POKEMON_PENDING':
            return {
                ...state,
                isLoading: true
            }

        case 'DELETE_POKEMONS_REJECTED':
            return {
                ...state,
                isLoading: false
            }

        case 'DELETE_POKEMONS_FULFILLED':

            // product = state.data.filter(item => item.id !== action.payload.data.data.id)
            // product.quantity = action.payload.data.data.quantity
            // product.price_order = action.payload.data.data.price_order
            // alert(JSON.stringify(action.payload.data.data.id))

            return {
                ...state,
                isLoading: false,
                // data: action.payload.data
            }


        default:
            return state;
    }
}