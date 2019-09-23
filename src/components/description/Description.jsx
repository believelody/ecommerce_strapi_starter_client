import React from 'react'
import { Text, Pane } from 'evergreen-ui'
import isMobile from '../../utils/isMobile.utils'

const Description = ({ name }) => (
  <Pane>
    <Text size={isMobile() ? 300 : 400}>{name}</Text>
  </Pane>
)

export default Description
