export const OPEN_SIDE_SHEET = 'OPEN_SIDE_SHEET'
export const OPEN_SIDE_SHEET_CONFIRM = 'OPEN_SIDE_SHEET_CONFIRM'
export const CLOSE_SIDE_SHEET = 'CLOSE_SIDE_SHEET'

export const initSideSheetState = {
    title: null,
    description: null,
    isShowed: false,
    content: null,
    action: null,
}

export const sideSheetReducer = (state, { type, payload }) => {
    switch (type) {
        case OPEN_SIDE_SHEET:
            return {
                ...state,
                isShowed: true,
                content: payload.content,
                title: payload.title,
                description: payload.description
            }

        case OPEN_SIDE_SHEET_CONFIRM:
            return {
                ...state,
                isShowed: true,
                content: payload.content,
                title: payload.title,
            }


        case CLOSE_SIDE_SHEET:
            return {
                ...state,
                isShowed: false,
                title: null,
                content: null,
                action: null,
                description: null
            }

        default:
            return state
    }
}
