import React, { useState } from 'react'
import { Pane, Tablist, Paragraph } from 'evergreen-ui'
import HomeTab from './HomeTab'
import CartTab from './CartTab'

const TabMenu = () => {
  const [index, setIndex] = useState(0)

  const selectIndex = i => setIndex(i)

  return (
    <Pane marginTop={10} elevation={1}>
      <Pane borderBottom with='100%'>
        <Tablist paddingY={5} marginRight='auto'>
          <HomeTab index={index} handleSelect={selectIndex} />
          <CartTab index={index} handleSelect={selectIndex} />
        </Tablist>
      </Pane>
      <Pane
        id='panel-home'
        role="tabpanel"
        aria-labelledby='home'
        aria-hidden={index !== 0}
        display={index === 0 ? 'block' : 'none'}
      >
        <Paragraph>Home</Paragraph>
      </Pane>
      <Pane
        id='panel-cart'
        role="tabpanel"
        aria-labelledby='cart'
        aria-hidden={index !== 1}
        display={index === 1 ? 'block' : 'none'}
      >
        <Paragraph>Cart</Paragraph>
      </Pane>
    </Pane>
  )
}

export default TabMenu
