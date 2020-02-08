import React, { useState } from 'react'
import { Pane, Text } from 'evergreen-ui'
import Tabs from '../tabs/Tabs'
import CreditCardPayment from '../payment/CreditCardPayment'
import PaypalPayment from '../payment/PaypalPayment'
import Recurrent2xPayment from '../payment/Recurrent2xPayment'
import Recurrent3xPayment from '../payment/Recurrent3xPayment'
import Recurrent4xPayment from '../payment/Recurrent4xPayment'
import { useAppHooks } from '../../context'
import { PAYMENT_METHOD } from '../../reducers/checkoutReducer'
import paymentMethodUtils from '../../utils/paymentMethod.utils'

const PaymentForm = () => {
    const { useCheckout } = useAppHooks()
    const [checkoutState, dispatchCheckout] = useCheckout
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleCurrentIndex = index => {
        setCurrentIndex(index)
        dispatchCheckout({
            type: PAYMENT_METHOD,
            payload: { paymentMethod: paymentMethodUtils(index) }
        })
    }

    return (
        <Pane padding={16} margin={16} border='muted' background='tealTint'>
            <Tabs
                getCurrentIndexFromChild={handleCurrentIndex}
                elements={[
                    {
                        tab: <Text>Credit Card</Text>,
                        content: <CreditCardPayment currentIndex={currentIndex} />
                    },
                    {
                        tab: <Text>Paypal</Text>,
                        content: <PaypalPayment />
                    },
                    {
                        tab: <Text>Recurrent x2</Text>,
                        content: <Recurrent2xPayment currentIndex={currentIndex} />
                    },
                    {
                        tab: <Text>Recurrent x3</Text>,
                        content: <Recurrent3xPayment currentIndex={currentIndex} />
                    },
                    {
                        tab: <Text>Recurrent x4</Text>,
                        content: <Recurrent4xPayment currentIndex={currentIndex} />
                    },
                ]}
            />
        </Pane>
    )
}

export default PaymentForm
