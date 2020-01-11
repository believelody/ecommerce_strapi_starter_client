import React, { useEffect, useState } from 'react'
import { Pane, Button } from 'evergreen-ui'
import Accordion from '../accordions/Accordion'
import FieldComponent from '../fields/FieldComponent'
import { useAppHooks } from '../../context'
import { BILLING_ADDRESS } from '../../reducers/checkoutReducer'

const BillingAddressForm = () => {
  const { useCheckout } = useAppHooks()
  const [{isSame, billingAddress}, dispatchCheckout] = useCheckout

  const [address1, setAddress1] = useState(null)
  const [address2, setAddress2] = useState(null)
  const [zip, setZip] = useState(null)
  const [city, setCity] = useState(null)
  const [billingAddressErrors, setErrors] = useState(null)

  const handleAddress1 = e => setAddress1(e.target.value)
  const handleAddress2 = e => setAddress2(e.target.value)
  const handleZip = e => setZip(e.target.value)
  const handleCity = e => setCity(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()
    if (!address1) {
      setErrors(prevErrors => ({...prevErrors, address1: `You need to fill address field`}))
    }
    else if (!zip) {
      setErrors(prevErrors => ({...prevErrors, zip: `You need to fill zip field`}))
    }
    else if (!city) {
      setErrors(prevErrors => ({...prevErrors, city: `You need to fill city field`}))
    }
    else {
      dispatchCheckout({
        type: BILLING_ADDRESS,
        payload: {
          billingAddress: {address1, address2, zip, city}
        }
      })
    }
  }

  useEffect(() => {
    if (isSame) {
      setAddress1(billingAddress.address1)
      setAddress2(billingAddress.address2)
      setZip(billingAddress.zip)
      setCity(billingAddress.city)
    }
    else {
      setAddress1(null)
      setAddress2(null)
      setZip(null)
      setCity(null)
    }
  }, [isSame])

  return (
    <Pane>
      <form onSubmit={handleSubmit}>
        <FieldComponent
          label='Address 1 *'
          name='address1'
          placeholder='Ex: 123 rue de la route'
          handleChange={handleAddress1}
          value={address1 || ''}
          errors={billingAddressErrors && billingAddressErrors.address1}
        />
        <FieldComponent
          label='Address 2'
          name='address2'
          hint='This field is optional'
          placeholder='Ex: Résidence Sylvestre Appart 123'
          handleChange={handleAddress2}
          value={address2 || ''}
        />
        <FieldComponent
          label='Zip code *'
          name='zip'
          placeholder='Enter your zip code'
          handleChange={handleZip}
          value={zip || ''}
          errors={billingAddressErrors && billingAddressErrors.zip}
        />
        <FieldComponent
          label='City *'
          name='city'
          placeholder='Enter your city here'
          handleChange={handleCity}
          value={city || ''}
          errors={billingAddressErrors && billingAddressErrors.city}
        />
        <Button disabled={isSame}>Set Billing Address</Button>
      </form>
    </Pane>
  )
}

export default BillingAddressForm
