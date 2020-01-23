import React, { useState, useEffect } from 'react'
import { Card, Heading, Paragraph, Icon, Small, Code } from 'evergreen-ui'
import { Redirect } from 'react-router-dom'
import { useAppHooks } from '../../context'
import { CANCEL_PAYMENT } from '../../reducers/checkoutReducer'

const PaymentSucceedCard = () => {
    const { useCheckout } = useAppHooks()
    const [checkoutState, dispatchCheckout] = useCheckout

    // const countRef = useRef(null)

    const [isRedirecting, setRedirecting] = useState(false)
    const [count, setCount] = useState(10)

    useEffect(() => {
        setTimeout(() => {
            setRedirecting(true)
            dispatchCheckout({type: CANCEL_PAYMENT})
        }, 10000);
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
        !isRedirecting ?
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
           <Heading size={600}>Thank you, your payment succeed</Heading>
           <Paragraph paddingY={16}>
               We sent you an email with your invoice. Stay tuned about new trends and happy shopping.
           </Paragraph>
            <Code>Back to home page in {count}</Code>
        </Card> :
        <Redirect to='/' />
    )
}

export default PaymentSucceedCard
