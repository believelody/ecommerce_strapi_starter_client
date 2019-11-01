import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Pane, Text, Button, Table, Icon } from 'evergreen-ui'
import CartList from './CartList'
import LoginForm from '../forms/LoginForm'
import Label from '../label/Label'
import { useAppHooks } from '../../context'
import { IMPORT_CART_FROM_LOCALSTORAGE, RESET_CART } from '../../reducers/cartReducer'
import { OPEN_MODAL, OPEN_MODAL_CHILDREN } from '../../reducers/modalReducer'
import { snipcartCountItems, snipcartClearItems, snipcartShowModal, snipcartAddItem, snipcartBillingAddress, snipcartShippingAddress, snipcartLogoutUser } from '../../snipcart'
import { deleteCart, getCart } from '../../utils/cart.utils'

const CartSidenav = () => {
  const { useAuth, useCart, useModal, history } = useAppHooks()
  const [{isConnected}, dispatchAuth] = useAuth
  const [{total, cart}, dispatchCart] = useCart
  const [modalState, dispatchModal] = useModal

  const emptyCart = async e => {
    try {
      await snipcartClearItems()
      await snipcartShippingAddress({shippingSameAsBilling: false})
      await snipcartBillingAddress({shippingSameAsBilling: false})
      await snipcartLogoutUser()
      dispatchCart({ type: RESET_CART })
      deleteCart()
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

  // const openModalWithChildren = e => dispatchModal({
  //   type: OPEN_MODAL_CHILDREN,
  //   payload: {
  //     children: <LoginForm />
  //   }
  // })

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

  // useEffect(() => {
  //   const fetchSnipcart = async () => {
  //     try {
  //       console.log(await snipcartGet())
  //       console.log(await snipcartClearItems())
  //     } catch (e) {
  //       console.log(e)
  //     }
  //   }
  //
  //   fetchSnipcart()
  // }, [])

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
