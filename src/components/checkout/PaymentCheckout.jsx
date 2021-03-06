import React from 'react'
import { Pane, Icon, Strong } from 'evergreen-ui'
import Accordion from '../accordions/Accordion'
import PaymentForm from '../forms/PaymentForm'

const PaymentCheckout = ({index, currentIndex, setIndex}) => {
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
          ({handleClick}) => (
            <Pane textAlign='center' onClick={handleClick} cursor='pointer'>
              {index === currentIndex && <Icon icon='caret-right' />}
              <Strong size={index === currentIndex ? 600 : 500}>Payment Method</Strong>
              {index === currentIndex && <Icon icon='caret-left' />}
            </Pane>
          )
        }
        content={<PaymentForm />}
      />
    </Pane>
  )
}

export default PaymentCheckout
