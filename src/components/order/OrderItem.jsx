import React from 'react'
import {Link} from 'react-router-dom'
import { Table, IconButton, Badge, Pane, Text, UnorderedList, ListItem, Card, Heading, Strong } from 'evergreen-ui'
import moment from 'moment'
import Accordion from '../accordions/Accordion'
import { objToText } from '../../utils/address.utils'
import Image from '../image/Image'
import { apiUrl } from '../../api'

const shippingStatusColor = status => {
    switch (status) {
        case 'processing':
            return 'neutral'
        case 'ongoing':
            return 'blue'
        case 'returned':
            return 'red'
        case 'delivered':
            return 'teal'
        case 'received':
            return 'green'
    
        default:
            return 'neutral'
    }
}

const paymentStatusColor = status => {
    switch (status) {
        case 'pending':
            return 'neutral'
        case 'cancel':
            return 'red'
        case 'paid':
            return 'green'
        case 'refund':
            return 'purple'
    
        default:
            return 'neutral'
    }
}

const OrderItem = ({ order, index, currentIndex, setIndex }) => {

    return (
        <Table.Row height='100%'>
            <Accordion
                currentIndex={currentIndex}
                setIndex={setIndex}
                index={index}
                header={
                    ({handleClick}) =>(
                        <Pane display='flex'>
                            <Table.TextCell onClick={handleClick}>
                                {
                                    currentIndex === index ?
                                    <IconButton icon='chevron-down' appearance='minimal' />
                                    :
                                    <IconButton icon='chevron-right' appearance='minimal' />
                                }
                            </Table.TextCell>
                            <Table.TextCell>#{order.numOrder}</Table.TextCell>
                            <Table.TextCell>$ {order.amount}</Table.TextCell>
                            <Table.TextCell>{moment(order.updatedAt).format('MMMM Do YYYY')}</Table.TextCell>
                            <Table.TextCell>
                                <Badge isSolid color={paymentStatusColor(order.paymentStatus)}>
                                    {order.paymentStatus}
                                </Badge>
                            </Table.TextCell>
                            <Table.TextCell>
                                <Badge color={shippingStatusColor(order.shippingStatus)}>
                                    {order.shippingStatus}
                                </Badge>
                            </Table.TextCell>
                            <Table.TextCell onClick={handleClick}>
                                <IconButton icon='more' appearance='minimal' />
                            </Table.TextCell>
                        </Pane>
                    )
                }
                content={
                    <Pane padding={8} display='block'>
                        <Pane textAlign='center'>
                            <Heading size={600}>Order details</Heading>
                        </Pane>
                        <Pane paddingLeft={4} paddingY={4} borderBottom>
                            <Text size={400}>Shipping Address: </Text>
                            <Strong>{objToText(order.items.shippingAddress)}</Strong>
                        </Pane>
                        <Pane paddingLeft={4} paddingY={4} borderBottom>
                            <Text size={400}>Billing Address: </Text>
                            <Strong>{objToText(order.items.billingAddress)}</Strong>
                        </Pane>
                        <Pane paddingLeft={4} paddingY={4} borderBottom>
                            <Text size={400}>Shipping Method: </Text>
                            <Strong>{order.items.shippingMethod.label}</Strong>
                        </Pane>
                        <Pane paddingLeft={4} paddingY={4} borderBottom>
                            <Text size={400}>Payment Method: </Text>
                            <Strong>{order.items.paymentMethod.type.toUpperCase()}</Strong>
                        </Pane>
                        <Pane>
                            <Text>Items :</Text>
                            <UnorderedList
                                display='flex'
                                flexWrap='wrap'
                                style={{ listStyle: 'none' }}
                            >
                                {
                                    order.items.cart.length > 0 && order.items.cart.map((item, index) =>
                                        <ListItem key={index} marginX={4}
                                            minWidth={200}
                                        >
                                            <Card display='flex' minWidth={300} border>
                                                <Pane width={100} height={100}>
                                                    <Image
                                                        src={`${apiUrl}${item.product.thumbnails.find(thumbnail => thumbnail.name.includes(item.color.name)).url || item.product.thumbnails[0].url}`}
                                                        alt={item.product.thumbnails.find(thumbnail => thumbnail.name.includes(item.color.name)).name || item.product.thumbnails[0].name}
                                                    />
                                                </Pane>
                                                <Pane 
                                                    display='flex' 
                                                    flexDirection='column' 
                                                    paddingX={8}
                                                    paddingY={4}
                                                    width='auto' 
                                                    height='auto'
                                                >
                                                    <Text>
                                                        Product: <Badge color='neutral' isSolid>
                                                            <Link to={`/products/${item.product._id}`}>
                                                                {item.product.name}
                                                            </Link>
                                                        </Badge>
                                                    </Text>
                                                    <Text>Quantity: {item.quantity}</Text>
                                                    <Text>Color: {item.color.name}</Text>
                                                    <Text>Size: {item.size.name}</Text>
                                                </Pane>
                                            </Card>
                                        </ListItem>
                                    )
                                }
                            </UnorderedList>
                        </Pane>
                    </Pane>
                }
            />
        </Table.Row>
    )
}

export default OrderItem
