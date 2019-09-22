export const PAYMENT_SUCCEED = 'PAYMENT_SUCCEED'
export const PAYMENT_FAILED = 'PAYMENT_FAILED'
export const CANCEL_PAYMENT = 'CANCEL_PAYMENT'
export const RESET_ERRORS = 'RESET_ERRORS'

export const initCheckoutState = {
    isPaymentSucceed: false,
    errors: null
}

export const checkoutReducer = (state, { type, payload }) => {
    switch (type) {
        case RESET_ERRORS:
            return {
                ...state,
                errors: null
            }

        case PAYMENT_FAILED:
            let key, value
            Object.entries(payload).forEach(([k, v]) => {
                key = k
                value = v
            })

            return {
                ...state,
                isPaymentSucceed: false,
                errors: { ...state.errors, [key]: value }
            }

        case PAYMENT_SUCCEED:
            return {
                ...state,
                isPaymentSucceed: true,
                errors: null
            }

        case CANCEL_PAYMENT:
            return {
                ...state,
                isPaymentSucceed: false,
                errors: null
            }

        default:
            return state
    }
}
