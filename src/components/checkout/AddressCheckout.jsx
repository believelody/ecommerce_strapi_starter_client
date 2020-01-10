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
  const { useProfile } = useAppHooks()
  const [{ profile }, dispatchProfile] = useProfile
  const [currentIndex, setIndex] = useState(-1)
  const [sameAsShipping, setSameAsShipping] = useState(false)

  return (
    <Pane>
      <Pane border>
        <Accordion
          index={0}
          currentIndex={currentIndex}
          setIndex={setIndex}
          header={<Text>Shipping Address</Text>}
          content={
            <ShippingAddress
              profile={profile}
              setSameAsShipping={setSameAsShipping}
              sameAsShipping={sameAsShipping}
            />
          }
        />
      </Pane>
      {
        !sameAsShipping &&
        <Pane border>
          <Accordion
            index={1}
            currentIndex={currentIndex}
            setIndex={setIndex}
            header={<Text>Billing Address</Text>}
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
        predefinedHeight={300}
      />
    </Pane>
  )
}

export default AddressCheckout
