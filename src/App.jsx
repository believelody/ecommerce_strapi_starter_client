import React, { useEffect } from 'react'
import { Pane } from 'evergreen-ui'
import Mobile from './components/mobile/Mobile'
import Desktop from './components/desktop/Desktop'
import Modal from './components/modal/Modal'
import Loading from './components/loading/Loading'
import { useAppHooks } from './context'
import { IMPORT_CART_FROM_LOCALSTORAGE } from './reducers/cartReducer'
import {getCart} from './utils/cart.utils'
import isMobile from './utils/isMobile.utils'
import 'react-animated-slider/build/horizontal.css'
import "react-image-gallery/styles/css/image-gallery.css"

const App = () => {
  const { useCart } = useAppHooks()
  const [{cart}, dispatchCart] = useCart

  useEffect(() => {
    if (getCart()) {
      dispatchCart({ type: IMPORT_CART_FROM_LOCALSTORAGE, payload: {cart: getCart()} })
    }
  }, [getCart])

  return (
    <Pane height='98vh'>
      {isMobile() ? <Mobile /> : <Desktop />}
      <Modal />
    </Pane>
  )
}

export default App;
