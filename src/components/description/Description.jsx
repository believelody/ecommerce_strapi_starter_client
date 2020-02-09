import React from 'react'
import { Paragraph, Pane } from 'evergreen-ui'
import ReactMarkdown from 'react-markdown'

const Description = ({ text }) => (
  <Pane marginX={8}>
    <Paragraph>
      <ReactMarkdown source={text} escapeHtml={false} />
    </Paragraph>
  </Pane>
)

export default Description
