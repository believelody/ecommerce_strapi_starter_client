import React, { useState } from 'react'
import { Pane, Text } from 'evergreen-ui'
import Tabs from './Tabs'
import relayDeliveryOptions from '../../mock/relayPoint.mock'
import homeDeliveryOptions from '../../mock/homeDelivery.mock'
import RelayDelivery from '../shipping-methods/RelayDelivery'
import HomeDelivery from '../shipping-methods/HomeDelivery'

const ShippingMethodsTab = () => {
    const [currentIndex, getCurrentIndexFromChild] = useState(0)

    return (
        <Pane>
            <Tabs
                getCurrentIndexFromChild={getCurrentIndexFromChild}
                elements={[
                    {
                        content: <RelayDelivery currentIndex={currentIndex} options={relayDeliveryOptions} />,
                        label: 'relay-point',
                        tab: <Text size={500}>Relay Point</Text>
                    },
                    {
                        content: <HomeDelivery currentIndex={currentIndex} options={homeDeliveryOptions} />,
                        label: 'home-delivery',
                        tab: <Text size={500}>Home Delivery</Text>
                    }
                ]}
            />
        </Pane>
    )
}

export default ShippingMethodsTab
