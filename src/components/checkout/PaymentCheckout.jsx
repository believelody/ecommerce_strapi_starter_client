import React from 'react'
import { Pane } from 'evergreen-ui'
import Accordion from '../accordions/Accordion'
import Label from '../label/Label'
import PaymentForm from '../forms/PaymentForm'

const PaymentCheckout = ({index, currentIndex, setIndex}) => {
  return (
    <Pane border>
      <Accordion
        index={index}
        currentIndex={currentIndex}
        setIndex={setIndex}
        header={<Label name='Payment Method' />}
        content={<PaymentForm />}
      />
    </Pane>
  )
}

export default PaymentCheckout
