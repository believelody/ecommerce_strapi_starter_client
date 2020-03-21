import React from 'react'
import { Pane } from 'evergreen-ui'

const Page = ({ children, bg, ...rest }) => {
    return (
        <Pane
            width='100%'
            minHeight='100vh'
            background={bg}
            {...rest}
        >
            {children}
        </Pane>
    )
}

export default Page
