import React from 'react'
import {Link} from 'react-router-dom'
import { Table, IconButton, Badge, Pane, Text, UnorderedList, ListItem, Card, Heading, Strong, Popover, Position } from 'evergreen-ui'
import moment from 'moment'
import Accordion from '../accordions/Accordion'
import { objToText } from '../../utils/address.utils'
import Image from '../image/Image'
import { apiUrl } from '../../api'
import DetailOrderMenu from '../menu/DetailOrderMenu'

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

const PaymentMethodNotice = ({ type, amount, date }) => {
    switch (type) {
        case '2x':
            return (
                <Pane background='yellowTint' padding={4} border>
                    <Heading size={400} color='orange'>Notice:</Heading>
                    <Text size={300}>As reminder, you will be credited in following periods:</Text>
                    <UnorderedList size={300}>
                        <ListItem>
                            $ {amount}  on {moment(date).format('MMMM Do YYYY')}
                        </ListItem>
                        <ListItem>
                            $ {amount} on {moment(date).add(1, 'M').format('MMMM Do YYYY')}
                        </ListItem>
                    </UnorderedList>
                </Pane>
            )
        case '3x':
            return (
                <Pane background='yellowTint' padding={4} border>
                    <Heading size={400} color='orange'>Notice:</Heading>
                    <Text size={300}>As reminder, you will be credited in following periods:</Text>
                    <UnorderedList size={300}>
                        <ListItem>
                            $ {amount}  on {moment(date).format('MMMM Do YYYY')}
                        </ListItem>
                        <ListItem>
                            $ {amount} on {moment(date).add(1, 'M').format('MMMM Do YYYY')}
                        </ListItem>
                        <ListItem>
                            $ {amount} on {moment(date).add(2, 'M').format('MMMM Do YYYY')}
                        </ListItem>
                    </UnorderedList>
                </Pane>
            )
        case '4x':
            return (
                <Pane background='yellowTint' padding={4} border>
                    <Heading size={400} color='orange'>Notice:</Heading>
                    <Text size={300}>As reminder, you will be credited in following periods:</Text>
                    <UnorderedList size={300}>
                        <ListItem>
                            $ {amount}  on {moment(date).format('MMMM Do YYYY')}
                        </ListItem>
                        <ListItem>
                            $ {amount} on {moment(date).add(1, 'M').format('MMMM Do YYYY')}
                        </ListItem>
                        <ListItem>
                            $ {amount} on {moment(date).add(2, 'M').format('MMMM Do YYYY')}
                        </ListItem>
                        <ListItem>
                            $ {amount} on {moment(date).add(3, 'M').format('MMMM Do YYYY')}
                        </ListItem>
                    </UnorderedList>
                </Pane>
            )
    
        default:
            return null
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
                            <Table.TextCell>{moment(order.createdAt).format('MMMM Do YYYY')}</Table.TextCell>
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
                            <Table.TextCell>
                                <Popover
                                    position={Position.BOTTOM_RIGHT}
                                    content={
                                        <DetailOrderMenu
                                            paymentStatus={order.paymentStatus}
                                            shippingStatus={order.shippingStatus}
                                        />
                                    }
                                >
                                    <IconButton icon='more' appearance='minimal' />
                                </Popover>
                            </Table.TextCell>
                        </Pane>
                    )
                }
                content={
                    <Pane padding={8} display='block'>
                        <Pane textAlign='center'>
                            <Heading size={600}>Order details</Heading>
                        </Pane>
                        <Pane display='flex' border>
                            <Pane display='block' borderRight width='50%'>
                                <Pane paddingLeft={4} paddingY={4} borderBottom>
                                    <Text size={400}>Shipping Address: </Text>
                                    <Strong>
                                        {
                                            objToText({
                                                address: order.items.shippingAddress.address,
                                                address2: order.items.shippingAddress.address2,
                                                zip: order.items.shippingAddress.zip,
                                                city: order.items.shippingAddress.city,
                                            })
                                        }
                                    </Strong>
                                </Pane>
                                <Pane paddingLeft={4} paddingY={4}>
                                    <Text size={400}>Shipping Method: </Text>
                                    <Strong>{order.items.shippingMethod.label}</Strong>
                                </Pane>
                            </Pane>
                            <Pane display='block' borderLeft width='50%'>
                                <Pane paddingLeft={4} paddingY={4} borderBottom>
                                    <Text size={400}>Billing Address: </Text>
                                    <Strong>
                                        {
                                            objToText({
                                                address: order.items.billingAddress.address,
                                                address2: order.items.billingAddress.address2,
                                                zip: order.items.billingAddress.zip,
                                                city: order.items.billingAddress.city,
                                            })
                                        }
                                    </Strong>
                                </Pane>
                                <Pane paddingLeft={4} paddingY={4}>
                                    <Text size={400}>Payment Method: </Text>
                                    <Strong>{order.items.paymentMethod.type.toUpperCase()}</Strong>
                                    <PaymentMethodNotice
                                        amount={order.amount}
                                        date={order.createdAt}
                                        type={order.items.paymentMethod.type}
                                    />
                                </Pane>
                            </Pane>
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
