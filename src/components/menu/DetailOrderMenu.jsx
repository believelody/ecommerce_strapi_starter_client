import React from 'react'
import { Menu, Icon, Text, Strong } from 'evergreen-ui'

const DetailOrderMenu = ({ paymentStatus, shippingStatus}) => {
    return (
        <Menu>
            <Menu.Group>
                <Menu.Item>Write a Review <Icon icon='star' color='orange' marginLeft={8} /></Menu.Item>
                <Menu.Item>Track your item <Icon icon='locate' color='muted' marginLeft={8} /></Menu.Item>
                <Menu.Item>
                    Show invoice <Icon icon='document' color='danger' marginLeft={8} /><Strong color='red'>PDF</Strong></Menu.Item>
                <Menu.Item>Make a reclamation <Icon icon='help' color='info' marginLeft={8} /></Menu.Item>
                <Menu.Item intent='success'>Confirm package receiving <Icon icon='tick-circle' marginLeft={8} /></Menu.Item>
            </Menu.Group>
            {
                (paymentStatus === 'pending' || paymentStatus === 'paid' && shippingStatus !== 'received') &&
                <>
                    <Menu.Divider />
                    <Menu.Group>
                        <Menu.Item intent='danger'>Cancel Order <Icon icon='delete' marginLeft={8} /></Menu.Item>
                    </Menu.Group>
                </>
            }
        </Menu>
    )
}

export default DetailOrderMenu
