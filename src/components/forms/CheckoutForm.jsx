import React, { useEffect, useState } from 'react'
import { Pane, Card, Button } from 'evergreen-ui'
import CartCheckout from '../checkout//CartCheckout'
import AddressCheckout from '../checkout//AddressCheckout'
import ShippingMethodCheckout from '../checkout//ShippingMethodCheckout'
import PaymentCheckout from '../checkout//PaymentCheckout'
import Label from '../label/Label'
import { apiUrl } from '../../api'
import { useAppHooks } from '../../context'
import { PAYMENT_SUCCEED, PAYMENT_FAILED } from '../../reducers/checkoutReducer'
import { SET_LOADING, RESET_LOADING } from '../../reducers/loadingReducer'
import { snipcartClearItems, snipcartLogoutUser, snipcartBillingAddress, snipcartShippingAddress, snipcartStartNew } from '../../snipcart'
import { deleteCart } from '../../utils/cart.utils'
import isMobile from '../../utils/isMobile.utils'

const CheckoutForm = () => {
  const { useCart, useCheckout, useLoading, useModal } = useAppHooks()
  const [{total, cart}, dispatchCart] = useCart
  const [{isPaymentSucceed, errors}, dispatchCheckout] = useCheckout
  const [{loading}, dispatchLoading] = useLoading
  const [modalState, dispatchModal] = useModal

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
        await snipcartClearItems()
        await snipcartShippingAddress(null)
        await snipcartBillingAddress(null)
        await snipcartLogoutUser()
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
    <Card
      minWidth={!isMobile() ? 700 : 300}
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
      <Button appearance='primary' intent='success' marginTop={20}>
        <Label name={`Buy ${total} $`} />
      </Button>
    </Card>
  )
}

export default CheckoutForm
