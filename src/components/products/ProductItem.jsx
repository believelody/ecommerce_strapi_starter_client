import React from 'react'
import { Link } from 'react-router-dom'
import { ListItem, Pane, Card, Button, Text, Badge, Popover, Position } from 'evergreen-ui'
import Slider from 'react-animated-slider'
import { apiUrl } from '../../api'
import Label from '../label/Label'
import BuyNowMenu from '../menu/BuyNowMenu'
import styled from 'styled-components'
import isMobile from '../../utils/isMobile.utils'

const ImageStyle = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: url('${props => props.src}') no-repeat center center;
  background-size: cover;
`

const ProductItem = ({product}) => {
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
            content={<BuyNowMenu product={product} />}
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
