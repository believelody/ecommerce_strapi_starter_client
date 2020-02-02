import React from 'react'
import { Pane, InlineAlert } from 'evergreen-ui'
import Segments from '../segments/Segments'
import Label from '../label/Label'

const SegmentsField = ({ options, handleValue, value, error, title }) => {
    return (
        <Pane display='block' marginBottom={16}>
            {
                title && <Label name={title} />
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
