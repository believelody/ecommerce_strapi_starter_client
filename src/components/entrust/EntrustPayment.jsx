import React from 'react'
import { Pane } from 'evergreen-ui'

const EntrustPayment = () => {
    return (
        <Pane height={50} width='auto' marginTop={16}>
            <img
                src='payment_gateway.png'
                alt='payment-entrust'
                style={{ width: 'auto', maxHeight: 56}}
            />
        </Pane>
    )
}

export default EntrustPayment
