import React from 'react'
import { Card, Text, Pane } from 'evergreen-ui'
import { useAppHooks } from '../../context'
import OrderList from '../order/OrderList'

const ProfileOrder = () => {
    const { useProfile } = useAppHooks()
    const [{ profile }, dispatchProfile] = useProfile

    return (
        profile &&
        <Card background='tint1' border>
            {
                profile.orders.length > 0 ?
                <OrderList orders={profile.orders} />
                :
                <Pane height={200} display='flex' justifyContent='center' alignItems='center' width='100%'>
                    <Text>You have currently no orders</Text>
                </Pane>
            }
        </Card>
    )
}

export default ProfileOrder
