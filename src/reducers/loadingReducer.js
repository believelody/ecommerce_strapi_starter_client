export const SET_LOADING = 'SET_LOADING'
export const RESET_LOADING = 'RESET_LOADING'

export const initLoadingState = {
    loading: false,
    msg: null
}

export const loadingReducer = (state, {type, payload}) => {
    switch(type) {
        case SET_LOADING:
            return {
                loading: true,
                msg: payload ? payload.msg : null
            }

        case RESET_LOADING:
            return {
                loading: false,
                msg: null
            }

        default:
            return state
    }
}
