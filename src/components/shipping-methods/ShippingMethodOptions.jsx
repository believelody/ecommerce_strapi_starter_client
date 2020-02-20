import React from 'react'
import { Card } from 'evergreen-ui'
import Radio from '../radio/Radio'
import { useAppHooks } from '../../context'

const ShippingMethodOptions = ({ callback, options, label, type, obj }) => {
    const { useCheckout } = useAppHooks()
    const [{shippingMethod}, dispatchCheckout] = useCheckout

    return (
        <Card display='block'>
            <Radio
                options={options}
                label={label}
                type={type}
                obj={obj}
                cb={callback}
            />
        </Card>
    )
}

export default ShippingMethodOptions
