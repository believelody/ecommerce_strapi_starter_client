import React from 'react'
import { Pane } from 'evergreen-ui'

const ContentSideSheet = ({children}) => {
    return (
        <Pane background="tint1" padding={16}>
            {children}
        </Pane>
    )
}

export default ContentSideSheet
