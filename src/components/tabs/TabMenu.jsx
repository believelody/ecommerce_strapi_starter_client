import React, { useState } from 'react'
import { Pane, Tablist, Paragraph } from 'evergreen-ui'
import HomeTab from './HomeTab'
import CartTab from './CartTab'
import EmptyCart from '../cart/EmptyCart'
import CartSidenav from '../cart/CartSidenav'
import { useAppHooks } from '../../context'
import Tabs from './Tabs'

const TabMenu = () => {
  const { useCart } = useAppHooks()
  const [{cart}, dispatchCart] = useCart

  // const [index, setIndex] = useState(1)

  // const selectIndex = i => setIndex(i)
  
  return (
    // <Pane marginTop={10} elevation={1}>
    //   <Pane borderBottom with='100%'>
    //     <Tablist paddingY={5} display='flex'>
    //       <HomeTab index={index} handleSelect={selectIndex} />
    //       <CartTab index={index} handleSelect={selectIndex} />
    //     </Tablist>
    //   </Pane>
    //   <Pane
    //     id='panel-home'
    //     role="tabpanel"
    //     aria-labelledby='home'
    //     aria-hidden={index !== 0}
    //     display={index === 0 ? 'block' : 'none'}
    //   >
    //     <Paragraph>Home</Paragraph>
    //   </Pane>
    //   <Pane
    //     id='panel-cart'
    //     role="tabpanel"
    //     aria-labelledby='cart'
    //     aria-hidden={index !== 1}
    //     display={index === 1 ? 'block' : 'none'}
    //   >
    //     { cart.length > 0 ? <CartSidenav /> : <EmptyCart /> }
    //   </Pane>
    // </Pane>
    <Tabs
      elements={[
        {
          content: <Paragraph>Home</Paragraph>,
          label: 'home',
          tab: <HomeTab />
        },
        {
          content: cart.length > 0 ? <CartSidenav /> : <EmptyCart />,
          label: 'cart',
          tab: <CartTab />
        }
      ]}
    />
  )
}

export default TabMenu
