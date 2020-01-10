import React from 'react'
import { Pane, Button, Card, Paragraph, Strong } from 'evergreen-ui'

const BillingAddress = ({ profile }) => {
    return (
        <Pane>
            {
                profile &&
                <Pane>
                    <Button float='right'>Change billing address</Button>
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

export default BillingAddress
