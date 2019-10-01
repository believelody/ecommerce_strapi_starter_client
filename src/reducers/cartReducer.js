export const IMPORT_CART_FROM_LOCALSTORAGE = 'IMPORT_CART_FROM_LOCALSTORAGE'
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY'
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY'
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY'
export const RESET_CART = 'RESET_CART'

export const QUANTITY_MAX = 21

export const initCartState = {
    cart: [],
    total: 0
}

export const cartReducer = (state, { type, payload }) => {
    switch (type) {
        case IMPORT_CART_FROM_LOCALSTORAGE:
            return {
                ...state,
                cart: payload.cart,
                total: payload.cart.reduce((acc, item) => acc + item.quantity * item.product.price, 0)
            }

        case ADD_TO_CART:
            return {
                ...state,
                cart: [payload.item, ...state.cart],
                total: state.total + payload.item.product.price
            }

        case RESET_CART:
            return {
                cart: [],
                total: 0
            }

        case REMOVE_FROM_CART:
            let selectedItem = state.cart.find(item => item.product._id === payload._id)

            return {
                ...state,
                // cart: state.cart.filter(item => item.product._id !== selectedItem.product._id),
                total: state.total - selectedItem.product.price * selectedItem.quantity
            }

        case INCREMENT_QUANTITY:
            let itemToIncrement = state.cart[payload.index]
            itemToIncrement['quantity'] += 1

            return {
                ...state,
                total: state.total + itemToIncrement.product.price
            }

        case DECREMENT_QUANTITY:
            let itemToDecrement = state.cart[payload.index]
            itemToDecrement['quantity'] -= 1

            return {
                ...state,
                total: state.total - itemToDecrement.product.price
            }

        case UPDATE_QUANTITY:
            let itemToUpdate = state.cart[payload.index]
            console.log(payload.quantity)
            console.log(itemToUpdate['quantity'])
            itemToUpdate['quantity'] += payload.quantity
            console.log(itemToUpdate.quantity)
            return {
                ...state,
                total: state.total + itemToUpdate.product.price * payload.quantity
            }

        default:
            return state
    }
}
