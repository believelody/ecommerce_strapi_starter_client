import React from 'react'
import { Heading, Pane } from 'evergreen-ui'

const Label = ({ name }) => (
  <Pane>
    <Heading size={500}>{name}</Heading>
  </Pane>
)

export default Label
