import React from 'react'
import { Pane, Card, Strong, Paragraph, Checkbox } from 'evergreen-ui'
import { Button } from 'evergreen-ui/commonjs/buttons'

const ShippingAddress = ({ profile, setSameAsShipping, sameAsShipping }) => {

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
                    <Button float='right'>Change shipping address</Button>
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
                        You don't have any address. <Strong cursor="pointer">Add one here</Strong>
                    </Paragraph>
                </Card>
            }
        </Pane>
    )
}

export default ShippingAddress
