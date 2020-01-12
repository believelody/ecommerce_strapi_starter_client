export const PAYMENT_SUCCEED = 'PAYMENT_SUCCEED'
export const PAYMENT_FAILED = 'PAYMENT_FAILED'
export const CANCEL_PAYMENT = 'CANCEL_PAYMENT'
export const SHIPPING_ADDRESS = 'SHIPPING_ADDRESS'
export const BILLING_ADDRESS = 'BILLING_ADDRESS'
export const IS_SAME = 'IS_SAME'
export const IS_NOT_SAME = 'IS_NOT_SAME'
export const RESET_ERRORS = 'RESET_ERRORS'

export const initCheckoutState = {
    isPaymentSucceed: false,
    shippingAddress: null,
    billingAddress: null,
    isSame: false,
    shippingMethod: null,
    errors: null
}

export const checkoutReducer = (state, { type, payload }) => {
    switch (type) {
        case RESET_ERRORS:
            return {
                ...state,
                errors: null
            }

        case SHIPPING_ADDRESS:
          return {
            ...state,
            shippingAddress: payload.shippingAddress
          }

        case BILLING_ADDRESS:
          return {
            ...state,
            billingAddress: payload.billingAddress
          }

        case IS_SAME:
          return {
            ...state,
            isSame: true,
            billingAddress: state.shippingAddress
          }

        case IS_NOT_SAME:
          return {
            ...state,
            isSame: false,
            billingAddress: null
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
