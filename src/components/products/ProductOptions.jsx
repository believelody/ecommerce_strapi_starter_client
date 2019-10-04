import React, { useState, useEffect } from 'react'
import { Pane, Menu, Button, InlineAlert, toaster } from 'evergreen-ui'
import Label from '../label/Label'
import OptionQuantity from '../options/OptionQuantity'
import OptionColor from '../options/OptionColor'
import OptionSize from '../options/OptionSize'
import { useAppHooks } from '../../context'
import { ADD_TO_CART, UPDATE_QUANTITY } from '../../reducers/cartReducer'
import {setCart, getCart} from '../../utils/cart.utils'

const ProductOptions = ({product, width, withCartButton = false, qt = 0, color = 0, size = 0, decreaseQuantity = null, increaseQuantity = null, colors, sizes, handleColor = null, handleSize = null, currentIndex}) => {
  const { useCart } = useAppHooks()
  const [{cart}, dispatchCart] = useCart

  const [quantity, setQuantity] = useState(0)
  const [selectedColor, setColor] = useState(color)
  const [selectedSize, setSize] = useState(size)
  const [errors, setErrors] = useState(null)

  const _decreaseQuantity = e => {
    if (errors) {
      delete errors.quantity
    }
    setQuantity(prevQuantity => prevQuantity === 0 ? 0 : prevQuantity - 1)
  }

  const _increaseQuantity = e => {
    if (errors) {
      delete errors.quantity
    }
    setQuantity(prevQuantity => prevQuantity === 20 ? 20 : prevQuantity + 1)
  }

  const noMoreItem = (color, size) => {
    let variant = color.skus.find(skuColor => size.skus.find(skuSize => skuSize._id === skuColor._id))
    return variant && variant.unit === 0
  }

  const checkItemInCart = (cart, product) => {
    return cart.findIndex(item => item.product._id === product._id && item.color._id === product.colors[selectedColor]._id && item.size._id === product.sizes[selectedSize]._id)
  }

  const handleBuyItem = e => {
    if (quantity === 0) {
      setErrors({...errors, quantity: 'You have to choose at least 1 item'})
    }
    else if (noMoreItem(product.colors[selectedColor], product.sizes[selectedSize])) {
      setErrors({...errors, nomore: 'You cannot add this item in your cart'})
    }
    else if (cart.length > 0 && checkItemInCart(cart, product) > -1) {
      let itemIndex = checkItemInCart(cart, product)
      let updatedCart = cart
      updatedCart[itemIndex].quantity += quantity
      setCart(updatedCart)
      dispatchCart({ type: UPDATE_QUANTITY, payload: {index: itemIndex, quantity: updatedCart[itemIndex].quantity} })
      toaster.success(`You successfully updated ${product.name}'s quantity`)
    }
    else {
      setErrors(null)
      const newItem = {product, quantity, color: product.colors[selectedColor], size: product.sizes[selectedSize]}
      setCart([newItem, ...cart])
      dispatchCart({ type: ADD_TO_CART, payload: {item: newItem}})
      toaster.success(`You successfully added ${product.name} in your cart`, {
        description: `Item: ${product.name} x ${quantity} - Color: ${product.colors[selectedColor].name} - Size: ${product.sizes[selectedSize].name}`
      })
    }
  }

  const _handleColor = value => {
    if (noMoreItem(product.colors[value], product.sizes[selectedSize])) {
      setErrors({...errors, nomore: `This variant item is no longer available `})
    }
    else if (errors && errors.nomore) {
      delete errors.nomore
    }
    setColor(value)
  }

  const _handleSize = value => {
    if (noMoreItem(product.colors[selectedColor], product.sizes[value])) {
      setErrors({...errors, nomore: `This variant item is no longer available`})
    }
    else if (errors && errors.nomore) {
      delete errors.nomore
    }
    setSize(value)
  }

  return (
    <Pane width={width ? width : 320}>
      <Menu>
        <Menu.Item>
          <OptionQuantity
            quantity={withCartButton ? quantity : qt}
            decrease={!withCartButton ? decreaseQuantity : _decreaseQuantity}
            increase={!withCartButton ? increaseQuantity : _increaseQuantity}
          />
        </Menu.Item>
        <Menu.Item>
          <OptionColor
            colors={colors}
            value={withCartButton ? selectedColor : color}
            handleValue={!withCartButton ? handleColor : _handleColor}
          />
        </Menu.Item>
        <Menu.Item>
          <OptionSize
            sizes={sizes}
            value={withCartButton ? selectedSize : size}
            handleValue={!withCartButton ? handleSize : _handleSize}
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
