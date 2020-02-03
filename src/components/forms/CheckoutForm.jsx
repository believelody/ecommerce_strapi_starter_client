import React, { useEffect, useState } from 'react'
import { Pane, Card, Button, Text, Spinner } from 'evergreen-ui'
import { injectStripe } from 'react-stripe-elements'
import CartCheckout from '../checkout//CartCheckout'
import AddressCheckout from '../checkout//AddressCheckout'
import ShippingMethodCheckout from '../checkout//ShippingMethodCheckout'
import PaymentCheckout from '../checkout//PaymentCheckout'
import Label from '../label/Label'
// import { apiUrl } from '../../api'
import { useAppHooks } from '../../context'
import { PAYMENT_SUCCEED, PAYMENT_FAILED } from '../../reducers/checkoutReducer'
// import { snipcartClearItems, snipcartLogoutUser, snipcartBillingAddress, snipcartShippingAddress, snipcartStartNew } from '../../snipcart'
import { deleteCart } from '../../utils/cart.utils'
import isMobile from '../../utils/isMobile.utils'
import DetailAmountCheckout from '../checkout/DetailAmountCheckout'
import PromoCode from '../promo/PromoCode'
import { APPLY_PROMO_CODE } from '../../reducers/cartReducer'

const CheckoutForm = ({ stripe }) => {
  const { useCart, useCheckout, useLoading } = useAppHooks()
  const [{total}, dispatchCart] = useCart
  const [{isPaymentSucceed, errors, shippingMethod, promo}, dispatchCheckout] = useCheckout
  const [loadingState, dispatchLoading] = useLoading

  const [currentIndex, setIndex] = useState(-1)
  // This variable is used for simulation
  const [isPaying, setIsPaying] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    setIsPaying(true)
    setTimeout(() => {
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
        setIsPaying(false)
        // lalala
        dispatchCheckout({ type: PAYMENT_SUCCEED })
      }
      catch (e) {
        dispatchCheckout({ type: PAYMENT_FAILED, payload: {payment_failed: 'Error in payment'} })
        console.log(e)
      }
    }, 5000)
  }

  // useEffect(() => {
  //   if (errors) {
  //     console.log(errors.payment_failed)
  //   }
  // }, [errors])

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
      // resetAll()
    }
  }, [isPaymentSucceed])

  useEffect(() => {
    if (promo) {
      dispatchCart({
        type: APPLY_PROMO_CODE,
        payload: {
          total: promo.discount(total)
        }
      })
    }
  }, [promo])

  return (
    <form onSubmit={handleSubmit}>
      <Card
        minWidth={!isMobile() ? 700 : 300}
        maxWidth={isMobile() ? 300 : 700}
        padding={16}
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
        <PromoCode />
        <DetailAmountCheckout />
        <Pane display='flex' flexWrap='wrap' alignItems='center'>
          <Button
            id='stripe__button'
            type='submit'
            appearance='primary'
            intent='success'
            height={40}
            paddingX={56}
          >
            {shippingMethod && !isPaying && <Label name={`Buy $ ${(total + shippingMethod.price).toFixed(2)}`} />}
            {isPaying && <Spinner />}
          </Button>
          <Text paddingY={8} paddingX={16}>Or</Text>
          <Button appearance='primary' intent='warning' color='blue'>
            PayPal Checkout
          </Button>
        </Pane>
        <Pane
          marginTop={8}
          background={errors ? 'redTint' : ''}
          border={errors ? 'default' : ''}
          paddingY={errors ? 16 : 0}
          paddingX={errors ? 64 : 0}
        >
          {
            isPaying && !errors && <Text size={400}>Please wait, we are processing payment...</Text>
          }
          {
            !isPaying && errors && <Text size={600} color='red'>{errors.payment_failed}</Text>
          }
        </Pane>
      </Card>
    </form>
  )
}

export default injectStripe(CheckoutForm)
