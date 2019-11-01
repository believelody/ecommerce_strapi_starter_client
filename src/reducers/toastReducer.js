export const SET_TOAST = 'SET_TOAST'
export const RESET_TOAST = 'RESET_TOAST'

export const initToastState = {
    msg: null,
    isActivated: false,
    duration: 3500
}

export const toastReducer = (state, { type, payload }) => {
    switch (type) {
        case SET_TOAST:
            return {
                ...state,
                msg: payload.msg,
                isActivated: true
            }

        case RESET_TOAST:
            return {
                ...state,
                msg: null,
                isActivated: false
            }

        default:
            return state
    }
}
