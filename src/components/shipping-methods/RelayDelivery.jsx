import React, { useEffect } from 'react'
import { Pane, Button } from 'evergreen-ui'
import ShippingMethodOptions from './ShippingMethodOptions'
import { useAppHooks } from '../../context'
import { SHIPPING_METHOD } from '../../reducers/checkoutReducer'
import { OPEN_SIDE_SHEET } from '../../reducers/sideSheetReducer'

const RelayDelivery = ({ options, currentIndex }) => {
    const { useCheckout, useSideSheet } = useAppHooks()
    const [checkoutState, dispatchCheckout] = useCheckout
    const [sideSheetState, dispatchSideSheet] = useSideSheet

    const openSideSheet = e => {
        dispatchSideSheet({
            type: OPEN_SIDE_SHEET,
            payload: {
                title: 'Relay Point',
                description: 'Pick your relay point',
                content: (
                    <Pane>Yes we can</Pane>
                )
            }
        })
    }
    useEffect(() => {
        if (currentIndex === 0) {
            dispatchCheckout({
                type: SHIPPING_METHOD,
                payload: {
                    shippingMethod: options[0]
                }
            })
        }
    }, [currentIndex])
    
    return (
        <Pane paddingY={8} paddingX={16}>
            <Button onClick={openSideSheet}>Pick a relay point</Button>
            <ShippingMethodOptions
                options={options}
                label="Choose a shipping method"
                type={SHIPPING_METHOD}
                obj="shippingMethod"
                callback={
                    (options, value, type, obj) => dispatchCheckout({
                        type,
                        payload: {
                            [obj]: options.find(option => option.value === value)
                        }
                    })
                }
            />
        </Pane>
    )
}

export default RelayDelivery
