import React, { useState, useEffect } from 'react'
import { Pane } from 'evergreen-ui'
import Label from '../label/Label'
import ProductOptions from '../products/ProductOptions'
import { useAppHooks } from '../../context'
import { ADD_TO_CART, IMPORT_CART_FROM_LOCALSTORAGE, DECREMENT_QUANTITY, INCREMENT_QUANTITY, UPDATE_COLOR, UPDATE_SIZE, QUANTITY_MAX, REMOVE_FROM_CART } from '../../reducers/cartReducer'
import { OPEN_MODAL } from '../../reducers/modalReducer'
import {setCart, deleteCart, getCart} from '../../utils/cart.utils'
import isMobile from '../../utils/isMobile.utils'
import {arrayColor, arraySize} from '../../utils/product.utils'

const ContentCartItem = ({ item, currentIndex }) => {
  let COLORS = arrayColor(item.product.colors)
  let SIZES = arraySize(item.product.sizes)
  let ITEM_QUANTITY = item.quantity
  let INDEX_ITEM_COLOR = item.product.colors.findIndex(color => color._id === item.color._id)
  let INDEX_ITEM_SIZE = item.product.sizes.findIndex(size => size._id === item.size._id)


  const { useCart, useModal } = useAppHooks()
  const [{cart}, dispatchCart] = useCart
  const [modalState, dispatchModal] = useModal

  // const [quantity, setQuantity] = useState(item.quantity)
  // const [selectedColor, setColor] = useState(item.product.colors.findIndex(color => color._id === item.color._id))
  // const [selectedSize, setSize] = useState(item.product.sizes.findIndex(size => size._id === item.size._id))
  const [errors, setErrors] = useState(null)

  const removeItem = () => {
    let updatedCart = cart.filter((item, index) => index !== currentIndex)
    if (updatedCart.length === 0) {
      deleteCart()
    }
    else {
      setCart(updatedCart)
    }
    dispatchCart({ type: REMOVE_FROM_CART, payload: {index: currentIndex} })
  }

  const decreaseQuantity = e => {
    if (ITEM_QUANTITY === 1) {
      dispatchModal({
        type: OPEN_MODAL,
        payload: {
          title: `Remove ${item.product.name} from your cart ?`,
          msg: 'Please confirm your action. Once done, you cannot go back',
          status: 'danger',
          action: removeItem
        }
      })
    }
    else {
      let updatedCart = cart
      dispatchCart({ type: DECREMENT_QUANTITY, payload: {index: currentIndex} })
      updatedCart[currentIndex].quantity = item.quantity
      setCart(updatedCart)
    }
  }

  const increaseQuantity = e => {
    if (ITEM_QUANTITY === QUANTITY_MAX) {
      setErrors(prevErrors => ({...prevErrors, max: `You cannot take more than ${QUANTITY_MAX}`}))
    }
    else {
      let updatedCart = cart
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
    return cart.findIndex(item => item.product._id === product._id && item.color._id === product.colors[INDEX_ITEM_COLOR]._id && item.size._id === product.sizes[INDEX_ITEM_SIZE]._id)
  }

  const handleColor = value => {
    let updatedCart = cart
    if (noMoreItem(item.product.colors[value], item.product.sizes[INDEX_ITEM_SIZE])) {
      setErrors({...errors, nomore: `This variant item is no longer available `})
    }
    else if (errors && errors.nomore) {
      delete errors.nomore
    }
    else {
      updatedCart[currentIndex].color = item.color
      setCart(updatedCart)
      dispatchCart({ type: UPDATE_COLOR, payload: {index: currentIndex, color: item.product.colors[value]} })
    }
  }

  const handleSize = value => {
    let updatedCart = cart
    if (noMoreItem(item.product.colors[INDEX_ITEM_COLOR], item.product.sizes[value])) {
      setErrors({...errors, nomore: `This variant item is no longer available`})
    }
    else if (errors && errors.nomore) {
      delete errors.nomore
    }
    else {
      updatedCart[currentIndex].size = item.size
      setCart(updatedCart)
      dispatchCart({ type: UPDATE_SIZE, payload: {index: currentIndex, size: item.product.sizes[value]} })
    }
  }

  return (
    <Pane>
      <ProductOptions
        width='100%'
        product={item.product}
        qt={ITEM_QUANTITY}
        color={INDEX_ITEM_COLOR}
        size={INDEX_ITEM_SIZE}
        colors={COLORS}
        sizes={SIZES}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
        handleColor={handleColor}
        handleSize={handleSize}
        errors={errors}
        currentIndex={currentIndex}
      />
    </Pane>
  )
}

export default ContentCartItem
