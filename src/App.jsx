import React, { useEffect } from 'react'
import "react-image-gallery/styles/css/image-gallery.css"
import 'react-animated-slider/build/horizontal.css'
import { Pane } from 'evergreen-ui'
import Mobile from './components/mobile/Mobile'
import Desktop from './components/desktop/Desktop'
import Modal from './components/modal/Modal'
import { useAppHooks } from './context'
import { SUCCESS_AUTH } from './reducers/authReducer'
import { IMPORT_CART_FROM_LOCALSTORAGE } from './reducers/cartReducer'
import { SET_LOADING, RESET_LOADING } from './reducers/loadingReducer'
import { snipcartClearItems } from './snipcart'
import {getCart} from './utils/cart.utils'
import isMobile from './utils/isMobile.utils'
import { getToken } from './utils/token.utils'
import { getUser } from './utils/user.utils'
import { IS_SAME, UPDATE_ADDRESSES } from './reducers/checkoutReducer'
import api from './api'
import { GET_PROFILE } from './reducers/profileReducer'

const App = () => {
  const { useCart, useAuth, useLoading, useCheckout, useProfile } = useAppHooks()
  const [cartState, dispatchCart] = useCart
  const [{user}, dispatchAuth] = useAuth
  const [loadingState, dispatchLoading] = useLoading
  const [checkoutState, dispatchCheckout] = useCheckout
  const [{ profile }, dispatchProfile] = useProfile
  
  const getProfileByUser = async id => {
    dispatchLoading({ type: SET_LOADING })
    try {
      const { data } = await api.profile.getProfileByUser(id)
      dispatchProfile({
        type: GET_PROFILE,
        payload: { profile: data.profiles[0] }
      })
      dispatchLoading({ type: RESET_LOADING })
    } catch (e) {
      console.log(e)
      dispatchLoading({ type: RESET_LOADING })
    }
  }

  useEffect(() => {
    if (getCart()) {
      dispatchCart({ type: IMPORT_CART_FROM_LOCALSTORAGE, payload: {cart: getCart()} })
    }
  }, [getCart])
          
  useEffect(() => {
    dispatchLoading({ type: SET_LOADING })
    if (getToken() && getUser()) {
      dispatchAuth({ type: SUCCESS_AUTH, payload: {user: getUser()} })
    }
    dispatchLoading({ type: RESET_LOADING })
  }, [getToken, getUser])

  useEffect(() => {
    if (user) {
      getProfileByUser(user._id)
    }
  }, [user])

  useEffect(() => {
    if (profile) {
      dispatchCheckout({
        type: UPDATE_ADDRESSES,
        payload: {
          shippingAddress: profile.shippingaddresses.length > 0 ? profile.shippingaddresses[profile.selectedShippingAddress] : null,
          billingAddress: profile.billingaddresses.length > 0 ? profile.billingaddresses[profile.selectedBillingAddress] : null
        }
      })
      dispatchCheckout({ type: IS_SAME })
    }
  }, [profile])

  return (
    <Pane maxHeight={window.screen.height}>
      {isMobile() ? <Mobile /> : <Desktop />}
      <Modal />
    </Pane>
  )
}

export default App;
