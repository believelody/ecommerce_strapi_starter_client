import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Pane, Text, Button, Icon, Heading, Small } from 'evergreen-ui'
import CartList from './CartList'
import Label from '../label/Label'
import LoginForm from '../forms/LoginForm'
import { useAppHooks } from '../../context'
import { RESET_CART } from '../../reducers/cartReducer'
import { snipcartCountItems, snipcartClearItems, snipcartShowModal, snipcartAddItem, snipcartBillingAddress, snipcartShippingAddress, snipcartLogoutUser } from '../../snipcart'
import { SET_LOADING, RESET_LOADING } from '../../reducers/loadingReducer'
import { OPEN_MODAL, OPEN_MODAL_CHILDREN } from '../../reducers/modalReducer'
import { deleteCart } from '../../utils/cart.utils'

const CartSidenav = ({ history }) => {
  const { useAuth, useCart, useModal, useLoading } = useAppHooks()
  const [{ isConnected }, dispatchAuth] = useAuth
  const [{ total }, dispatchCart] = useCart
  const [modalState, dispatchModal] = useModal
  const [loadingState, dispatchLoading] = useLoading

  const emptyCart = async e => {
    try {
      dispatchLoading({ type: SET_LOADING, payload: { msg: "please wait..." } })
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

  const redirectAndClose = handleClose => {
    history.replace('/checkout')
    handleClose()
  }

  const openLoginModal = () => {
    dispatchModal({
      type: OPEN_MODAL_CHILDREN,
      payload: {
        children: ({handleClose}) => <LoginForm handleClose={() => redirectAndClose(handleClose)} />,
        title: (
          <Pane textAlign='center'>
            <Heading>Please login first before checkout</Heading>
            <Text><Small>Just take 15sec to login and finish your awesome purchase !</Small></Text>
          </Pane>
        )
      }
    })
  }

  return (
    <Pane>
      <Pane
        paddingY={10}
        display='flex'
        background='blueTint'
        alignItems='center'
        justifyContent='center'
      >
        <Pane cursor='pointer'>
          <Icon icon='caret-right' color='success' />
          {
            !isConnected ?
            <Text
              color='green'
              size={500}
              onClick={openLoginModal}
            >
              Checkout
            </Text>
              :
            <Link to='/checkout'>
              <Text
                color='green'
                size={500}
              >
                Checkout
              </Text>
            </Link>
          }
          <Icon icon='caret-left' color='success' />
        </Pane>
      </Pane>
      <CartList />
      <Pane paddingY={16}>
        <Label name={`Total: $ ${total.toFixed(2)}`} />
      </Pane>
      <Pane>
        <Button intent='danger' appearance='minimal' onClick={openModal}>
          Reset cart
        </Button>
      </Pane>
    </Pane>
  )
}

export default withRouter(CartSidenav)
