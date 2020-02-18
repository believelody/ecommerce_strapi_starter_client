import React, { useState } from 'react'
import { Pane, Button, Card, Paragraph, Strong } from 'evergreen-ui'
import BillingAddressForm from '../forms/BillingAddressForm'
import { useAppHooks } from '../../context'
import { OPEN_SIDE_SHEET } from '../../reducers/sideSheetReducer'
import AddressContent from './AddressContent'
import { BILLING_ADDRESS } from '../../reducers/checkoutReducer'

const BillingAddress = ({ profile }) => {
    const { useSideSheet, useCheckout } = useAppHooks()
    const [sideSheetState, dispatchSideSheet] = useSideSheet
    const [{ billingAddress, shippingAddress, isSame }, dispatchCheckout] = useCheckout

    const [adresses, setAddresses] = useState(isSame ? shippingAddress : billingAddress)

    const addNewAddress = e => {
        dispatchSideSheet({
            type: OPEN_SIDE_SHEET,
            payload: {
                title: 'Billing address',
                description: 'Add a new address',
                content: (
                    <Card
                        backgroundColor="white"
                        elevation={0}
                        minHeight={300}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        paddingBottom={16}
                    >
                        <BillingAddressForm />
                    </Card>
                )
            }
        })
    }

    const changeAddress = e => {
        dispatchSideSheet({
            type: OPEN_SIDE_SHEET,
            payload: {
                title: 'Billing address',
                description: 'Change your current address',
                content: ({ handleClose }) =>
                <Card
                    backgroundColor="white"
                    elevation={0}
                    minHeight={450}
                    paddingBottom={16}
                >
                    <AddressContent
                        addresses={
                            profile &&
                                profile.billingaddresses.length > 0 ?
                                profile.billingaddresses :
                                []
                        }
                        label="Billing"
                        checkoutObj="billingAddress"
                        profileObj="selectedBillingAddress"
                        type={BILLING_ADDRESS}
                        addressForm={BillingAddressForm}
                        handleClose={handleClose}
                        defaultValue={profile.selectedBillingAddress}
                    />
                </Card>
            }
        })
    }

    return (
        <Pane>
            {
                adresses &&
                <Pane padding={8}>
                    <Button type='button' float='right' onClick={changeAddress}>
                        Change billing address
                    </Button>
                    <Card background='tealTint' padding={8} textAlign='left'>
                        {adresses.address && <Paragraph>{adresses.address}</Paragraph>}
                        {adresses.address2 && <Paragraph>{adresses.address2}</Paragraph>}
                        {adresses.zip && <Paragraph>{adresses.zip}</Paragraph>}
                        {adresses.city && <Paragraph>{adresses.city}</Paragraph>}
                    </Card>
                </Pane>
            }
            {
                !adresses &&
                <Card textAlign='center' background='tint2' paddingY={16}>
                    <Paragraph>
                        You don't have any address.{' '}
                        <Strong onClick={addNewAddress} cursor="pointer">
                            Add one here
                        </Strong>
                    </Paragraph>
                </Card>
            }
        </Pane>
    )
}

export default BillingAddress
