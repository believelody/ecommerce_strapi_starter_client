import React from 'react'
import { Card } from 'evergreen-ui'
import { CardElement } from 'react-stripe-elements';

const StripeCheckout = () => {
    return (
        <Card>
            <CardElement id='stripe__input' onReady={input => input.focus()} />
        </Card>
    )
}

export default StripeCheckout
