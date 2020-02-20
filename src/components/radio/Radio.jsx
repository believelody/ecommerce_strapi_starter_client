import React, { useState, useEffect } from 'react'
import { RadioGroup } from 'evergreen-ui'

const Radio = ({ cb = null, options, label, type = null, obj = null, defaultValue = null }) => {
    const OPTIONS = options.map(option => ({ label: option.label, value: `${option.value}` }))
    const [value, setValue] = useState(defaultValue || 0)

    const handleValue = value => {
        setValue(value)
        if (cb) cb(options, value, type, obj)
    }

    useEffect(() => {
        if (defaultValue) {
            setValue(defaultValue)
        }
    }, [defaultValue])

    return (
        <RadioGroup
            label={label}
            value={`${value}`}
            options={OPTIONS}
            onChange={v => handleValue(v)}
        />
    )
}

export default Radio
