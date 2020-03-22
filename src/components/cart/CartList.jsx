import React, { useState } from 'react'
import { Table, IconButton } from 'evergreen-ui'
import CartItem from './CartItem'
import { useAppHooks } from '../../context'
import { OPEN_MODAL } from '../../reducers/modalReducer'
import { REMOVE_MANY_ITEMS } from '../../reducers/cartReducer'
import { setCart } from '../../utils/cart.utils'

const CartList = () => {
  const { useCart, useModal } = useAppHooks()
  const [{cart}, dispatchCart] = useCart
  const [modalState, dispatchModal] = useModal

  const [currentIndex, setIndex] = useState(-1)
  const [selectedItems, setSelect] = useState([])
  const [resetSelectItems, setReset] = useState(false)

  const addItem = id => {
    setSelect(prevSelectedItems => [...prevSelectedItems, id])
  }

  const removeItem = id => {
    setSelect(prevSelectedItems => prevSelectedItems.filter(item => item !== id))
  }

  const removeFromCart = () => {
    dispatchModal({
      type: OPEN_MODAL,
      payload: {
        title: `Remove ${selectedItems.length} items from cart ?`,
        msg: 'Are you sure ? You will have to choose again these items. Please confirm your action.',
        action: () => {
          let updatedCart = cart
          dispatchCart({ type: REMOVE_MANY_ITEMS, payload: {selectedItems} })
          selectedItems.forEach(id => {
            console.log(id)
            updatedCart = updatedCart.filter(item => item.id !== id)
          })
          setCart(updatedCart)
          setReset(true)
        },
        status: 'danger',
      }
    })
  }

  return (
    <Table>
      <Table.Head>
        <Table.TextHeaderCell padding={0} flexBasis={30} flexShrink={1} flexGrow={0} />
        <Table.TextHeaderCell flexBasis={96} flexShrink={0} flexGrow={1}>Item</Table.TextHeaderCell>
        <Table.TextHeaderCell padding={0} flexBasis={10} flexShrink={1} flexGrow={0}>Qt</Table.TextHeaderCell>
        <Table.TextHeaderCell flexBasis={50} flexShrink={1} flexGrow={0}>Amount</Table.TextHeaderCell>
        <Table.TextHeaderCell padding={0} flexBasis={30} flexShrink={1} flexGrow={0}>
          {
            selectedItems.length > 0 &&
            <IconButton appearance='minimal' intent='danger' icon='trash' onClick={removeFromCart} />
          }
        </Table.TextHeaderCell>
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
              addItem={addItem}
              removeItem={removeItem}
              reset={resetSelectItems}
              setReset={setReset}
            />
          )
        }
      </Table.Body>
    </Table>
  )
}

export default CartList
