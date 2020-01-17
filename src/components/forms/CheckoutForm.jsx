import React, { useEffect, useState } from 'react'
import { Pane, Card, Button, Text } from 'evergreen-ui'
import { injectStripe } from 'react-stripe-elements'
import CartCheckout from '../checkout//CartCheckout'
import AddressCheckout from '../checkout//AddressCheckout'
import ShippingMethodCheckout from '../checkout//ShippingMethodCheckout'
import PaymentCheckout from '../checkout//PaymentCheckout'
import Label from '../label/Label'
// import { apiUrl } from '../../api'
import { useAppHooks } from '../../context'
import { PAYMENT_SUCCEED, PAYMENT_FAILED } from '../../reducers/checkoutReducer'
import { SET_LOADING, RESET_LOADING } from '../../reducers/loadingReducer'
// import { snipcartClearItems, snipcartLogoutUser, snipcartBillingAddress, snipcartShippingAddress, snipcartStartNew } from '../../snipcart'
import { deleteCart } from '../../utils/cart.utils'
import isMobile from '../../utils/isMobile.utils'
import DetailAmountCheckout from '../checkout/DetailAmountCheckout'

const CheckoutForm = ({ stripe }) => {
  const { useCart, useCheckout, useLoading } = useAppHooks()
  const [{total}, dispatchCart] = useCart
  const [{isPaymentSucceed, errors, shippingMethod}, dispatchCheckout] = useCheckout
  const [{loading}, dispatchLoading] = useLoading

  const [currentIndex, setIndex] = useState(-1)

  const handleSubmit = async e => {
    dispatchLoading({ type: SET_LOADING, payload: {msg: 'Please wait, we are processing payment'}})
    e.preventDefault()
    try {
      // await snipcartStartNew()
      // await snipcartAddItem(cart.map(item => ({
      //   'id': `${item.product.name}-${item.quantity}-${item.color}-${item.size}`,
      //   'name': `${item.product.name}`,
      //   'description': `${item.product.description}`,
      //   'price': item.product.price,
      //   'totalPrice': item.product.price * item.quantity,
      //   'unitPrice': item.product.price,
      //   'url': `${apiUrl}/products/${item.product._id}`
      // })))
      dispatchCart({ type: PAYMENT_SUCCEED })
    }
    catch (e) {
      console.log(e)
      dispatchCart({ type: PAYMENT_FAILED, payload: {payment_failed: 'Error in payment'} })
    }
    dispatchLoading({ type: RESET_LOADING })
  }

  useEffect(() => {
    if (errors) {
      console.log(errors.payment_failed)
    }
  }, [errors])

  useEffect(() => {
    const resetAll = async() => {
      try {
        // await snipcartClearItems()
        // await snipcartShippingAddress(null)
        // await snipcartBillingAddress(null)
        // await snipcartLogoutUser()
        dispatchCart({ type: RESET_CART })
        deleteCart()
      }
      catch (e) {
        console.log(e)
      }
    }

    if (isPaymentSucceed) {
      resetAll()
    }
  }, [isPaymentSucceed])

  return (
    <form onSubmit={handleSubmit}>
      <Card
        minWidth={!isMobile() ? 700 : 300}
        maxWidth={isMobile() ? 300 : 700}
        padding={20}
        display='flex'
        alignItems='center'
        justifyContent='center'
        flexDirection='column'
        elevation={2}
        border
      >
        <Pane
          display='block'
          width='100%'
        >
          <CartCheckout index={0} currentIndex={currentIndex} setIndex={setIndex} />
          <AddressCheckout index={1} currentIndex={currentIndex} setIndex={setIndex} />
          <ShippingMethodCheckout index={2} currentIndex={currentIndex} setIndex={setIndex} />
          <PaymentCheckout index={3} currentIndex={currentIndex} setIndex={setIndex} />
        </Pane>
        <DetailAmountCheckout />
        <Pane display='flex' flexDirection='column' alignItems='center'>
          <Button
            id='stripe__button'
            type='submit'
            appearance='primary'
            intent='success'
            paddingY={24}
            paddingX={56}
          >
            {shippingMethod && <Label name={`Buy $ ${(total + shippingMethod.price).toFixed(2)}`} />}
          </Button>
          <Text paddingY={8}>Or</Text>
          <Button appearance='primary' intent='warning' color='blue'>
            PayPal Checkout
          </Button>
        </Pane>
      </Card>
    </form>
  )
}

export default injectStripe(CheckoutForm)
