import React, { useState } from 'react'
import { Table } from 'evergreen-ui'
import CartItem from './CartItem'
import { useAppHooks } from '../../context'

const CartList = () => {
  const { useCart } = useAppHooks()
  const [{cart}, dispatchCart] = useCart

  const [currentIndex, setIndex] = useState(-1)

  return (
    <Table>
      <Table.Head>
        <Table.TextHeaderCell flexBasis={96}>Item</Table.TextHeaderCell>
        <Table.TextHeaderCell padding={0}>Qt</Table.TextHeaderCell>
        <Table.TextHeaderCell>Amount</Table.TextHeaderCell>
        <Table.TextHeaderCell />
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
  )
}

export default CartList
