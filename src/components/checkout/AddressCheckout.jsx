import React from 'react'
import { Pane, Strong, Icon } from 'evergreen-ui'
import Accordion from '../accordions/Accordion'
import AddressCheckoutTab from '../tabs/AddressCheckoutTab'

const AddressCheckout = ({index, currentIndex, setIndex}) => {
  return (
    <Pane width='100%' border>
      <Accordion
        index={index}
        currentIndex={currentIndex}
        setIndex={setIndex}
        header={
          <Pane textAlign='center'>
            {index === currentIndex && <Icon icon='caret-right' />}
            <Strong size={index === currentIndex ? 600 : 500}>Fill your address</Strong>
            {index === currentIndex && <Icon icon='caret-left' />}
          </Pane>
        }
        content={<AddressCheckoutTab />}
      />
    </Pane>
  )
}

export default AddressCheckout
