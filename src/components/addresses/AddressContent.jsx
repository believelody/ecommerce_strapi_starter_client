import React, { useState } from 'react'
import { Pane, Heading, Button, Paragraph } from 'evergreen-ui'
import Accordion from '../accordions/Accordion'
import AddressesList from './AddressesList'
import { useAppHooks } from '../../context'
import { UPDATE_PROFILE } from '../../reducers/profileReducer'

const AddressContent = ({ addresses, addressForm: Component, label, checkoutObj, profileObj, type, handleClose, defaultValue }) => {
    const { useCheckout, useProfile } = useAppHooks()
    const [checkoutState, dispatchCheckout] = useCheckout
    const [{profile}, dispatchProfile] = useProfile

    const [currentIndex, setIndex] = useState(0)

    return (
        <Pane
            width='100%'
            display="block"
            padding={8}
        >
            <Pane border>
                <Accordion
                    index={0}
                    currentIndex={currentIndex}
                    setIndex={setIndex}
                    header={
                        ({ handleClick }) => (
                        <Pane padding={8} onClick={handleClick}>
                            <Heading textAlign='center'>
                                Your {label} Address List
                            </Heading>
                            <Paragraph style={{fontStyle: 'italic'}} size={300}>
                                The change will only affect checkout process. To change your current {label.toLowerCase()} address, go to profile.
                            </Paragraph>
                        </Pane>)
                    }
                    content={
                        <AddressesList
                            addresses={addresses}
                            type={type}
                            obj={checkoutObj}
                            defaultValue={defaultValue}
                            selectAddress={
                                (options, value, type, obj) => {
                                    dispatchCheckout({
                                        type,
                                        payload: {
                                            [obj]: options.find(option => option.value == value).related
                                        }
                                    })
                                    if (profileObj) {
                                        dispatchProfile({
                                            type: UPDATE_PROFILE,
                                            payload: {
                                                profile: { ...profile, [profileObj]: value }
                                            }
                                        })
                                    }
                                    if (handleClose) {
                                        handleClose()
                                    }
                                }
                            }
                        />
                    }
                />
            </Pane>
            <Pane>
                <Accordion
                    index={1}
                    currentIndex={currentIndex}
                    setIndex={setIndex}
                    header={
                        ({handleClick}) => (
                            <Pane display='flex' justifyContent='flex-end' onClick={handleClick}>
                                <Button appearance="minimal" height={24} iconBefore="plus">
                                    Add a new address
                                </Button>
                            </Pane>
                        )
                    }
                    content={<Component handleClose={handleClose} />}
                />
            </Pane>
        </Pane>
    )
}

export default AddressContent
