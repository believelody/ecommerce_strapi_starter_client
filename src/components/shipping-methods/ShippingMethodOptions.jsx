import React, { useState } from 'react'
import { Card, RadioGroup } from 'evergreen-ui'
import { useAppHooks } from '../../context'
import { SHIPPING_METHOD } from '../../reducers/checkoutReducer'

const ShippingMethodOptions = ({ options, label }) => {
    const { useCheckout } = useAppHooks()
    const [checkoutState, dispatchCheckout] = useCheckout

    const OPTIONS = options.map(option => ({label: option.label, value: option.value}))
    const [value, setValue] = useState(OPTIONS[0].value)

    const handleValue = value => {
        setValue(value)
        dispatchCheckout({
            type: SHIPPING_METHOD,
            payload: {
                shippingMethod: options.find(option => option.value === value)
            }
        })
    }

    return (
        <Card display='block'>
            <RadioGroup
                label={label}
                value={value}
                options={OPTIONS}
                onChange={v => handleValue(v)}
            />
        </Card>
    )
}

export default ShippingMethodOptions
