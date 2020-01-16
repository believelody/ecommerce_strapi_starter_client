import React from 'react'
import { Pane } from 'evergreen-ui'
import StripeCheckout from '../stripe/StripeCheckout'

const PaymentForm = () => {
    return (
        <Pane paddingY={8} paddingX={16}>
            <StripeCheckout />
        </Pane>
    )
}

export default PaymentForm
