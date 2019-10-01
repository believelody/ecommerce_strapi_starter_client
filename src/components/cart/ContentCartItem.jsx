import React, { useState } from 'react'
import { Pane } from 'evergreen-ui'
import Label from '../label/Label'
import ProductOptions from '../products/ProductOptions'
import { useAppHooks } from '../../context'
import { ADD_TO_CART, IMPORT_CART_FROM_LOCALSTORAGE, UPDATE_QUANTITY } from '../../reducers/cartReducer'
import {setCart, getCart} from '../../utils/cart.utils'
import isMobile from '../../utils/isMobile.utils'

const ContentCartItem = ({ item }) => {
  const COLORS = item.product.colors
    .map((color, index) => ({label: color.name, value: index}))
  const SIZES = item.product.sizes
    .map((size, index) => ({label: size.name, value: index}))

  const { useCart } = useAppHooks()
  const [{cart}, dispatchCart] = useCart

  const [quantity, setQuantity] = useState(item.quantity)
  const [selectedColor, setColor] = useState(item.product.colors.findIndex(color => color._id === item.color._id))
  const [selectedSize, setSize] = useState(item.product.sizes.findIndex(size => size._id === item.size._id))
  const [errors, setErrors] = useState(null)

  const decreaseQuantity = e => {
    if (errors) {
      delete errors.quantity
    }
    setQuantity(prevQuantity => prevQuantity === 0 ? 0 : prevQuantity - 1)
  }

  const increaseQuantity = e => {
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

  const handleColor = value => {
    if (noMoreItem(product.colors[value], product.sizes[selectedSize])) {
      setErrors({...errors, nomore: `This variant item is no longer available `})
    }
    else if (errors && errors.nomore) {
      delete errors.nomore
    }
    setColor(value)
  }

  const handleSize = value => {
    if (noMoreItem(product.colors[selectedColor], product.sizes[value])) {
      setErrors({...errors, nomore: `This variant item is no longer available`})
    }
    else if (errors && errors.nomore) {
      delete errors.nomore
    }
    setSize(value)
  }
  return (
    <Pane>
      <ProductOptions
        width='auto'
        product={item.product}
        quantity={quantity}
        selectedColor={selectedColor}
        selectedSize={selectedSize}
        colors={COLORS}
        sizes={SIZES}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
        handleColor={handleColor}
        handleSize={handleSize}
        errors={errors}
      />
    </Pane>
  )
}

export default ContentCartItem
