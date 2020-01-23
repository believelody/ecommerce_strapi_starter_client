import React from 'react'
import { Pane, Heading, Paragraph } from 'evergreen-ui'
import CheckoutForm from '../forms/CheckoutForm'

const CheckoutCard = () => {
    return (
        <Pane paddingTop={24} textAlign='center'>
            <Heading size={700}>Here's your checkout process</Heading>
            <Paragraph>
                Make your choice by clicking on a title line and fill/read information needed.
            </Paragraph>
            <CheckoutForm />
        </Pane>
    )
}

export default CheckoutCard
