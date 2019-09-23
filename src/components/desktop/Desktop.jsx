import React from 'react'
import { Pane, Text } from 'evergreen-ui'

const Desktop = () => {
  return (
    <Pane
      display='flex'
      justifyContent="center"
      alignItems="center"
      padding={0}
      margin={0}
      height='97vh'
    >
      <Pane width='25%' height='100%' margin={0} padding={0}>
        <Text>Pane 1</Text>
      </Pane>
      <Pane width='75%' height='100%' margin={0} padding={0}>
        <Text>Pane 2</Text>
      </Pane>
    </Pane>
  )
}

export default Desktop
