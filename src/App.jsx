import React, { useEffect } from 'react'
import Mobile from './components/mobile/Mobile'
import Desktop from './components/desktop/Desktop'
import Modal from './components/modal/Modal'
import Loading from './components/loading/Loading'
import { useAppHooks } from './context'
import { IMPORT_CART_FROM_LOCALSTORAGE } from './reducers/cartReducer'
import {getCart} from './utils/cart.utils'
import isMobile from './utils/isMobile.utils'
import 'react-animated-slider/build/horizontal.css'

const App = () => {
  const { useCart } = useAppHooks()
  const [{cart}, dispatchCart] = useCart

  useEffect(() => {
    if (getCart()) {
      dispatchCart({ type: IMPORT_CART_FROM_LOCALSTORAGE, payload: {cart: getCart()} })
    }
  }, [getCart])

  return (
    <React.Fragment>
      {isMobile() ? <Mobile /> : <Desktop />}
      <Modal />
    </React.Fragment>
  )
}

export default App;
