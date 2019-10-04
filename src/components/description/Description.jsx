import React from 'react'
import { Paragraph, Pane } from 'evergreen-ui'
import isMobile from '../../utils/isMobile.utils'

const Description = ({ text }) => (
  <Pane>
    <Paragraph>{text}</Paragraph>
  </Pane>
)

export default Description
