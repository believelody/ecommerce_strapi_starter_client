import React from 'react'
import { Link } from 'react-router-dom'
import { ListItem, Pane, Card, Button, Text, Badge } from 'evergreen-ui'
import { apiUrl } from '../../api'
import Label from '../label/Label'
import styled from 'styled-components'
import isMobile from '../../utils/isMobile.utils'

const ImageStyle = styled.img`
  width: 100%;
  height: 80%;
  margin: 0;
  padding: 0;
`

const ProductItem = ({product}) => {
  console.log(product)
  return (
    <ListItem>
      <Card
        borderBottom
        borderTop
        borderLeft
        borderRight
        width={300}
        height={340}
        elevation={2}
        display='flex'
        flexDirection='column'
      >
        <Pane paddingY={5} display='flex' justifyContent='space-between' borderBottom>
          <Pane width='70%'><Label name={product.name} /></Pane>
          <Badge color='orange' size={400} paddingBottom={20} marginRight={10}>$ {product.price}</Badge>
        </Pane>
        <ImageStyle src={`${apiUrl}${product.thumbnails[1].url}`} alt={product.thumbnails[1].name} />
        <Pane width='100%' marginTop={2} display='flex' justifyContent='space-around'>
          <Button width={90} appearance='primary' iconAfter='zoom'>
            <Link to={`/products/${product._id}`}>See more</Link>
          </Button>
          <Button width={90} appearance='primary' intent='success' iconAfter='cart'>
            Put in cart
          </Button>
        </Pane>
      </Card>
    </ListItem>
  )
}

export default ProductItem
