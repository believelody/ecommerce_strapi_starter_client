import React, { useState } from 'react'
import { RadioGroup } from 'evergreen-ui'

const Radio = ({ cb = null, options, label, type = null, obj = null }) => {
    const OPTIONS = options.map(option => ({ label: option.label, value: option.value }))
    const [value, setValue] = useState(OPTIONS[0].value)

    const handleValue = value => {
        setValue(value)
        if (cb) cb(options, value, type, obj)
    }
    return (
        <RadioGroup
            label={label}
            value={value}
            options={OPTIONS}
            onChange={v => handleValue(v)}
        />
    )
}

export default Radio
