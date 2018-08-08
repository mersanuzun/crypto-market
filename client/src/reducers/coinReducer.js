import * as types from "../actions/types.js";

const initialState = {
    isFetching: false,
    error: null,
    data: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.FETCHING_COIN:
            return {
                ...state,
                isFetching: true
            }

        case types.ERROR_FETCH_COIN:
            return {
                ...state,
                error: action.data,
                isFetching: false
            }
        case types.FETCHED_COIN:
            return {
                ...state,
                data: action.data,
                error: null,
                isFetching: false
            }
        default:
            return state
    }
}