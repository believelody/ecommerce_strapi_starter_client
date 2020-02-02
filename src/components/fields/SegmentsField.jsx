import React from 'react'
import { Pane, InlineAlert } from 'evergreen-ui'
import Segments from '../segments/Segments'
import Label from '../label/Label'

const SegmentsField = ({ options, handleValue, value, error, title, marginBottom = 4 }) => {
    return (
        <Pane display='block'>
            {
                title && <Pane marginBottom={marginBottom}><Label name={title} /></Pane>
            }
            <Segments
                options={options}
                handleValue={handleValue}
                value={value}
            />
            {
                error && <InlineAlert intent='danger'>{error}</InlineAlert>
            }
        </Pane>
    )
}

export default SegmentsField
