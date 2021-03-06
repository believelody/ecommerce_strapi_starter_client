export const OPEN_MODAL = 'OPEN_MODAL'
export const OPEN_MODAL_CHILDREN = 'OPEN_MODAL_CHILDREN'
export const CLOSE_MODAL = 'CLOSE_MODAL'

export const initModalState = {
    msg: null,
    title: null,
    isOpened: false,
    children: null,
    status: 'none',
    action: null,
    labelConfirm: null,
    noClose: false
}

export const modalReducer = (state, { type, payload }) => {
    switch (type) {
        case OPEN_MODAL:
            return {
                ...state,
                msg: payload.msg,
                isOpened: true,
                title: payload.title,
                status: payload.status,
                action: payload.action,
                labelConfirm: payload.labelConfirm,
                noClose: payload.noClose || false
            }

        case OPEN_MODAL_CHILDREN:
          return {
            ...state,
            isOpened: true,
            children: payload.children,
            title: payload.title || '',
            noClose: payload.noClose || false
          }

        case CLOSE_MODAL:
            return {
                ...state,
                msg: null,
                isOpened: false,
                title: null,
                children: null,
                status: 'none',
                action: null,
                labelConfirm: null,
                noClose: false,
            }

        default:
            return state
    }
}
