import React, { useState } from 'react'
import { Pane, Text } from 'evergreen-ui'
import Accordion from '../accordions/Accordion'
import ShippingAddressForm from '../forms/ShippingAddressForm'
import BillingAddressForm from '../forms/BillingAddressForm'
import Label from '../label/Label'
import { useAppHooks } from '../../context'
import ShippingAddress from '../addresses/ShippingAddress'
import BillingAddress from '../addresses/BillingAddress'

const AddressForm = () => {
  const { useProfile, useCheckout } = useAppHooks()
  const [{ profile }, dispatchProfile] = useProfile
  const [{ isSame }, dispatchCheckout] = useCheckout
  const [currentIndex, setIndex] = useState(-1)

  return (
    <Pane>
      <Pane border>
        <Accordion
          index={0}
          currentIndex={currentIndex}
          setIndex={setIndex}
          header={<Text marginLeft={8}>Shipping Address</Text>}
          content={<ShippingAddress profile={profile} />}
        />
      </Pane>
      {
        !isSame &&
        <Pane border>
          <Accordion
            index={1}
            currentIndex={currentIndex}
            setIndex={setIndex}
            header={<Text marginLeft={8}>Billing Address</Text>}
            content={<BillingAddress profile={profile} />}
          />
        </Pane>
      }
    </Pane>
  )
}

const AddressCheckout = ({index, currentIndex, setIndex}) => {
  return (
    <Pane width='100%' border>
      <Accordion
        index={index}
        currentIndex={currentIndex}
        setIndex={setIndex}
        header={<Label name='Fill your address' />}
        content={<AddressForm />}
        scrollAuto
      />
    </Pane>
  )
}

export default AddressCheckout
