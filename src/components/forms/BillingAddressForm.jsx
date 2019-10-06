import React, { useEffect, useState } from 'react'
import { Pane } from 'evergreen-ui'
import Accordion from '../accordions/Accordion'
import FieldComponent from '../fields/FieldComponent'
import { useAppHooks } from '../../context'

const BillingAddressForm = () => {
  const { useCheckout } = useAppHooks()
  const [{errors}, dispatchCheckout] = useCheckout

  const [address1, setAddress1] = useState(null)
  const [address2, setAddress2] = useState(null)
  const [zip, setZip] = useState(null)
  const [city, setCity] = useState(null)

  const handleAddress1 = e => setAddress1(e.target.value)
  const handleAddress2 = e => setAddress2(e.target.value)
  const handleZip = e => setZip(e.target.value)
  const handleCity = e => setCity(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <Pane>
      <form onSubmit={handleSubmit}>
        <FieldComponent
          label='Address 1 *'
          name='address1'
          placeholder='Ex: 123 rue de la route'
          handleChange={handleAddress1}
          errors={errors && errors.address1}
        />
        <FieldComponent
          label='Address 2'
          name='address2'
          hint='This field is optional'
          placeholder='Ex: Résidence Sylvestre Appart 123'
          handleChange={handleAddress2}
          errors={errors && errors.address2}
        />
        <FieldComponent
          label='Zip code *'
          name='zip'
          placeholder='Enter your zip code'
          handleChange={handleZip}
          errors={errors && errors.zip}
        />
        <FieldComponent
          label='City'
          name='city'
          placeholder='Enter your city here'
          handleChange={handleCity}
          errors={errors && errors.city}
        />
      </form>
    </Pane>
  )
}

export default BillingAddressForm
