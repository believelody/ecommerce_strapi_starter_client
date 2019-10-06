import React from 'react'
import { Pane } from 'evergreen-ui'
import Accordion from '../accordions/Accordion'
import AddressForm from '../forms/AddressForm'
import Label from '../label/Label'

const AddressCheckout = ({index, currentIndex, setIndex}) => {
  return (
    <Pane width='100%'>
      <Accordion
        index={index}
        currentIndex={currentIndex}
        setIndex={setIndex}
        header={<Label name='Fill your address' />}
        content={<AddressForm />}
      />
    </Pane>
  )
}

export default AddressCheckout
