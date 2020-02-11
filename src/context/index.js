import React, { createContext, useContext, useReducer } from 'react'
import { createBrowserHistory } from "history"
import { loadingReducer, initLoadingState } from '../reducers/loadingReducer'
import { cartReducer, initCartState } from '../reducers/cartReducer'
import { authReducer, initAuthState } from '../reducers/authReducer'
import { toastReducer, initToastState } from '../reducers/toastReducer'
import { modalReducer, initModalState } from '../reducers/modalReducer'
import { checkoutReducer, initCheckoutState } from '../reducers/checkoutReducer'
import { sideSheetReducer, initSideSheetState } from '../reducers/sideSheetReducer'
import { profileReducer, initProfileState } from '../reducers/profileReducer'
import { dialogReducer, initDialogState } from '../reducers/dialogReducer'

const history = createBrowserHistory()

export const AppContext = createContext()

export const AppProvider = ({ children }) => (
  <AppContext.Provider
    value={{
      useLoading: useReducer(loadingReducer, initLoadingState),
      useCart: useReducer(cartReducer, initCartState),
      useAuth: useReducer(authReducer, initAuthState),
      useToast: useReducer(toastReducer, initToastState),
      useModal: useReducer(modalReducer, initModalState),
      useCheckout: useReducer(checkoutReducer, initCheckoutState),
      useSideSheet: useReducer(sideSheetReducer, initSideSheetState),
      useProfile: useReducer(profileReducer, initProfileState),
      useDialog: useReducer(dialogReducer, initDialogState),
      history
    }}
  >
    { children }
  </AppContext.Provider>
)

export const useAppHooks = () => useContext(AppContext)
