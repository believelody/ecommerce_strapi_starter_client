import React, { useState } from 'react'
import { Paragraph } from 'evergreen-ui'
import HomeTab from './HomeTab'
import CartTab from './CartTab'
import EmptyCart from '../cart/EmptyCart'
import CartSidenav from '../cart/CartSidenav'
import { useAppHooks } from '../../context'
import Tabs from './Tabs'

const TabMenu = () => {
  const { useCart } = useAppHooks()
  const [{cart}, dispatchCart] = useCart
  
  return (
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
