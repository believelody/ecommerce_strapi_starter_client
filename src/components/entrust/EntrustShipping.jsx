import React from 'react'
import { Pane } from 'evergreen-ui'
import Image from '../image/Image'

const EntrustShipping = () => {
    return (
        <Pane height={100}>
            <Image
                src='/shipping_carrier.png'
                alt='shipping-entrust'
            />
        </Pane>
    )
}

export default EntrustShipping
