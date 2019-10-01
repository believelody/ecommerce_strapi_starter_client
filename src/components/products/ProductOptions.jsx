import React from 'react'
import { Pane, Menu, Button, InlineAlert } from 'evergreen-ui'
import Label from '../label/Label'
import OptionQuantity from '../options/OptionQuantity'
import OptionColor from '../options/OptionColor'
import OptionSize from '../options/OptionSize'

const ProductOptions = ({product, width, withCartButton = false, quantity, selectedColor, selectedSize, decreaseQuantity, increaseQuantity, colors, sizes, handleColor, handleSize, handleBuyItem, errors}) => {

  return (
    <Pane width={width ? width : 320}>
      <Menu>
        <Menu.Item>
          <OptionQuantity
            quantity={quantity}
            decrease={decreaseQuantity}
            increase={increaseQuantity}
          />
        </Menu.Item>
        <Menu.Item>
          <OptionColor
            colors={colors}
            value={selectedColor}
            handleValue={handleColor}
          />
        </Menu.Item>
        <Menu.Item>
          <OptionSize
            sizes={sizes}
            value={selectedSize}
            handleValue={handleSize}
          />
        </Menu.Item>
        {
          errors && errors.quantity &&
          <InlineAlert intent='danger'>{errors['quantity']}</InlineAlert>
        }
        {
          errors && errors.nomore &&
          <InlineAlert textAlign='center' intent='danger'>{errors['nomore']}</InlineAlert>
        }
        <Menu.Divider />
        {
          withCartButton &&
          <Menu.Item paddingY={24}>
            <Pane display='flex' justifyContent='center'>
              <Button appearance='primary' intent='success' onClick={handleBuyItem}>Add to Cart</Button>
            </Pane>
          </Menu.Item>
        }
      </Menu>
    </Pane>
  )
}

export default ProductOptions
