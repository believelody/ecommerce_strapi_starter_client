import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
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
import {arrayColor, arraySize} from '../../utils/product.utils'

const ImageStyle = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: url('${props => props.src}') no-repeat center center;
  background-size: cover;
`

const ProductItem = ({ product }) => {
  const COLORS = arrayColor(product.colors)
  const SIZES = arraySize(product.sizes)



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
        <Pane marginY={5} display='flex' justifyContent='space-between' borderBottom>
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
        <Pane width='100%' height='auto' padding={8} display='flex' justifyContent='space-around'>
          <NavLink to={`/products/${product._id}`} style={{ width: '100%' }}>
            <Button width={90} appearance='primary' iconAfter='zoom'>
              See more
            </Button>
          </NavLink>
          <Popover
            position={Position.BOTTOM_LEFT}
            content={
              <ProductOptions
                product={product}
                colors={COLORS}
                sizes={SIZES}
                withCartButton
              />
            }
          >
            <Button width={120} appearance='primary' intent='success' iconAfter='cart'>
              Quick Add
            </Button>
          </Popover>
        </Pane>
      </Card>
    </ListItem>
  )
}

export default ProductItem
