import React, { useState } from 'react'
import HomeTab from './HomeTab'
import CartTab from './CartTab'
import EmptyCart from '../cart/EmptyCart'
import CartSidenav from '../cart/CartSidenav'
import { useAppHooks } from '../../context'
import Tabs from './Tabs'
import HomeMenu from '../menu/HomeMenu'

const TabMenu = () => {
  const { useCart } = useAppHooks()
  const [{cart}, dispatchCart] = useCart
  
  return (
    <Tabs
      elements={[
        {
          content: <HomeMenu />,
          label: 'menu',
          tab: <HomeTab />
        },
        {
          content: cart.length > 0 ? <CartSidenav /> : <EmptyCart />,
          label: 'cart',
          tab: <CartTab />
        }
      ]}
      updateIndex={cart.length > 0 ? 1 : 0}
    />
  )
}

export default TabMenu
