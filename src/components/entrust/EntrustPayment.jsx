import React from 'react'
import { Pane } from 'evergreen-ui'

const EntrustPayment = () => {
    return (
        <Pane height={50} width='auto' marginTop={32}>
            <img
                src='payment_gateway.png'
                alt='payment-entrust'
                style={{ width: '100%', height: '100%'}}
            />
        </Pane>
    )
}

export default EntrustPayment
