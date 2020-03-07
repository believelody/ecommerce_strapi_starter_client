import React from 'react'
import moment from 'moment'
import { Pane, Paragraph, UnorderedList, ListItem, Small } from 'evergreen-ui'
import StripeCheckout from '../stripe/StripeCheckout'

const Recurrent4xPayment = ({ currentIndex, paymentMethod, shippingMethod, total }) => {
    return (
        <Pane paddingY={16} paddingX={8}>
            <Paragraph>
                This is 4 times recurrent payment. You will be credited in following periods:
            </Paragraph>
            <UnorderedList>
                <ListItem>
                    $ {((total + shippingMethod.price + paymentMethod.fees)/4).toFixed(2)} today
                </ListItem>
                <ListItem>
                    $ {((total + shippingMethod.price + paymentMethod.fees)/4).toFixed(2)} on {moment().add(1, 'M').format('MMMM Do YYYY')}
                </ListItem>
                <ListItem>
                    $ {((total + shippingMethod.price + paymentMethod.fees)/4).toFixed(2)} on {moment().add(2, 'M').format('MMMM Do YYYY')}
                </ListItem>
                <ListItem>
                    $ {((total + shippingMethod.price + paymentMethod.fees)/4).toFixed(2)} on {moment().add(3, 'M').format('MMMM Do YYYY')}
                </ListItem>
            </UnorderedList>
            <Small><i>PS: We apply $ {paymentMethod.fees} of fees</i></Small>
            {
                currentIndex === 4 &&
                <Pane margin={8} padding={16} background='tint1' border>
                    <StripeCheckout />
                </Pane>
            }
        </Pane>
    )
}

export default Recurrent4xPayment
