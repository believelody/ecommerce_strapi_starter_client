import React from 'react'
import { SegmentedControl } from 'evergreen-ui'

const Segments = ({ options, handleValue, value, width = 240 }) => {
    return (
        <SegmentedControl
            width={width}
            options={options}
            value={value}
            onChange={handleValue}
        />
    )
}

export default Segments
