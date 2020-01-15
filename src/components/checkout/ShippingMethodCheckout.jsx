import React from 'react'
import { Pane } from 'evergreen-ui'
import Accordion from '../accordions/Accordion'
import Label from '../label/Label'
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
        header={<Label name='Select a shipping method' />}
        content={<ShippingMethodsTab />}
      />
    </Pane>
  )
}

export default ShippingMethodCheckout
