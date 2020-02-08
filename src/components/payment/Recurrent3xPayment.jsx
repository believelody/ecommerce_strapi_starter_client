import React from 'react'
import { Pane, Paragraph } from 'evergreen-ui'
import StripeCheckout from '../stripe/StripeCheckout'

const Recurrent3xPayment = ({ currentIndex }) => {
    return (
        <Pane paddingY={16} paddingX={8}>
            <Paragraph marginBottom={24}>
                This is 3 times recurrent payment. It will credited.
            </Paragraph>
            {
                currentIndex === 3 &&
                <Pane margin={8} padding={16} background='tint1' border>
                    <StripeCheckout />
                </Pane>
            }
        </Pane>
    )
}

export default Recurrent3xPayment
