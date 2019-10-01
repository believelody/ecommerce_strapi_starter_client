import React from 'react'
import { Pane, SegmentedControl } from 'evergreen-ui'
import Label from '../label/Label'

const OptionColor = ({colors, value, handleValue}) => {
  return (
    <Pane display='flex'>
      <Label width='25%' name='Color' size={300} />
      <SegmentedControl
        options={colors}
        value={value}
        onChange={value => handleValue(value)}
        width='75%'
        height={24}
      />
    </Pane>
  )
}

export default OptionColor
