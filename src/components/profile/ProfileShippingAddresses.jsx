import React, { useState } from 'react'
import { toaster, Card, Button, Icon, Pane, Heading } from 'evergreen-ui'
import AddressesList from '../addresses/AddressesList'
import { useAppHooks } from '../../context'
import { IS_SAME, SHIPPING_ADDRESS } from '../../reducers/checkoutReducer'
import api from '../../api'
import { OPEN_SIDE_SHEET_CONFIRM } from '../../reducers/sideSheetReducer'
import ShippingAddressForm from '../forms/ShippingAddressForm'
import UpdateList from '../list/UpdateList'
import { OPEN_MODAL } from '../../reducers/modalReducer'
import { UPDATE_PROFILE } from '../../reducers/profileReducer'
import { objToText } from '../../utils/address.utils'

const ProfileShippingAddresses = () => {
    const { useCheckout, useSideSheet, useModal, useProfile, useLoading } = useAppHooks()
    const [checkoutState, dispatchCheckout] = useCheckout
    const [sideSheetState, dispatchSideSheet] = useSideSheet
    const [modalState, dispatchModal] = useModal
    const [{profile}, dispatchProfile] = useProfile
    const [loadingState, dispatchLoading] = useLoading

    const [displaySetting, setDisplaySetting] = useState(false)

    const toggleSetting = () => setDisplaySetting(prevDisplaySetting => !prevDisplaySetting)

    const addNewAddress = () => {
        dispatchSideSheet({
            type: OPEN_SIDE_SHEET_CONFIRM,
            payload: {
                title: 'Add a new shipping address',
                content: ({handleClose}) => <ShippingAddressForm handleClose={handleClose} mode='create' />
            }
        })
    }

    const editAddress = index => {
        dispatchSideSheet({
            type: OPEN_SIDE_SHEET_CONFIRM,
            payload: {
                title: 'Edit your shipping address',
                content: ({handleClose}) => <ShippingAddressForm handleClose={handleClose} mode='edit' indexAddress={index} />
            }
        })
    }

    const selectAddress = async (options, value, type, obj) => {
        let updateProfile = await api.profile.changeShippingAddress(profile._id, value)
        dispatchCheckout({
            type,
            payload: {
                [obj]: updateProfile.shippingaddresses[updateProfile.selectedShippingAddress]
            }
        })
        dispatchCheckout({ type: IS_SAME })
        dispatchProfile({
            type: UPDATE_PROFILE,
            payload: {
                profile: {
                    ...profile,
                    selectedShippingAddress: updateProfile.selectedShippingAddress
                }
            }
        })
        toaster.success('You successfully choose your address', {
            id: 'select-address',
            description: 'This will be your new shippping address.'
        })
    }

    const deleteAddress = async index => {
        let id = profile.shippingaddresses[index]._id
        try {
            if (id) {
                await api.shipping.deleteAddress(id)
            }
            let updateProfile = await api.profile.changeShippingAddress(profile._id, profile.selectedShippingAddress === index ? 0 : profile.selectedShippingAddress)
            if (updateProfile.shippingaddresses.length === 1) {
                updateProfile = await api.profile.changeShippingAddress(profile._id, 0)
            }
            dispatchCheckout({
                type: SHIPPING_ADDRESS,
                payload: {
                    shippingAddress: updateProfile.shippingaddresses.length > 0 ? updateProfile.shippingaddresses[0] : null
                }
            })
            dispatchProfile({
                type: UPDATE_PROFILE,
                payload: {
                    profile: {
                        ...profile,
                        selectedShippingAddress: updateProfile.selectedShippingAddress,
                        shippingaddresses: updateProfile.shippingaddresses
                    }
                }
            })
            toaster.success('This address has been successfully deleted')
        } catch (e) {
            console.log(e)
        }
    }

    const handleDelete = index => {
        dispatchModal({
            type: OPEN_MODAL,
            payload: {
                title: 'Delete an address',
                msg: 'Are you sure ? Once deleted you cannot go back !',
                status: 'danger',
                action: () => deleteAddress(index)
            }
        })
    }

    return (
        profile &&
        <Card border minWidth={320} minHeight={300} position='relative'>
            <Pane display='block'>
                <Pane borderBottom>
                    <Heading textAlign='center' size={500} paddingY={8}>Shipping Addresses</Heading>
                </Pane>
                <Pane borderBottom display='flex' justifyContent='space-between'>
                    <Button
                        appearance={displaySetting ? 'primary' : 'minimal'}
                        intent='warning'
                        onClick={toggleSetting}
                    >
                        Settings
                </Button>
                    <Button appearance='minimal' onClick={addNewAddress}>
                        <Icon icon='plus' marginRight={8} /> Add a new address
                </Button>
                </Pane>
            </Pane>
            {
                !displaySetting ?
                <AddressesList
                    addresses={profile.shippingaddresses}
                    type={SHIPPING_ADDRESS}
                    obj="shippingAddress"
                    selectAddress={selectAddress}
                    defaultValue={profile.selectedShippingAddress}
                />
                :
                <UpdateList
                    list={
                        profile.shippingaddresses.map((addr, i) => ({
                            label: objToText({
                                address: addr.address,
                                address2: addr.address2,
                                zip: addr.zip,
                                city: addr.city,
                            }),
                            value: i,
                            related: addr
                        }))
                    }
                    handleEdit={editAddress}
                    handleDelete={handleDelete}
                    title='Edit or Delete an address'
                    selected={profile.selectedShippingAddress}
                />
            }
        </Card>
    )
}

export default ProfileShippingAddresses
