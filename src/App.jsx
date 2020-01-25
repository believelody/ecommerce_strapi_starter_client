import React, { useEffect } from 'react'
import { Pane } from 'evergreen-ui'
import Mobile from './components/mobile/Mobile'
import Desktop from './components/desktop/Desktop'
import Modal from './components/modal/Modal'
import Loading from './components/loading/Loading'
import { useAppHooks } from './context'
import { SUCCESS_AUTH } from './reducers/authReducer'
import { IMPORT_CART_FROM_LOCALSTORAGE } from './reducers/cartReducer'
import { SET_LOADING, RESET_LOADING } from './reducers/loadingReducer'
import { snipcartClearItems } from './snipcart'
import {getCart} from './utils/cart.utils'
import isMobile from './utils/isMobile.utils'
import { getToken } from './utils/token.utils'
import { getUser } from './utils/user.utils'
import 'react-animated-slider/build/horizontal.css'
import "react-image-gallery/styles/css/image-gallery.css"
import addressesMock from './mock/addresses.mock'
import { SHIPPING_ADDRESS, IS_SAME } from './reducers/checkoutReducer'

const App = () => {
  const { useCart, useAuth, useLoading, useCheckout } = useAppHooks()
  const [{cart}, dispatchCart] = useCart
  const [{isConnected}, dispatchAuth] = useAuth
  const [loadingState, dispatchLoading] = useLoading
  const [checkoutState, dispatchCheckout] = useCheckout

  useEffect(() => {
    if (getCart()) {
      dispatchCart({ type: IMPORT_CART_FROM_LOCALSTORAGE, payload: {cart: getCart()} })
    }
  }, [getCart])

  // useEffect(() => {
  //   const removeItemsFromCart = async () => {
  //     try {
  //       await snipcartClearItems()
  //     }
  //     catch (e) {
  //       console.log(e)
  //     }
  //   }
  // }, [])

  useEffect(() => {
    dispatchLoading({ type: SET_LOADING })
    if (getToken() && getUser()) {
      dispatchAuth({ type: SUCCESS_AUTH, payload: {user: getUser()} })
    }
    dispatchLoading({ type: RESET_LOADING })
  }, [getToken, getUser])

  useEffect(() => {
    dispatchCheckout({
      type: SHIPPING_ADDRESS,
      payload: {
        shippingAddress: addressesMock[0]
      }
    })
    dispatchCheckout({ type: IS_SAME })
  }, [])

  return (
    <Pane maxHeight={window.screen.height}>
      {isMobile() ? <Mobile /> : <Desktop />}
      <Modal />
    </Pane>
  )
}

export default App;
