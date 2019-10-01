import React from 'react'
import { Pane, Pill, IconButton } from 'evergreen-ui'
import Label from '../label/Label'

const OptionQuantity = ({quantity, decrease, increase}) => {
  return (
    <Pane display='flex' justifyContent='center' alignItems='center'>
      <Label width='25%' name='Quantity' size={300} />
      <IconButton appearance='minimal' size={300} icon='minus' onClick={decrease} />
      <Pill marginX={15}>{quantity}</Pill>
      <IconButton appearance='minimal' size={300} icon='add' onClick={increase} />
    </Pane>
  )
}

export default OptionQuantity
