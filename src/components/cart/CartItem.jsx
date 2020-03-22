import React, { useState, useEffect } from 'react'
import { Pane, Table, IconButton, Checkbox } from 'evergreen-ui'
import Marquee from 'react-double-marquee'
import Accordion from '../accordions/Accordion'
import ContentCartItem from './ContentCartItem'
import { Link } from 'react-router-dom'

const CartItem = ({ item, index, currentIndex, setIndex, addItem, removeItem, reset, setReset }) => {
  const [isChecked, setCheck] = useState(false)

  const handleCheck = e => {
    setCheck(e.target.checked)
  }

  useEffect(() => {
    if (isChecked) {
      addItem(item.id)
    }
    else {
      removeItem(item.id)
    }
  }, [isChecked])

  useEffect(() => {
    if (reset) {
      setCheck(false)
      setReset(false)
    }
  }, [reset])

  return (
    <Table.Row height='100%'>
      <Accordion
        index={index}
        currentIndex={currentIndex}
        setIndex={setIndex}
        header={
          ({handleClick}) => (
            <Pane display='flex'>
              <Table.TextCell cursor='pointer' padding={0} flexBasis={30} flexShrink={1} flexGrow={0}>
                <span className='row-icon'>
                  <IconButton onClick={handleClick} appearance='minimal' icon='chevron-right' />
                </span>
              </Table.TextCell>
              <Table.TextCell is={Link} to={`/products/${item.product._id}`} flexBasis={96} flexShrink={0} flexGrow={1}>
                <Marquee speed={0.02}>{item.product.name}-{item.color.name}-{item.size.name}</Marquee>
              </Table.TextCell>
              <Table.TextCell padding={0}  flexBasis={10} flexShrink={1} flexGrow={0}>{item.quantity}</Table.TextCell>
              <Table.TextCell flexBasis={70} flexShrink={1} flexGrow={0}>$ {item.quantity * item.product.price}</Table.TextCell>
              <Table.TextCell padding={0} flexBasis={30} flexShrink={1} flexGrow={0}>
                <Checkbox checked={isChecked} onChange={handleCheck} />
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
