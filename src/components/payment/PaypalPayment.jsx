import React from 'react'
import { Pane, Paragraph } from 'evergreen-ui'

const PaypalPayment = () => {
    return (
        <Pane padding={24}>
            <Paragraph>
                This is paypal payment. Once you click on <i>"Buy with Paypal Checkout"</i>, you will be redirected to paypal process checkout
            </Paragraph>
            <img 
                src='/paypal_logo.svg' 
                alt='paypal_logo' 
                style={{width: 100, height: 'auto', marginTop: 16}}
            />
        </Pane>
    )
}

export default PaypalPayment
