import React, { useState } from 'react'
import AddressesList from '../addresses/AddressesList'
import { useAppHooks } from '../../context'
import { BILLING_ADDRESS, IS_SAME } from '../../reducers/checkoutReducer'
import { toaster, Button, Icon, Card, Pane, Heading } from 'evergreen-ui'
import api from '../../api'
import BillingAddressForm from '../forms/BillingAddressForm'
import { OPEN_SIDE_SHEET_CONFIRM } from '../../reducers/sideSheetReducer'
import UpdateList from '../list/UpdateList'
import { UPDATE_PROFILE } from '../../reducers/profileReducer'
import { OPEN_MODAL } from '../../reducers/modalReducer'
import { objToText } from '../../utils/address.utils'

const ProfileBillingAddresses = () => {
    const { useCheckout, useSideSheet, useProfile, useModal, useLoading } = useAppHooks()
    const [checkoutState, dispatchCheckout] = useCheckout
    const [sideSheetState, dispatchSideSheet] = useSideSheet
    const [{ profile }, dispatchProfile] = useProfile
    const [modalState, dispatchModal] = useModal
    const [loadingState, dispatchLoading] = useLoading

    const [displaySetting, setDisplaySetting] = useState(false)

    const toggleSetting = () => setDisplaySetting(prevDisplaySetting => !prevDisplaySetting)

    const addNewAddress = () => {
        dispatchSideSheet({
            type: OPEN_SIDE_SHEET_CONFIRM,
            payload: {
                title: 'Add a new billing address',
                content: ({ handleClose }) => <BillingAddressForm handleClose={handleClose} mode='create' />
            }
        })
    }

    const editAddress = index => {
        dispatchSideSheet({
            type: OPEN_SIDE_SHEET_CONFIRM,
            payload: {
                title: 'Edit your billing address',
                content: ({ handleClose }) => <BillingAddressForm handleClose={handleClose} mode='edit' indexAddress={index} />
            }
        })
    }

    const selectAddress = async (options, value, type, obj) => {
        let updateProfile = await api.profile.changeBillingAddress(profile._id, value)
        dispatchCheckout({
            type,
            payload: {
                [obj]: updateProfile.billingaddresses[updateProfile.selectedBillingAddress]
            }
        })
        dispatchCheckout({ type: IS_SAME })
        dispatchProfile({
            type: UPDATE_PROFILE,
            payload: {
                profile: {
                    ...profile,
                    selectedBillingAddress: updateProfile.selectedBillingAddress
                }
            }
        })
        toaster.success('You successfully choose your address', {
            id: 'select-address',
            description: 'This will be your new billing address.'
        })
    }

    const deleteAddress = async index => {
        let id = profile.billingaddresses[index]._id
        try {
            if (id) {
                await api.billing.deleteAddress(id)
            }
            let updateProfile = await api.profile.changeBillingAddress(profile._id, profile.selectedBillingAddress === index ? 0 : profile.selectedBillingAddress)
            if (updateProfile.billingaddresses.length === 1) {
                updateProfile = await api.profile.changeBillingAddress(profile._id, 0)
            }
            dispatchCheckout({
                type: BILLING_ADDRESS,
                payload: {
                    billingAddress: updateProfile.billingaddresses.length > 0 ? updateProfile.billingaddresses[0] : null
                }
            })
            dispatchProfile({
                type: UPDATE_PROFILE,
                payload: {
                    profile: {
                        ...profile,
                        selectedBillingAddress: updateProfile.selectedBillingAddress,
                        billingaddresses: updateProfile.billingaddresses
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
                    <Heading textAlign='center' size={500} paddingY={8}>Billing Addresses</Heading>
                </Pane>
                <Pane borderBottom display='flex' justifyContent='space-between'>
                    <Button
                        appearance={displaySetting ? 'primary' : 'minimal'}
                        onClick={toggleSetting}
                        disabled={profile.billingaddresses.length === 0}
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
                    addresses={profile.billingaddresses}
                    type={BILLING_ADDRESS}
                    obj="billingAddress"
                    selectAddress={selectAddress}
                    defaultValue={profile.selectedBillingAddress}
                />
                :
                <UpdateList
                    list={
                        profile.billingaddresses.map((addr, i) => ({
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
                    selected={profile.selectedBillingAddress}
                />
            }
        </Card>
    )
}

export default ProfileBillingAddresses
