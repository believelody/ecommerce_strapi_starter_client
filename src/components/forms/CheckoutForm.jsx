import React, { useEffect, useState } from 'react'
import { Pane, Card, Button, Text, Spinner } from 'evergreen-ui'
import { injectStripe } from 'react-stripe-elements'
import CartCheckout from '../checkout//CartCheckout'
import AddressCheckout from '../checkout//AddressCheckout'
import ShippingMethodCheckout from '../checkout//ShippingMethodCheckout'
import PaymentCheckout from '../checkout//PaymentCheckout'
import Label from '../label/Label'
import api from '../../api'
import { useAppHooks } from '../../context'
import { PAYMENT_SUCCEED, PAYMENT_FAILED } from '../../reducers/checkoutReducer'
import isMobile from '../../utils/isMobile.utils'
import DetailAmountCheckout from '../checkout/DetailAmountCheckout'
import PromoCode from '../promo/PromoCode'
import { APPLY_PROMO_CODE, RESET_CART } from '../../reducers/cartReducer'
import paymentTextUtils from '../../utils/paymentText.utils'
import { UPDATE_PROFILE } from '../../reducers/profileReducer'

const CheckoutForm = ({ stripe }) => {
  const { useCart, useCheckout, useLoading, useProfile } = useAppHooks()
  const [{total, cart}, dispatchCart] = useCart
  const [{ errors, shippingMethod, promo, paymentMethod, shippingAddress, billingAddress, isPaymentSucceed }, dispatchCheckout] = useCheckout
  const [loadingState, dispatchLoading] = useLoading
  const [{profile}, dispatchProfile] = useProfile

  const [currentIndex, setIndex] = useState(-1)
  const [isPaying, setIsPaying] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    setIsPaying(true)
    try {
      const orders = await api.order.getOrders()
      const newOrder = await api.order.createOrder({
        amount: +(total + shippingMethod.price + paymentMethod.fees).toFixed(2),
        items: { cart, shippingMethod, shippingAddress, billingAddress, paymentMethod },
        numOrder: orders.length > 0 ? orders[orders.length - 1].numOrder + 1 : undefined,
        profile: profile._id,
        stripeToken: 'yes we can',
        shippingStatus: 'processing',
        paymentStatus: 'paid'
      })
      cart.forEach(async item => {
        let { data: { skus } } = await api.product.getProductSku(item.product._id, item.color._id, item.size._id)
        console.log(skus[0])
        let updatedSku = await api.product.updateSku(skus[0]._id, skus[0].unit - item.quantity)
        console.log(updatedSku)
      })
      dispatchProfile({
        type: UPDATE_PROFILE,
        payload: {
          profile: { ...profile, orders: [...profile.orders, newOrder] }
        }
      })
      setIsPaying(false)
      dispatchCheckout({ type: PAYMENT_SUCCEED })
    }
    catch (e) {
      dispatchCheckout({ type: PAYMENT_FAILED, payload: { payment_failed: 'Error in payment' } })
      console.log(e)
      setIsPaying(false)
    }
  }

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

  // useEffect(() => {
  //   return () => dispatchCart({ type: RESET_CART })
  // }, [isPaymentSucceed])

  return (
    <Card
      is='form'
      onSubmit={handleSubmit}
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
        {
          paymentMethod.type !== 'paypal' &&
          <Button
            id='stripe__button'
            type='submit'
            appearance='primary'
            intent='success'
            height={40}
            paddingX={56}
          >
            {
              shippingMethod && !isPaying &&
              <Label name={paymentTextUtils(paymentMethod, total + shippingMethod.price)} />
            }
            {
              isPaying &&
              <Spinner />
            }
          </Button>
        }
        {
          paymentMethod.type === 'paypal' &&
          <Button appearance='primary' intent='warning' color='blue'>
            Buy with PayPal Checkout
            <img
              src='/paypal_icon.png'
              alt='paypal_icon'
              style={{ width: 25, height: 'auto' }}
            />
          </Button>
        }
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
  )
}

export default injectStripe(CheckoutForm)
