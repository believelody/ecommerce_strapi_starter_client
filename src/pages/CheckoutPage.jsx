import React from 'react'
import { Pane, Heading, Paragraph } from 'evergreen-ui'
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from '../components/forms/CheckoutForm'
import { useAppHooks } from '../context';
import { Redirect } from 'react-router-dom';
import EntrustPayment from '../components/entrust/EntrustPayment';
import EntrustShipping from '../components/entrust/EntrustShipping';
import PaymentSucceedCard from '../components/payment/PaymentSucceedCard';
import CheckoutCard from '../components/checkout/CheckoutCard';


const CheckoutPage = () => {
  const  { useCart, useCheckout } = useAppHooks()
  const [{cart}, dispatchCart] = useCart
  const [{isPaymentSucceed}, dispatchCheckout] = useCheckout

  return (
    cart.length > 0 ?
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
          {
            isPaymentSucceed ? <PaymentSucceedCard /> : <CheckoutCard />
          }
          <Pane
            width='100%'
            bottom={8}
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
