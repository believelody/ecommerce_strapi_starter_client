import React, { useEffect } from 'react'
import { useAppHooks } from '../../context'
import ShippingMethodOptions from './ShippingMethodOptions'
import { Pane } from 'evergreen-ui'
import { SHIPPING_METHOD } from '../../reducers/checkoutReducer'

const HomeDelivery = ({ currentIndex, options }) => {
    const { useCheckout } = useAppHooks()
    const [checkoutState, dispatchCheckout] = useCheckout

    useEffect(() => {
        if (currentIndex === 1) {
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

export default HomeDelivery
