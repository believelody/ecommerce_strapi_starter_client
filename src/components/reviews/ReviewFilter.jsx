import React from 'react'
import { Pane, SegmentedControl, Text } from 'evergreen-ui'

const ReviewFilter = ({ value, handleValue }) => {
    const OPTIONS = [
        {value: 15, label: '15'},
        {value: 30, label: '30'},
        {value: 50, label: '50'},
    ]
    return (
        <Pane marginBottom={8}>
            <Text>Reviews filter</Text>
            <SegmentedControl
                options={OPTIONS}
                value={value}
                onChange={value => handleValue(value)}
                width={120}
            />
        </Pane>
    )
}

export default ReviewFilter
