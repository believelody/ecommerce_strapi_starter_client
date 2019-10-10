import React, { useEffect, useState } from 'react'
import { Pane, Card, Button } from 'evergreen-ui'
import CartCheckout from '../checkout//CartCheckout'
import AddressCheckout from '../checkout//AddressCheckout'
import ShippingMethodCheckout from '../checkout//ShippingMethodCheckout'
import PaymentCheckout from '../checkout//PaymentCheckout'
import Label from '../label/Label'
import { useAppHooks } from '../../context'
import isMobile from '../../utils/isMobile.utils'

const CheckoutForm = () => {
  const { useCart } = useAppHooks()
  const [{total}, dispatchCart] = useCart

  const [currentIndex, setIndex] = useState(-1)

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <Card
      minWidth={!isMobile() ? 500 : 300}
      maxWidth={isMobile() ? 300 : 700}
      padding={20}
      display='flex'
      alignItems='center'
      justifyContent='center'
      flexDirection='column'
      border
    >
      <Pane
        display='block'
        elevation={2}
        width='100%'
      >
        <CartCheckout index={0} currentIndex={currentIndex} setIndex={setIndex} />
        <AddressCheckout index={1} currentIndex={currentIndex} setIndex={setIndex} />
        <ShippingMethodCheckout index={2} currentIndex={currentIndex} setIndex={setIndex} />
        <PaymentCheckout index={3} currentIndex={currentIndex} setIndex={setIndex} />
      </Pane>
      {/*<Button appearance='primary' intent='success' marginTop={20}>
        <Label name={`Buy ${total} $`} />
      </Button>*/}
      <button
        className="snipcart-add-item"
        data-item-id="2"
      >
        <Label name={`Buy ${total} $`} />
      </button>
    </Card>
  )
}

export default CheckoutForm
