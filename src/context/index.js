import React, { createContext, useContext, useReducer } from 'react'
import { createBrowserHistory } from "history"

const history = createBrowserHistory({
  forceRefresh: true
})

export const AppContext = createContext()

export AppProvider = ({ children }) => (
  <AppContext.Provider
    value={{
      history
    }}
  >
    { children }
  </AppContext.Provider>
)
