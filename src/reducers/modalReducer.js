export const OPEN_MODAL = 'OPEN_MODAL'
export const OPEN_MODAL_CONFIRM = 'OPEN_MODAL_CONFIRM'
export const CLOSE_MODAL = 'CLOSE_MODAL'

export const initModalState = {
    msg: null,
    title: null,
    isOpened: false,
    children: null
}

export const modalReducer = (state, { type, payload }) => {
    switch (type) {
        case OPEN_MODAL:
            return {
                ...state,
                msg: payload.msg,
                isOpened: true
            }

        case OPEN_MODAL_CONFIRM:
            return {
                ...state,
                msg: null,
                isOpened: true,
                children: payload.children,
                title: payload.title
            }

        case CLOSE_MODAL:
            return {
                ...state,
                msg: null,
                isOpened: false,
                title: null,
                children: null
            }

        default:
            return state
    }
}
