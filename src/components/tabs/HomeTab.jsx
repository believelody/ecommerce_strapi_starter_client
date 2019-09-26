import React from 'react'
import { Pane, Tab, Text } from 'evergreen-ui'

const HomeTab = ({index, handleSelect}) => (
  <Tab
    onSelect={() => handleSelect(0)}
    isSelected={index === 0}
    aria-controls={`panel-home`}
    id='home'
    width='50%'
  >
    <Text size={600}>Home</Text>
  </Tab>
)

export default HomeTab
