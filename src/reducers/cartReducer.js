export const IMPORT_CART_FROM_LOCALSTORAGE = 'IMPORT_CART_FROM_LOCALSTORAGE'
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY'
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY'
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY'
export const UPDATE_COLOR = 'UPDATE_COLOR'
export const UPDATE_SIZE = 'UPDATE_SIZE'
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
                total: state.total + payload.item.product.price * payload.item.quantity
            }

        case RESET_CART:
            return {
                cart: [],
                total: 0
            }

        case REMOVE_FROM_CART:
            let selectedItem = state.cart[payload.index]

            return {
                ...state,
                total: state.total - selectedItem.product.price * selectedItem.quantity,
                cart: state.cart.filter((item, i) => i !== payload.index)
            }

        case INCREMENT_QUANTITY:
            let itemToIncrement = state.cart[payload.index]
            itemToIncrement['quantity'] += 1
            console.log(state.total + itemToIncrement.product.price)

            return {
                ...state,
                total: state.total + itemToIncrement.product.price
            }

        case DECREMENT_QUANTITY:
            let itemToDecrement = state.cart[payload.index]
            itemToDecrement['quantity'] -= 1
            console.log(state.total - itemToDecrement.product.price)

            return {
                ...state,
                total: state.total - itemToDecrement.product.price
            }

        case UPDATE_QUANTITY:
            let itemToUpdate = state.cart[payload.index]
            itemToUpdate['quantity'] = payload.quantity
            return {
                ...state,
                total: state.total + itemToUpdate.product.price * payload.quantity
            }

        case UPDATE_COLOR:
            let itemColor = state.cart[payload.index]
            itemColor['color'] = payload.color

            return { ...state }

        case UPDATE_SIZE:
            let itemSize = state.cart[payload.index]
            itemSize['size'] = payload.size

            return { ...state }

        default:
            return state
    }
}
