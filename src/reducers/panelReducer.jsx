export const MINIMIZED = 'MINIMIZED'
export const MAXIMIZED = 'MAXIMIZED'

export const initPanelState = {
    isMinimized: false,
    main: '75%',
    sidenav: '25%'
}

export const panelReducer = (state, {type, payload}) => {
    switch(type) {
        case MINIMIZED:
            return {
              isMinimized: true,
              main: '95%',
              sidenav: '5%'
            }

        case MAXIMIZED:
            return initLoadingState

        default:
            return state
    }
}
