import React, { useEffect } from 'react'
import { Pane, Tab, Text, Pill } from 'evergreen-ui'
import { useAppHooks } from '../../context'
import { IMPORT_CART_FROM_LOCALSTORAGE } from '../../reducers/cartReducer'
import {getCart} from '../../utils/cart.utils'

const CartTab = ({index, handleSelect}) => {
  const {useCart} = useAppHooks()
  const [{cart}, dispatchCart] = useCart

  return (
    <Tab
      onSelect={() => handleSelect(1)}
      isSelected={index === 1}
      aria-controls={`panel-cart`}
      id='cart'
      width='50%'
    >
      <Text size={600}>
        Cart <Pill size={500} color={cart.length > 0 ? 'yellow' : 'neutral'}>{cart.length}</Pill>
      </Text>
    </Tab>
  )
}
export default CartTab
