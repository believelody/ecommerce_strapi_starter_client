import React from 'react'
import { Heading, Pane, Strong } from 'evergreen-ui'

const Label = ({ name, size = 500, handleClick, borderBottom = false, paddingBottom = 0 }) => (
  <Pane
    display='flex'
    justifyContent='center'
    alignItems='center'
    borderBottom={borderBottom}
    paddingBottom={paddingBottom}
    width='100%'
    onClick={handleClick}
  >
    <Heading size={size}>
      <Strong>{name}</Strong>
    </Heading>
  </Pane>
)

export default Label
