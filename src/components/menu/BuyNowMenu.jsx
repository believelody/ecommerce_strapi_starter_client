import React, { useState } from 'react'
import { Pane, Menu, IconButton, SegmentedControl, InlineAlert, Pill } from 'evergreen-ui'
import Label from '../label/Label'

const BuyNowMenu = ({ product }) => {
  const [quantity, setQuantity] = useState(0)
  const [selectedColor, setColor] = useState(0)
  const [selectedSize, setSize] = useState(0)
  const [errors, setErrors] = useState(null)

  const handleQuantity = e => {
    setQuantity(+e.target.value)
  }

  const decreaseQuantity = e => setQuantity(prevQuantity => prevQuantity === 0 ? 0 : prevQuantity - 1)
  const increaseQuantity = e => setQuantity(prevQuantity => prevQuantity === 20 ? 20 : prevQuantity + 1)

  const handleBuyItem = e => {
    if (quantity === 0) {
      setErrors({...errors, quantity: 'You have to choose at least 1 item'})
    }
  }

  return (
    <Pane>
      <Menu>
        <Menu.Item>
          <Pane display='flex' justifyContent='center' alignItems='center'>
            <Label name='Quantity' size={300} />
            <IconButton appearance='minimal' size={300} icon='minus' onClick={decreaseQuantity} />
            <Pill marginX={15}>{quantity}</Pill>
            <IconButton appearance='minimal' size={300} icon='add' onClick={increaseQuantity} />
          </Pane>
          {
            errors && errors.quantity &&
            <InlineAlert intent='danger'>{errors['quantity']}</InlineAlert>
          }
        </Menu.Item>
        <Menu.Item>
          <Label name='Color' size={300} />
        </Menu.Item>
        <Menu.Item>
          <Label name='Size' size={300} />
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item intent='success' onSelect={handleBuyItem} display='flex' justifyContent='center'>
          Take it
        </Menu.Item>
      </Menu>
    </Pane>
  )
}

export default BuyNowMenu
