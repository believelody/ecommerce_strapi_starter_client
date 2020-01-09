import React from 'react'
import { Link } from 'react-router-dom'
import { Pane, Text, Button, Table, Icon } from 'evergreen-ui'
import CartList from './CartList'
import Label from '../label/Label'
import { useAppHooks } from '../../context'
import { RESET_CART } from '../../reducers/cartReducer'
import { OPEN_MODAL } from '../../reducers/modalReducer'
import { snipcartCountItems, snipcartClearItems, snipcartShowModal, snipcartAddItem, snipcartBillingAddress, snipcartShippingAddress, snipcartLogoutUser } from '../../snipcart'
import { deleteCart } from '../../utils/cart.utils'
import { SET_LOADING, RESET_LOADING } from '../../reducers/loadingReducer'

const CartSidenav = () => {
  const { useAuth, useCart, useModal, useLoading } = useAppHooks()
  const [{isConnected}, dispatchAuth] = useAuth
  const [{total, cart}, dispatchCart] = useCart
  const [modalState, dispatchModal] = useModal
  const [loadingState, dispatchLoading] = useLoading

  const emptyCart = async e => {
    try {
      dispatchLoading({ type: SET_LOADING, payload: {msg: "please wait..."} })
      await snipcartClearItems()
      await snipcartShippingAddress({shippingSameAsBilling: false})
      await snipcartBillingAddress({shippingSameAsBilling: false})
      await snipcartLogoutUser()
      dispatchCart({ type: RESET_CART })
      deleteCart()
      dispatchLoading({ type: RESET_LOADING })
    }
    catch (e) {
      console.log(e)
    }
  }

  const openModal = e => dispatchModal({
    type: OPEN_MODAL,
    payload: {
      title: 'Are you sure ?',
      labelConfirm: 'Yes',
      msg: 'Please confirm your action. Once done, all items in your cart will be removed',
      status: 'danger',
      action: emptyCart
    }
  })

  const openSnipcart = async e => {
    try {
      if (isConnected) {
        let countItems = await snipcartCountItems()
        if (countItems === 0) {
          await snipcartAddItem(cart)
        }
        await snipcartShowModal()
      }
    }
    catch(e) {
      console.log(e)
    }
  }

  return (
    <Pane>
      <Pane
        paddingY={10}
        display='flex'
        background='blueTint'
        alignItems='center'
        justifyContent='center'
        onClick={openSnipcart}
        cursor='pointer'
      >
        <Icon icon='caret-right' color='success' />
        {
          !isConnected ?
          <Link to='/login'>
            <Text
              color='green'
              size={500}
            >
              Checkout
            </Text>
          </Link> :
          'Checkout'
        }
        <Icon icon='caret-left' color='success' />
      </Pane>
      <CartList />
      <Label name={`Total: ${total} $`} />
      <Pane>
        <Button intent='danger' onClick={openModal}>
          Reset cart
        </Button>
      </Pane>
    </Pane>
  )
}

export default CartSidenav
