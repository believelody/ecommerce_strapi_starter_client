import React from 'react'
import { Pane, Heading, Paragraph } from 'evergreen-ui'
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from '../components/forms/CheckoutForm'
import { useAppHooks } from '../context';
import { Redirect } from 'react-router-dom';
import EntrustPayment from '../components/entrust/EntrustPayment';
import EntrustShipping from '../components/entrust/EntrustShipping';


const CheckoutPage = () => {
  const  { useCart } = useAppHooks()
  const [{cart}, dispatchCart] = useCart

  return (
    cart.length > 0 ?
    <StripeProvider apiKey={process.env.STRIPE_PUBLIC_KEY}>
      <Elements>
        <Pane
          minHeight='100vh'
          display='flex'
          flexDirection='column'
          alignItems='center'
          background='tint1'
        >
            <Pane paddingY={24} textAlign='center'>
              <Heading size={700}>Here's your checkout process</Heading>
              <Paragraph>
                Make your choice by clicking on a title line and fill/read information needed.
              </Paragraph>
            </Pane>
          <CheckoutForm />
          <Pane width='100%' display='flex' alignItems='center' justifyContent='space-evenly'>
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
