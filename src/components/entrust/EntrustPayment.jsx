import React from 'react'
import { Pane } from 'evergreen-ui'
import Image from '../image/Image'

const EntrustPayment = () => {
    return (
        <Pane height={50} width='auto'>
            <Image
                src='/payment_gateway.png'
                alt='payment-entrust'
            />
        </Pane>
    )
}

export default EntrustPayment
