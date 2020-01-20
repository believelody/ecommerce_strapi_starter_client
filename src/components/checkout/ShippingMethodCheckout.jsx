import React from 'react'
import { Pane, Icon, Strong } from 'evergreen-ui'
import Accordion from '../accordions/Accordion'
import ShippingMethodsTab from '../tabs/ShippingMethodsTab'

const ShippingMethodCheckout = ({index, currentIndex, setIndex}) => {
  return (
    <Pane
      width='100%'
      height='100%'
      border
    >
      <Accordion
        index={index}
        currentIndex={currentIndex}
        setIndex={setIndex}
        header={
          <Pane textAlign='center'>
            {index === currentIndex && <Icon icon='caret-right' />}
            <Strong size={index === currentIndex ? 600 : 500}>Select a shipping method</Strong>
            {index === currentIndex && <Icon icon='caret-left' />}
          </Pane>
        }
        content={<ShippingMethodsTab />}
      />
    </Pane>
  )
}

export default ShippingMethodCheckout
