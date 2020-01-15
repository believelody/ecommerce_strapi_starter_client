import React from 'react'
import { Pane } from 'evergreen-ui'
import Accordion from '../accordions/Accordion'
import Label from '../label/Label'
import AddressCheckoutTab from '../tabs/AddressCheckoutTab'

const AddressCheckout = ({index, currentIndex, setIndex}) => {
  return (
    <Pane width='100%' border>
      <Accordion
        index={index}
        currentIndex={currentIndex}
        setIndex={setIndex}
        header={<Label name='Fill your address' />}
        content={<AddressCheckoutTab />}
      />
    </Pane>
  )
}

export default AddressCheckout
