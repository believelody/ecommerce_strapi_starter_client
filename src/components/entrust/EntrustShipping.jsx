import React from 'react'
import { Pane } from 'evergreen-ui'

const EntrustShipping = () => {
    return (
        <Pane height={120} width='auto' marginTop={8}>
            <img
                src='shipping_carrier.png'
                alt='shipping-entrust'
                style={{ width: 'auto', height: '100%' }}
            />
        </Pane>
    )
}

export default EntrustShipping
