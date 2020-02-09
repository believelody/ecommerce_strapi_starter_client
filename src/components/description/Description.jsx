import React from 'react'
import { Pane, Text } from 'evergreen-ui'
import ReactMarkdown from 'react-markdown'

const Description = ({ text }) => (
  <Pane marginX={8}>
    <Text>
      <ReactMarkdown source={text} escapeHtml={false} />
    </Text>
  </Pane>
)

export default Description
