import React from 'react'
import { Pane } from 'evergreen-ui'
import Accordion from '../accordions/Accordion'
import CartList from '../cart/CartList'
import EmptyCart from '../cart/EmptyCart'
import Label from '../label/Label'
import { useAppHooks } from '../../context'

const CartCheckout = ({index, currentIndex, setIndex}) => {
  const { useCart } = useAppHooks()
  const [{cart}, dispatchCart] = useCart

  return (
    <Pane
      width='100%'
      height='100%'
      border
    >
      <Accordion
        index={index}
        currentIndex={currentIndex}
        setIndex={setIndex}
        header={<Label name='Your items' />}
        content={
          cart.length > 0 ?
          <CartList /> :
          <EmptyCart />
        }
        scrollAuto
        predefinedHeight={500}
      />
    </Pane>
  )
}

export default CartCheckout
