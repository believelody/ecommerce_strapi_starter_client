import React from 'react'
import { Pane } from 'evergreen-ui'

const ContentSideSheet = ({content}) => {
    return (
        <Pane background="tint1" padding={16}>
            {content}
        </Pane>
    )
}

export default ContentSideSheet
