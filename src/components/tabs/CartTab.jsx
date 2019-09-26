import React from 'react'
import { Pane, Tab, Text } from 'evergreen-ui'

const CartTab = ({index, handleSelect}) => (
  <Tab
    onSelect={() => handleSelect(1)}
    isSelected={index === 1}
    aria-controls={`panel-cart`}
    id='cart'
  >
    <Text size={600}>Cart</Text>
  </Tab>
)

export default CartTab
