import React from 'react'
import { Pane, Card, Strong, Paragraph, Checkbox } from 'evergreen-ui'
import { Button } from 'evergreen-ui/commonjs/buttons'
import { useAppHooks } from '../../context'
import { OPEN_SIDE_SHEET } from '../../reducers/sideSheetReducer'
import ShippingAddressForm from '../forms/ShippingAddressForm'

const ShippingAddress = ({ profile, setSameAsShipping, sameAsShipping }) => {
    const { useSideSheet } = useAppHooks()
    const [sideSheetState, dispatchSideSheet] = useSideSheet

    const addNewAddress = e => {
        dispatchSideSheet({
            type: OPEN_SIDE_SHEET,
            payload: {
                title: 'Shipping address',
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
                        <ShippingAddressForm />
                    </Card>
                )
            }
        })
    }

    const changeAddress = e => {
        dispatchSideSheet({
            type: OPEN_SIDE_SHEET,
            payload: {
                title: 'Shipping address',
                description: 'Add a new address'
            }
        })
    }

    return (
        <Pane>
            {
                profile &&
                <Pane>
                    <Checkbox
                        label='Also use as billing address?'
                        checked={sameAsShipping}
                        onChange={e => setSameAsShipping(e.target.checked)}
                        marginBottom={20}
                    />
                    <Button float='right' onClick={changeAddress}>
                        Change shipping address
                    </Button>
                    <Card background='tealTint' padding={8}>
                        <Paragraph>{profile.shippingAddress.address}</Paragraph>
                        <Paragraph>{profile.shippingAddress.address2}</Paragraph>
                        <Paragraph>{profile.shippingAddress.zip}</Paragraph>
                        <Paragraph>{profile.shippingAddress.city}</Paragraph>
                    </Card>
                </Pane>
            }
            {
                !profile &&
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

export default ShippingAddress
