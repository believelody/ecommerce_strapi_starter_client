export const SUCCESS_AUTH = 'SUCCESS_AUTH'
export const ERROR_AUTH = 'ERROR_AUTH'
export const RESET_ERROR = 'RESET_ERROR'
export const LOG_OUT = 'LOG_OUT'

export const initAuthState = {
    user: null,
    isConnected: false,
    errors: null
}

export const authReducer = (state, { type, payload }) => {
    switch (type) {
        case SUCCESS_AUTH:
            return {
                ...state,
                user: payload.user,
                isConnected: true
            }

        case ERROR_AUTH:
            let key, value
            Object.entries(payload).forEach(([k, v]) => {
                key = k
                value = v
            })
            return {
                ...state,
                errors: { ...state.errors, [key]: value}
            }

        case RESET_ERROR:
            return {
                ...state,
                errors: null
            }

        case LOG_OUT:
            return initAuthState

        default:
            return state
    }
}
