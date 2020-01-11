import React from 'react'
import { Pane, Button, Card, Paragraph, Strong } from 'evergreen-ui'
import BillingAddressForm from '../forms/BillingAddressForm'
import { useAppHooks } from '../../context'
import { OPEN_SIDE_SHEET } from '../../reducers/sideSheetReducer'
import AddressContent from './AddressContent'

const BillingAddress = ({ profile }) => {
    const { useSideSheet } = useAppHooks()
    const [sideSheetState, dispatchSideSheet] = useSideSheet

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

    return (
        <Pane>
            {
                !profile &&
                <Pane>
                    <Button float='right' onClick={changeAddress}>
                        Change billing address
                    </Button>
                    <Card background='tealTint' padding={8}>
                        {/* <Paragraph>{profile.billingAddress.address}</Paragraph>
                        <Paragraph>{profile.billingAddress.address2}</Paragraph>
                        <Paragraph>{profile.billingAddress.zip}</Paragraph>
                        <Paragraph>{profile.billingAddress.city}</Paragraph> */}
                    </Card>
                </Pane>
            }
            {
                profile &&
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
