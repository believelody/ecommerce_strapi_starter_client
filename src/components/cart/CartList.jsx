import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Pane, Text, Button, Table, Icon } from 'evergreen-ui'
import CartItem from './CartItem'
import Label from '../label/Label'
import { useAppHooks } from '../../context'
import { IMPORT_CART_FROM_LOCALSTORAGE, RESET_CART } from '../../reducers/cartReducer'
import { deleteCart } from '../../utils/cart.utils'

const CartList = () => {
  const { useCart } = useAppHooks()
  const [{cart}, dispatchCart] = useCart

  const [currentIndex, setIndex] = useState(-1)

  const emptyCart = e => {
    dispatchCart({ type: RESET_CART })
    deleteCart()
  }

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
        <Button intent='danger' onClick={emptyCart}>Reset cart</Button>
      </Pane>
    </Pane>
  )
}

export default CartList
