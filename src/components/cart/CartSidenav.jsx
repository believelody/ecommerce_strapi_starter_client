import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Pane, Text, Button, Table, Icon } from 'evergreen-ui'
import CartList from './CartList'
import Label from '../label/Label'
import { useAppHooks } from '../../context'
import { IMPORT_CART_FROM_LOCALSTORAGE, RESET_CART } from '../../reducers/cartReducer'
import { OPEN_MODAL } from '../../reducers/modalReducer'
import { deleteCart, getCart } from '../../utils/cart.utils'

const CartSidenav = () => {
  const { useCart, useModal } = useAppHooks()
  const [{total}, dispatchCart] = useCart
  const [modalState, dispatchModal] = useModal

  const emptyCart = e => {
    dispatchCart({ type: RESET_CART })
    deleteCart()
  }

  const openModal = () => dispatchModal({
    type: OPEN_MODAL,
    payload: {
      title: 'Are you sure ?',
      labelConfirm: 'Yes',
      msg: 'Please confirm your action. Once done, all items in your cart will be removed',
      status: 'danger',
      action: emptyCart
    }
  })

  return (
    <Pane>
      <Pane paddingY={10} display='flex' background='blueTint' alignItems='center' justifyContent='center'>
        <Icon icon='caret-right' color='success' />
        <Link to='/checkout'>
          <Text color='green' size={500}>Checkout</Text>
        </Link>
        <Icon icon='caret-left' color='success' />
      </Pane>
      <CartList />
      <Label name={`Total: ${total} $`} />
      <Pane>
        <Button intent='danger' onClick={openModal}>Reset cart</Button>
      </Pane>
    </Pane>
  )
}

export default CartSidenav
