import React from 'react'
import { Pane, Text, Strong } from 'evergreen-ui'
import { useAppHooks } from '../../context'

const DetailAmountCheckout = () => {
    const { useCart, useCheckout } = useAppHooks()
    const [{total}, dispatchCart] = useCart
    const [{shippingMethod}, dispatchCheckout] = useCheckout

    return (
        shippingMethod &&
        <Pane paddingY={16}>
            <Pane width={200} display='flex' justifyContent='space-between'>
                <Text>Shipping cost</Text>
                <Text>$ {shippingMethod.price}</Text>
            </Pane>
            <Pane width={200} display='flex' justifyContent='space-between' borderBottom>
                <Strong>Total purchase</Strong>
                <Strong>{`$ ${(total + shippingMethod.price).toFixed(2)}`}</Strong>
            </Pane>
        </Pane>
    )
}

export default DetailAmountCheckout