import React from 'react'
import { Pane } from 'evergreen-ui'
import Accordion from '../accordions/Accordion'
import CartList from '../cart/CartList'
import Label from '../label/Label'

const CartCheckout = ({index, currentIndex, setIndex}) => {
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
        content={<CartList />}
        scrollAuto
        predefinedHeight={500}
      />
    </Pane>
  )
}

export default CartCheckout
