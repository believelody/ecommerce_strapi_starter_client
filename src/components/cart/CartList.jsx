import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Pane, Text, Button, Table, Icon } from 'evergreen-ui'
import CartItem from './CartItem'
import Label from '../label/Label'
import { useAppHooks } from '../../context'
import { IMPORT_CART_FROM_LOCALSTORAGE, RESET_CART } from '../../reducers/cartReducer'
import { OPEN_MODAL } from '../../reducers/modalReducer'
import { deleteCart, getCart } from '../../utils/cart.utils'

const CartList = () => {
  const { useCart, useModal } = useAppHooks()
  const [{cart}, dispatchCart] = useCart
  const [modalState, dispatchModal] = useModal

  const [currentIndex, setIndex] = useState(-1)

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
      <Table>
        <Table.Head>
          <Table.TextHeaderCell>Item</Table.TextHeaderCell>
          <Table.TextHeaderCell>Qt</Table.TextHeaderCell>
          <Table.TextHeaderCell>Amount</Table.TextHeaderCell>
          <Table.TextHeaderCell>Option</Table.TextHeaderCell>
        </Table.Head>
        <Table.Body>
          {
            cart.map((item, index) =>
              <CartItem
                key={index}
                item={item}
                index={index}
                currentIndex={currentIndex}
                setIndex={setIndex}
              />
            )
          }
        </Table.Body>
      </Table>
      <Pane>
        <Button intent='danger' onClick={openModal}>Reset cart</Button>
      </Pane>
    </Pane>
  )
}

export default CartList
