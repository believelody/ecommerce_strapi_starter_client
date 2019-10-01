import React, { useState } from 'react'
import { Pane } from 'evergreen-ui'
import Label from '../label/Label'
import ProductOptions from '../products/ProductOptions'
import { useAppHooks } from '../../context'
import { ADD_TO_CART, IMPORT_CART_FROM_LOCALSTORAGE, DECREMENT_QUANTITY, INCREMENT_QUANTITY, UPDATE_COLOR, UPDATE_SIZE, QUANTITY_MAX, REMOVE_FROM_CART } from '../../reducers/cartReducer'
import { OPEN_MODAL } from '../../reducers/modalReducer'
import {setCart, deleteCart} from '../../utils/cart.utils'
import isMobile from '../../utils/isMobile.utils'

const ContentCartItem = ({ item, currentIndex }) => {
  const COLORS = item.product.colors
    .map((color, index) => ({label: color.name, value: index}))
  const SIZES = item.product.sizes
    .map((size, index) => ({label: size.name, value: index}))

  const { useCart, useModal } = useAppHooks()
  const [{cart}, dispatchCart] = useCart
  const [modalState, dispatchModal] = useModal

  const [quantity, setQuantity] = useState(item.quantity)
  const [selectedColor, setColor] = useState(item.product.colors.findIndex(color => color._id === item.color._id))
  const [selectedSize, setSize] = useState(item.product.sizes.findIndex(size => size._id === item.size._id))
  const [errors, setErrors] = useState(null)

  const removeItem = () => {
    let updatedCart = cart.filter((item, index) => index !== currentIndex)
    console.log(updatedCart)
    if (updatedCart.length === 0) {
      deleteCart()
    }
    else {
      setCart(updatedCart)
    }
    dispatchCart({ type: REMOVE_FROM_CART, payload: {index: currentIndex} })
  }

  const decreaseQuantity = e => {
    if (quantity === 1) {
      dispatchModal({
        type: OPEN_MODAL,
        payload: {
          title: `Delete ${item.product.name} ?`,
          msg: 'Please confirm your action. Once done, you cannot go back',
          status: 'danger',
          action: removeItem
        }
      })
    }
    else {
      let updatedCart = cart
      setQuantity(prevQuantity => prevQuantity - 1)
      dispatchCart({ type: DECREMENT_QUANTITY, payload: {index: currentIndex} })
      updatedCart[currentIndex].quantity = item.quantity
      setCart(updatedCart)
    }
  }

  const increaseQuantity = e => {
    if (quantity === QUANTITY_MAX) {
      setErrors(prevErrors => ({...prevErrors, max: `You cannot take more than ${QUANTITY_MAX}`}))
    }
    else {
      let updatedCart = cart
      setQuantity(prevQuantity => prevQuantity + 1)
      dispatchCart({ type: INCREMENT_QUANTITY, payload: {index: currentIndex} })
      updatedCart[currentIndex].quantity = item.quantity
      setCart(updatedCart)
    }
  }

  const noMoreItem = (color, size) => {
    let variant = color.skus.find(skuColor => size.skus.find(skuSize => skuSize._id === skuColor._id))
    return variant && variant.unit === 0
  }

  const checkItemInCart = (cart, product) => {
    return cart.findIndex(item => item.product._id === product._id && item.color._id === product.colors[selectedColor]._id && item.size._id === product.sizes[selectedSize]._id)
  }

  const handleColor = value => {
    let updatedCart = cart
    if (noMoreItem(item.product.colors[value], item.product.sizes[selectedSize])) {
      setErrors({...errors, nomore: `This variant item is no longer available `})
    }
    else if (errors && errors.nomore) {
      delete errors.nomore
    }
    else {
      setColor(value)
      dispatchCart({ type: UPDATE_COLOR, payload: {index: currentIndex, color: item.product.colors[value]} })
      updatedCart[currentIndex].color = item.color
      setCart(updatedCart)
    }
  }

  const handleSize = value => {
    let updatedCart = cart
    if (noMoreItem(item.product.colors[selectedColor], item.product.sizes[value])) {
      setErrors({...errors, nomore: `This variant item is no longer available`})
    }
    else if (errors && errors.nomore) {
      delete errors.nomore
    }
    else {
      setSize(value)
      dispatchCart({ type: UPDATE_SIZE, payload: {index: currentIndex, size: item.product.sizes[value]} })
      updatedCart[currentIndex].size = item.size
      setCart(updatedCart)
    }
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
