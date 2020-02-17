import React, { useEffect } from 'react'
import AddressesList from '../addresses/AddressesList'
import { useAppHooks } from '../../context'
import addressesMock from '../../mock/addresses.mock'
import { IS_SAME, SHIPPING_ADDRESS } from '../../reducers/checkoutReducer'
import { toaster } from 'evergreen-ui'
import api from '../../api'

const ProfileAddresses = () => {
    const { useCheckout, useProfile } = useAppHooks()
    const [checkoutState, dispatchCheckout] = useCheckout
    const [{profile}, dispatchProfile] = useProfile

    const selectAddress = async (options, value, type, obj) => {
        await api.profile.changeAddress(profile._id, options.find(option => option.value === value).related)
        dispatchCheckout({
            type,
            payload: {
                [obj]: options.find(option => option.value === value).related
            }
        })
        dispatchCheckout({ type: IS_SAME })
        toaster.success('You successfully choose your address', {
            id: 'select-address',
            description: 'This will be your new shippping address. By default, it\'s same as billing address.'
        })
    }

    return (
        profile &&
        <AddressesList
            addresses={profile.shippingaddresses}
            type={SHIPPING_ADDRESS}
            obj="shippingAddress"
            selectAddress={selectAddress}
        />
    )
}

export default ProfileAddresses
