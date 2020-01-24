export const OPEN_DIALOG = 'OPEN_DIALOG'
export const OPEN_DIALOG_CONFIRM = 'OPEN_DIALOG_CONFIRM'
export const CLOSE_DIALOG = 'CLOSE_DIALOG'

export const initDialogState = {
    title: null,
    isShowed: false,
    children: null,
}

export const dialogReducer = (state, { type, payload }) => {
    switch (type) {
        case OPEN_DIALOG:
            return {
                ...state,
                isShowed: true,
                children: payload.children,
                title: payload.title
            }

        case OPEN_DIALOG_CONFIRM:
            return {
                ...state,
                isShowed: true,
                children: payload.children,
                title: payload.title,
            }


        case CLOSE_DIALOG:
            return {
                ...state,
                isShowed: false,
                title: null,
                children: null,
            }

        default:
            return state
    }
}
