import React, { useRef, useState, useEffect } from 'react'
import { Pane, Table, Icon, Text } from 'evergreen-ui'
import styled from 'styled-components'
import ContentCartItem from './ContentCartItem'
import { useAppHooks } from '../../context'
import devices from '../../utils/devices.utils'

const RowStyle = styled.div`
  height: 30px;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  overflow: hidden;
  transition: all 300ms ease-in-out;

  & .row-header {
    height: 30px;
    line-height: 40px;
    cursor: pointer;

    & > .row-icon {
      margin: 0 20px;
      transition: all 300ms ease-in-out;
    }
  }

  & .row-content {
    font-size: 0.85em;
    margin-left: 20px;
  }

  @media ${devices.desktop} {

  }

  @media ${devices.mobileL} {
    font-size: 0.85em;
  }
`

const CartItem = ({ item, index, currentIndex, setIndex }) => {
  const itemRef = useRef()
  const itemTitleRef = useRef()
  const itemContentRef = useRef()
  const itemIconArrow = useRef()

  const [itemDiv, setExpandDiv] = useState({
    id: index,
    isExpanded: false
  })

  const expandDiv = () => {
    if (itemDiv.isExpanded && currentIndex === itemDiv.id) {
      itemRef.current.style.height = `${itemTitleRef.current.getBoundingClientRect()
        .height + itemContentRef.current.getBoundingClientRect().height}px`
      itemIconArrow.current.style.transform = "rotate(450deg)"
    }
  }

  const reduceDiv = () => {
    if (!itemDiv.isExpanded && (currentIndex === -1 || currentIndex !== itemDiv.id)) {
      itemRef.current.style.height = `30px`
      itemIconArrow.current.style.transform = "rotate(0)"
    }
  }

  const handleClick = index => {
    setIndex(currentIndex === index ? -1 : index)
  }

  useEffect(() => {
    setExpandDiv(prevExpandDiv => ({
      ...prevExpandDiv,
      isExpanded: currentIndex === -1 || currentIndex !== prevExpandDiv.id ? false : true
    }))
  }, [currentIndex])

  useEffect(() => itemRef && itemTitleRef && itemContentRef && itemDiv.isExpanded ? expandDiv() : reduceDiv(), [itemDiv.isExpanded])

  return (
    <Table.Row isSelectable height='100%'>
      <RowStyle ref={itemRef}>
        <div className='row-header' ref={itemTitleRef} onClick={() => handleClick(index)}>
          <Pane display='flex'>
            <Table.TextCell>{`${item.product.name.substring(0, 9)}...`}</Table.TextCell>
            <Table.TextCell>{item.quantity}</Table.TextCell>
            <Table.TextCell>$ {item.quantity * item.product.price}</Table.TextCell>
            <Table.TextCell>
              <span className='row-icon' ref={itemIconArrow}>
                <Icon icon='caret-down' />
              </span>
            </Table.TextCell>
          </Pane>
        </div>
        <div className='row-content' ref={itemContentRef}>
          <ContentCartItem item={item} currentIndex={currentIndex} />
        </div>
      </RowStyle>
    </Table.Row>
  )
}

export default CartItem
