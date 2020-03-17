import React, { useEffect, useState } from 'react'
import { Pane } from 'evergreen-ui'
import { Elements, StripeProvider } from 'react-stripe-elements';
import { useAppHooks } from '../context';
import { Redirect } from 'react-router-dom';
import EntrustPayment from '../components/entrust/EntrustPayment';
import EntrustShipping from '../components/entrust/EntrustShipping';
import PaymentSucceedCard from '../components/payment/PaymentSucceedCard';
import CheckoutCard from '../components/checkout/CheckoutCard';
import { RESET_CART } from '../reducers/cartReducer';
import { deleteCart } from '../utils/cart.utils';
import { OPEN_MODAL_CHILDREN } from '../reducers/modalReducer';


const CheckoutPage = () => {
  const  { useCart, useCheckout, useModal, history } = useAppHooks()
  const [{cart}, dispatchCart] = useCart
  const [{isPaymentSucceed}, dispatchCheckout] = useCheckout
  const [modalState, dispatchModal] = useModal

  const [isRedirecting, setRedirecting] = useState(false)

  useEffect(() => {
    if (isPaymentSucceed) {
      dispatchModal({
        type: OPEN_MODAL_CHILDREN,
        payload: {
          children: PaymentSucceedCard,
          noClose: true
        }
      })
      setTimeout(() => {
        deleteCart()
        setRedirecting(true)
        dispatchCart({ type: RESET_CART })
      }, 5000);
    }
  }, [isPaymentSucceed])

  return (
    !isRedirecting > 0 ?
    <StripeProvider apiKey={process.env.STRIPE_PUBLIC_KEY}>
      <Elements>
        <Pane
          minHeight='100vh'
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          background='tint1'
          position='relative'
        >
          <CheckoutCard />
          <Pane
            width='100%'
            bottom={12}
            display='flex'
            alignItems='center'
            justifyContent='space-evenly'
            position='relative'
          >
            <EntrustPayment />
            <EntrustShipping />
          </Pane>
        </Pane>
      </Elements>
    </StripeProvider>
    :
    <Redirect to='/' />
  )
}

export default CheckoutPage
