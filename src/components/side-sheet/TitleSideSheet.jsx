import React from 'react'
import { Pane, Heading, Paragraph } from 'evergreen-ui'

const TitleSideSheet = ({ title, description }) => {
    return (
        <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="white">
            <Pane padding={16}>
                <Heading size={600}>{title}</Heading>
                {description && <Paragraph size={400}>{description}</Paragraph>}
            </Pane>
        </Pane>
    )
}

export default TitleSideSheet
