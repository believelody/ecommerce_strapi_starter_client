import React from 'react'
import { Pane, Icon, Strong } from 'evergreen-ui'
import Accordion from '../accordions/Accordion'
import PaymentForm from '../forms/PaymentForm'

const PaymentCheckout = ({index, currentIndex, setIndex}) => {
  return (
    <Pane border>
      <Accordion
        index={index}
        currentIndex={currentIndex}
        setIndex={setIndex}
        header={
          <Pane textAlign='center'>
            {index === currentIndex && <Icon icon='caret-right' />}
            <Strong size={index === currentIndex ? 600 : 500}>Payment Method</Strong>
            {index === currentIndex && <Icon icon='caret-left' />}
          </Pane>
        }
        content={<PaymentForm />}
      />
    </Pane>
  )
}

export default PaymentCheckout
