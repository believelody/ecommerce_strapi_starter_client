import React from 'react'
import { Pane, SegmentedControl } from 'evergreen-ui'
import Label from '../label/Label'

const OptionSize = ({sizes, value, handleValue}) => {
  return (
    <Pane display='flex'>
      <Label width='25%' name='Size' size={300} />
      <SegmentedControl
        options={sizes}
        value={value}
        onChange={value => handleValue(value)}
        width='75%'
        height={24}
      />
    </Pane>
  )
}

export default OptionSize
