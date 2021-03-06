import React, { useState, useEffect } from 'react'
import { Card, Heading, Paragraph, Icon, Small, Code } from 'evergreen-ui'
import { useAppHooks } from '../../context'
import { CANCEL_PAYMENT } from '../../reducers/checkoutReducer'

const PaymentSucceedCard = ({ handleClose }) => {
    const { useCheckout, useProfile } = useAppHooks()
    const [checkoutState, dispatchCheckout] = useCheckout
    const [{ profile }, dispatchProfile] = useProfile

    const [count, setCount] = useState(5)

    useEffect(() => {
        setTimeout(() => {
            dispatchCheckout({type: CANCEL_PAYMENT})
            if (handleClose) {
                handleClose()
            }
        }, 5000);
    }, [])

    useEffect(() => {
        const countRef = setInterval(() => {
            if (count > 0) {
                setCount(prevCount => prevCount - 1)
            }
            else {
                setCount(0)
                clearInterval(countRef)
            }
        }, 1000)

        return () => clearInterval(countRef)
    }, [])

    return (
        <Card
            padding={32}
            margin='auto'
            background='blueTint'
            display='flex'
            flexDirection='column'
            alignItems='center'
            elevation={2}
            border
        >
            <Icon icon='tick-circle' color='success' size={56} />
           <Heading size={600}>Thank you {profile.username}, your payment succeeded</Heading>
           <Paragraph paddingY={16}>
               We sent you an email with your invoice. Stay tuned about our new trends and happy shopping !
           </Paragraph>
            <Code>Back to home page in {count}</Code>
        </Card>
    )
}

export default PaymentSucceedCard
