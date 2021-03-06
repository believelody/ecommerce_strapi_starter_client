import React from 'react'
import Tabs from './Tabs'
import ShippingAddress from '../addresses/ShippingAddress'
import BillingAddress from '../addresses/BillingAddress'
import { useAppHooks } from '../../context'
import { Text, Paragraph } from 'evergreen-ui'

const AddressCheckoutTab = () => {
    const { useProfile, useCheckout } = useAppHooks()
    const [{ profile }, dispatchProfile] = useProfile
    const [{ isSame }, dispatchCheckout] = useCheckout

    return (
        <Tabs
            elements={[
                {
                    content: <ShippingAddress profile={profile} />,
                    label: 'shipping',
                    tab: <Text size={500}>Shipping Address</Text>
                },
                {
                    content: isSame ?
                    <Paragraph textAlign='center' marginY='auto' paddingY={50} height='auto'>
                        Same as shipping address
                    </Paragraph> :
                    <BillingAddress profile={profile} />,
                    label: 'billing',
                    tab: <Text size={500}>Billing Address</Text>
                }
            ]}
        />
    )
}

export default AddressCheckoutTab
