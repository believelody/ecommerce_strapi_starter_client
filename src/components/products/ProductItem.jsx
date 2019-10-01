import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ListItem, Pane, Card, Button, Text, Badge, Popover, Position, toaster } from 'evergreen-ui'
import Slider from 'react-animated-slider'
import styled from 'styled-components'
import Label from '../label/Label'
import ProductOptions from '../products/ProductOptions'
import { apiUrl } from '../../api'
import { useAppHooks } from '../../context'
import { ADD_TO_CART, IMPORT_CART_FROM_LOCALSTORAGE } from '../../reducers/cartReducer'
import {setCart} from '../../utils/cart.utils'
import isMobile from '../../utils/isMobile.utils'

const ImageStyle = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: url('${props => props.src}') no-repeat center center;
  background-size: cover;
`

const ProductItem = ({product }) => {
  const COLORS = product.colors
    .map((color, index) => ({label: color.name, value: index}))
  const SIZES = product.sizes
    .map((size, index) => ({label: size.name, value: index}))

  const { useCart } = useAppHooks()
  const [{cart}, dispatchCart] = useCart

  const [quantity, setQuantity] = useState(0)
  const [selectedColor, setColor] = useState(0)
  const [selectedSize, setSize] = useState(0)
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

  const handleBuyItem = e => {
    if (quantity === 0) {
      setErrors({...errors, quantity: 'You have to choose at least 1 item'})
    }
    else if (noMoreItem(product.colors[selectedColor], product.sizes[selectedSize])) {
      setErrors({...errors, nomore: 'You cannot add this item in your cart'})
    }
    else if (cart.length > 0) {
      let itemIndex = checkItemInCart(cart, product)
      if (itemIndex > -1) {
        let updatedCart = cart
        updatedCart[itemIndex].quantity += quantity
        setCart(updatedCart)
        toaster.success(`You successfully updated ${product.name}'s quantity`)
      }
    }
    else {
      setErrors(null)
      const newItem = {product, quantity, color: product.colors[selectedColor], size: product.sizes[selectedSize]}
      setCart([newItem, ...cart])
      toaster.success(`You successfully added ${product.name} in your cart`, {
        description: `Item: ${product.name} x ${quantity} - Color: ${product.colors[selectedColor].name} - Size: ${product.sizes[selectedSize].name}`
      })
      dispatchCart({ type: ADD_TO_CART, payload: {item: newItem}})
    }
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
    <ListItem
      width={320}
    >
      <Card
        height={400}
        borderBottom
        borderTop
        borderLeft
        borderRight
        elevation={2}
        display='flex'
        flexDirection='column'
        background='white'
      >
        <Pane paddingY={5} display='flex' justifyContent='space-between' borderBottom>
          <Pane width='70%'><Label name={product.name} /></Pane>
          <Badge color='orange' size={400} paddingBottom={20} marginRight={10}>$ {product.price}</Badge>
        </Pane>
        <Slider infinite autoplay={3000}>
          {
            product.thumbnails.map(thumbnail =>
              <ImageStyle
                key={thumbnail.name}
                src={`${apiUrl}${thumbnail.url}`}
              />
            )
          }
        </Slider>
        <Pane width='100%' height='auto' paddingBottom={5} display='flex' justifyContent='space-around'>
          <Button width={90} appearance='primary' iconAfter='zoom'>
            <Link to={`/products/${product._id}`}>See more</Link>
          </Button>
          <Popover
            position={Position.BOTTOM_LEFT}
            content={
              <ProductOptions
                product={product}
                quantity={quantity}
                selectedColor={selectedColor}
                selectedSize={selectedSize}
                colors={COLORS}
                sizes={SIZES}
                decreaseQuantity={decreaseQuantity}
                increaseQuantity={increaseQuantity}
                handleColor={handleColor}
                handleSize={handleSize}
                handleBuyItem={handleBuyItem}
                errors={errors}
                withCartButton
              />
            }
          >
            <Button width={90} appearance='primary' intent='success' iconAfter='cart'>
              Buy Now
            </Button>
          </Popover>
        </Pane>
      </Card>
    </ListItem>
  )
}

export default ProductItem
