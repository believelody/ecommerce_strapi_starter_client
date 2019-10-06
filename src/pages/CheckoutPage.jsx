import React, { useEffect, useState } from 'react'
import { Pane } from 'evergreen-ui'
import CheckoutForm from '../components/forms/CheckoutForm'

const CheckoutPage = () => {
  return (
    <Pane
      position='relative'
      minHeight='98vh'
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <CheckoutForm />
    </Pane>
  )
}

export default CheckoutPage
