import React, { useEffect } from 'react'
import { Pane, Button, Card, Paragraph, Strong } from 'evergreen-ui'
import BillingAddressForm from '../forms/BillingAddressForm'
import { useAppHooks } from '../../context'
import { OPEN_SIDE_SHEET } from '../../reducers/sideSheetReducer'
import AddressContent from './AddressContent'
import { BILLING_ADDRESS } from '../../reducers/checkoutReducer'

const BillingAddress = ({ profile }) => {
    const { useSideSheet, useCheckout } = useAppHooks()
    const [sideSheetState, dispatchSideSheet] = useSideSheet
    const [{ billingAddress, isSameAsShipping }, dispatchCheckout] = useCheckout

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
                content: (
                    <Card
                        backgroundColor="white"
                        elevation={0}
                        minHeight={450}
                        paddingBottom={16}
                    >
                        <AddressContent 
                            addresses={[]} 
                            label="Billing" 
                            addressForm={<BillingAddressForm />}
                        />
                    </Card>
                )
            }
        })
    }

    useEffect(() => {
        if (profile && profile.billingAddress) {
            dispatchCheckout({
                type: BILLING_ADDRESS,
                payload: {
                    billingAddress: profile.billingAddress
                }
            })
        }
    }, [profile])

    return (
        !isSameAsShipping &&
        <Pane>
            {
                billingAddress &&
                <Pane>
                    <Button float='right' onClick={changeAddress}>
                        Change billing address
                    </Button>
                    <Card background='tealTint' padding={8}>
                        {billingAddress.address1 && <Paragraph>{billingAddress.address1}</Paragraph>}
                        {billingAddress.address2 && <Paragraph>{billingAddress.address2}</Paragraph>}
                        {billingAddress.zip && <Paragraph>{billingAddress.zip}</Paragraph>}
                        {billingAddress.city && <Paragraph>{billingAddress.city}</Paragraph>}
                    </Card>
                </Pane>
            }
            {
                !billingAddress &&
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
