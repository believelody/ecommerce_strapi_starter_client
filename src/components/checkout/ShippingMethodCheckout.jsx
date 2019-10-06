import React from 'react'
import { Pane } from 'evergreen-ui'
import Accordion from '../accordions/Accordion'
import ShippingMethodForm from '../forms/ShippingMethodForm'
import Label from '../label/Label'

const ShippingMethodCheckout = ({index, currentIndex, setIndex}) => {
  return (
    <Pane>
      <Accordion
        index={index}
        currentIndex={currentIndex}
        setIndex={setIndex}
        header={<Label name='Select a shipping method' />}
        content={<ShippingMethodForm />}
      />
    </Pane>
  )
}

export default ShippingMethodCheckout
