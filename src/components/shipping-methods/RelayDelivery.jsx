import React, { useEffect } from 'react'
import { Pane, Button } from 'evergreen-ui'
import ShippingMethodOptions from './ShippingMethodOptions'
import { useAppHooks } from '../../context'
import { SHIPPING_METHOD } from '../../reducers/checkoutReducer'

const RelayDelivery = ({ options, currentIndex }) => {
    const { useCheckout } = useAppHooks()
    const [checkoutState, dispatchCheckout] = useCheckout

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
            <Button>Pick a relay point</Button>
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
