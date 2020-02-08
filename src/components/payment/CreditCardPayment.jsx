import React from 'react'
import { Pane, Paragraph } from 'evergreen-ui'
import StripeCheckout from '../stripe/StripeCheckout'

const CreditCardPayment = ({ currentIndex }) => {
    return (
        <Pane paddingY={16} paddingX={8}>
            <Paragraph marginBottom={24}>
                This is credit card payment. The total amount of your purchase will be credited.
            </Paragraph>
            {
                currentIndex === 0 &&
                <Pane margin={8} padding={16} background='tint1' border>
                    <StripeCheckout />
                </Pane>
            }
        </Pane>
    )
}

export default CreditCardPayment
