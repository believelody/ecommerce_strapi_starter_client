import React from 'react'
import { Pane } from 'evergreen-ui'
import StripeCheckout from '../stripe/StripeCheckout'

const PaymentForm = () => {
    return (
        <Pane padding={16} margin={16} border='muted' background='tealTint'>
            <StripeCheckout />
        </Pane>
    )
}

export default PaymentForm
