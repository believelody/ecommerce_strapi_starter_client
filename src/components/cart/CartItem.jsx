import React, {useRef} from 'react'
import { Pane, Table, Icon, Text } from 'evergreen-ui'
import Accordion from '../accordions/Accordion'
import ContentCartItem from './ContentCartItem'

const CartItem = ({ item, index, currentIndex, setIndex }) => {
  const itemIconArrow = useRef()

  return (
    <Table.Row isSelectable height='100%'>
      <Accordion
        index={index}
        currentIndex={currentIndex}
        setIndex={setIndex}
        header={
          <Pane display='flex'>
            <Table.TextCell>{`${item.product.name.substring(0, 9)}...`}</Table.TextCell>
            <Table.TextCell>{item.quantity}</Table.TextCell>
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
