import React, { useEffect } from 'react'
import { Pane, Card, Strong, Paragraph, Checkbox } from 'evergreen-ui'
import { Button } from 'evergreen-ui/commonjs/buttons'
import { useAppHooks } from '../../context'
import { OPEN_SIDE_SHEET } from '../../reducers/sideSheetReducer'
import ShippingAddressForm from '../forms/ShippingAddressForm'
import { SHIPPING_ADDRESS, IS_SAME, IS_NOT_SAME } from '../../reducers/checkoutReducer'
import AddressContent from './AddressContent'

const ShippingAddress = ({ profile }) => {
    const { useSideSheet, useCheckout } = useAppHooks()
    const [sideSheetState, dispatchSideSheet] = useSideSheet
    const [{shippingAddress, isSame}, dispatchCheckout] = useCheckout

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
                description: 'Change your current address',
                content: (
                    <Card
                        backgroundColor="white"
                        elevation={0}
                        paddingBottom={16}
                    >
                        <AddressContent
                            addresses={
                                profile &&
                                profile.addressList.length > 0 ?
                                profile.addressList :
                                shippingAddress ?
                                [shippingAddress] :
                                []
                            }
                            label="Shipping"
                            obj="shippingAddress"
                            type={SHIPPING_ADDRESS}
                            addressForm={<ShippingAddressForm />}
                        />
                    </Card>
                )
            }
        })
    }

    useEffect(() => {
        if (profile && profile.shippingAddress) {
            dispatchCheckout({
                type: SHIPPING_ADDRESS,
                payload: {
                    shippingAddress: profile.shippingAddress
                }
            })
        }
    }, [profile])

    return (
        shippingAddress ?
        <Pane padding={8}>
            <Checkbox
                label='Also use as billing address?'
                checked={isSame}
                onChange={e => dispatchCheckout({ type: isSame ? IS_NOT_SAME : IS_SAME })}
                marginBottom={20}
            />
            <Button float='right' onClick={changeAddress}>
                Change shipping address
            </Button>
            <Card background='tealTint' padding={8} textAlign='left'>
                {shippingAddress.address1 && <Paragraph>{shippingAddress.address1}</Paragraph>}
                {shippingAddress.address2 && <Paragraph>{shippingAddress.address2}</Paragraph>}
                {shippingAddress.zip && <Paragraph>{shippingAddress.zip}</Paragraph>}
                {shippingAddress.city && <Paragraph>{shippingAddress.city}</Paragraph>}
            </Card>
        </Pane> :
        <Card textAlign='center' background='tint2' paddingY={16}>
            <Paragraph>
                You don't have any address.{' '}
                <Strong onClick={addNewAddress} cursor="pointer">
                    Add one here
                </Strong>
            </Paragraph>
        </Card>
    )
}

export default ShippingAddress
