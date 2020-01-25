import React from 'react'
import AddressesList from '../addresses/AddressesList'
import { useAppHooks } from '../../context'
import addressesMock from '../../mock/addresses.mock'
import { IS_SAME, SHIPPING_ADDRESS } from '../../reducers/checkoutReducer'
import { toaster } from 'evergreen-ui'

const ProfileAddresses = () => {
    const { useCheckout } = useAppHooks()
    const [checkoutState, dispatchCheckout] = useCheckout

    const selectAddress = (options, value, type, key) => {
        dispatchCheckout({
            type,
            payload: {
                [key]: options.find(option => option.value === value)
            }
        })
        dispatchCheckout({ type: IS_SAME })
        toaster.success('You successfully choose your address', {
            id: 'select-address',
            description: 'This will be your new shippping address. By default, it\'s same as billing address.'
        })
    }

    return (
        <AddressesList
            addresses={addressesMock}
            type={SHIPPING_ADDRESS}
            obj="shippingAddress"
            selectAddress={selectAddress}
        />
    )
}

export default ProfileAddresses
