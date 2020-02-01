export const GET_PROFILE = 'GET_PROFILE'
export const UPDATE_PROFILE = 'UPDATE_PROFILE'
export const ERROR_PROFILE = 'ERROR_PROFILE'
export const RESET_PROFILE_ERRORS = 'RESET_PROFILE_ERRORS'
export const DELETE_PROFILE = 'DELETE_PROFILE'

export const initProfileState = {
  profile: null,
  errors: null
}

export const profileReducer = (state, { type, payload }) => {
    switch (type) {
        case GET_PROFILE:
            return {
                ...state,
                profile: payload.profile,
            }

        case UPDATE_PROFILE:
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

        case RESET_PROFILE_ERRORS:
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
