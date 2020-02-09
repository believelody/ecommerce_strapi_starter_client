import React from 'react'
import { Pane, Table, Icon } from 'evergreen-ui'
import Marquee from 'react-double-marquee'
import Accordion from '../accordions/Accordion'
import ContentCartItem from './ContentCartItem'

const CartItem = ({ item, index, currentIndex, setIndex }) => {

  return (
    <Table.Row isSelectable height='100%'>
      <Accordion
        index={index}
        currentIndex={currentIndex}
        setIndex={setIndex}
        header={
          <Pane display='flex'>
            <Table.TextCell flexBasis={96}>
              <Marquee speed={0.02}>{item.product.name}-{item.color.name}-{item.size.name}</Marquee>
            </Table.TextCell>
            <Table.TextCell padding={0}>{item.quantity}</Table.TextCell>
            <Table.TextCell>$ {item.quantity * item.product.price}</Table.TextCell>
            <Table.TextCell>
              <span className='row-icon'>
                <Icon icon='more' />
              </span>
            </Table.TextCell>
          </Pane>
        }
        content={<ContentCartItem item={item} currentIndex={currentIndex} />}
      />
    </Table.Row>
  )
}

export default CartItem
