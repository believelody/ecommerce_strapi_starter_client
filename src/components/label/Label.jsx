import React from 'react'
import { Heading, Pane, Strong } from 'evergreen-ui'

const Label = ({ name }) => (
  <Pane>
    <Heading size={500}>
      <Strong>{name}</Strong>
    </Heading>
  </Pane>
)

export default Label
