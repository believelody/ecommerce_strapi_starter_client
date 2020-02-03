import React, { useState } from 'react'
import { Pane, Checkbox, Button } from 'evergreen-ui'
import FieldComponent from '../fields/FieldComponent'
import { useAppHooks } from '../../context'
import { IS_SAME, SHIPPING_ADDRESS } from '../../reducers/checkoutReducer'

const ShippingAddressForm = () => {
  const { useCheckout } = useAppHooks()
  const [checkoutState, dispatchCheckout] = useCheckout

  const [address1, setAddress1] = useState(null)
  const [address2, setAddress2] = useState(null)
  const [zip, setZip] = useState(null)
  const [city, setCity] = useState(null)
  const [checked, setChecked] = useState(false)
  const [shippingAddressErrors, setErrors] = useState(null)
  const [isSubmitted, setSubmit] = useState(false)

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
        type: SHIPPING_ADDRESS,
        payload: {
          shippingAddress: {address1, address2, zip, city}
        }
      })
      if (checked) {
        dispatchCheckout({ type: IS_SAME })
      }
      setSubmit(true)
    }
  }

  return (
    <Pane>
      <form onSubmit={handleSubmit}>
        <Checkbox
          label='Also use as billing address?'
          checked={checked}
          onChange={e => setChecked(e.target.checked)}
          marginBottom={20}
        />
        <FieldComponent
          label='Address 1 *'
          name='address1'
          placeholder='Ex: 123 rue de la route'
          handleChange={handleAddress1}
          errors={shippingAddressErrors && shippingAddressErrors.address1}
        />
        <FieldComponent
          label='Address 2'
          name='address2'
          hint='This field is optional'
          placeholder='Ex: Résidence Sylvestre Appart 123'
          handleChange={handleAddress2}
        />
        <FieldComponent
          label='Zip code *'
          name='zip'
          placeholder='Enter your zip code'
          handleChange={handleZip}
          errors={shippingAddressErrors && shippingAddressErrors.zip}
        />
        <FieldComponent
          label='City *'
          name='city'
          placeholder='Enter your city here'
          handleChange={handleCity}
          errors={shippingAddressErrors && shippingAddressErrors.city}
        />
        <Button
          appearance='primary'
          intent='success'
          disabled={isSubmitted}
        >
          {isSubmitted ? 'Thank you!' : 'Set Shipping Address'}
        </Button>
      </form>
    </Pane>
  )
}

export default ShippingAddressForm
