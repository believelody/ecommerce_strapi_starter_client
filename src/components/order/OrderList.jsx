import React, { useState } from 'react'
import { Table, TableHead, TableBody, TableHeaderCell, Text } from 'evergreen-ui'
import OrderItem from './OrderItem'

const OrderList = ({ orders }) => {
    const [currentIndex, setIndex] = useState(-1)
    return (
        <Table>
            <TableHead>
                <TableHeaderCell />
                <TableHeaderCell>
                    <Text>Order N°</Text>
                </TableHeaderCell>
                <TableHeaderCell>
                    <Text>Amount</Text>
                </TableHeaderCell>
                <TableHeaderCell>
                    <Text>Date</Text>
                </TableHeaderCell>
                <TableHeaderCell>
                    <Text>Payment Status</Text>
                </TableHeaderCell>
                <TableHeaderCell>
                    <Text>Shipping Status</Text>
                </TableHeaderCell>
                <TableHeaderCell />
            </TableHead>
            <TableBody>
                {
                    orders.map((order, index) =>
                        <OrderItem
                            key={order._id}
                            currentIndex={currentIndex}
                            setIndex={setIndex}
                            order={order}
                            index={index}
                        />
                    )
                }
            </TableBody>
        </Table>
    )
}

export default OrderList
