import React from 'react'
import { Pane, Table, Icon, Button, IconButton } from 'evergreen-ui'
import Marquee from 'react-double-marquee'
import Accordion from '../accordions/Accordion'
import ContentCartItem from './ContentCartItem'
import { Link } from 'react-router-dom'

const CartItem = ({ item, index, currentIndex, setIndex }) => {

  return (
    <Table.Row height='100%'>
      <Accordion
        index={index}
        currentIndex={currentIndex}
        setIndex={setIndex}
        header={
          ({handleClick}) => (
            <Pane display='flex'>
              <Table.TextCell is={Link} to={`/products/${item.product._id}`} flexBasis={96}>
                <Marquee speed={0.02}>{item.product.name}-{item.color.name}-{item.size.name}</Marquee>
              </Table.TextCell>
              <Table.TextCell padding={0}>{item.quantity}</Table.TextCell>
              <Table.TextCell>$ {item.quantity * item.product.price}</Table.TextCell>
              <Table.TextCell cursor='pointer'>
                <span className='row-icon'>
                  <IconButton onClick={handleClick} appearance='minimal' icon='cog' />
                </span>
              </Table.TextCell>
            </Pane>
          )
        }
        content={<ContentCartItem item={item} currentIndex={currentIndex} />}
      />
    </Table.Row>
  )
}

export default CartItem
