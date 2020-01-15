import React from 'react'
import { Card } from 'evergreen-ui'
import Radio from '../radio/Radio'

const ShippingMethodOptions = ({ callback, options, label, type, obj }) => {

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
