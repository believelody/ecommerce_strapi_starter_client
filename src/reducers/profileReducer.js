export const GET_PROFILE = 'GET_PROFILE'
export const ERROR_PROFILE = 'ERROR_PROFILE'
export const RESET_ERROR = 'RESET_ERROR'
export const DELETE_PROFILE = 'DELETE_PROFILE'

export const initAuthState = {
  profile: null,
  errors: null
}

export const authReducer = (state, { type, payload }) => {
    switch (type) {
        case GET_PROFILE:
            return {
                ...state,
                profile: payload.profile,
            }

        case ERROR_PROFILE:
            let key, value
            Object.entries(payload).forEach(([k, v]) => {
                key = k
                value = v
            })
            return {
                ...state,
                user: null,
                errors: { ...state.errors, [key]: value}
            }

        case RESET_ERROR:
            return {
                ...state,
                errors: null
            }

        case DELETE_PROFILE:
            return initAuthState

        default:
            return state
    }
}
