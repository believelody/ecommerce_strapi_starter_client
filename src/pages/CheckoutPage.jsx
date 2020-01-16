import React from 'react'
import { Pane, Heading } from 'evergreen-ui'
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from '../components/forms/CheckoutForm'


const CheckoutPage = () => {
  return (
    <StripeProvider apiKey={process.env.STRIPE_PUBLIC_KEY}>
      <Elements>
        <Pane
          position='relative'
          height='100vh'
          display='flex'
          flexDirection='column'
          alignItems='center'
          paddingTop='10%'
          background='tint1'
        >
          <Heading size={700} paddingY={32}>Here's your checkout process</Heading>
          <CheckoutForm />
        </Pane>
      </Elements>
    </StripeProvider>
  )
}

export default CheckoutPage
