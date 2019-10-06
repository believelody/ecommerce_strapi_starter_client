import React from 'react'
import { Pane } from 'evergreen-ui'
import Accordion from '../accordions/Accordion'
import Label from '../label/Label'

const PaymentCheckout = ({index, currentIndex, setIndex}) => {
  return (
    <Pane>
      <Accordion
        index={index}
        currentIndex={currentIndex}
        setIndex={setIndex}
        header={<Label name='Payment Method' />}
        content={<Label name='Payment Component' />}
      />
    </Pane>
  )
}

export default PaymentCheckout
