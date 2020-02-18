import React, { useState } from 'react'
import { Pane, Button, toaster, InlineAlert } from 'evergreen-ui'
import FieldComponent from '../fields/FieldComponent'
import { useAppHooks } from '../../context'
import { BILLING_ADDRESS } from '../../reducers/checkoutReducer'
import api from '../../api'
import { UPDATE_PROFILE } from '../../reducers/profileReducer'

const BillingAddressForm = ({ handleClose, mode, indexAddress = -1 }) => {
  const { useCheckout, useProfile } = useAppHooks()
  const [checkoutState, dispatchCheckout] = useCheckout
  const [{ profile }, dispatchProfile] = useProfile
  
  const [addr, setAddress] = useState(mode === 'edit' && indexAddress > -1 ? {
    address: profile.billingaddresses[indexAddress].address || '',
    address2: profile.billingaddresses[indexAddress].address2 || '',
    zip: profile.billingaddresses[indexAddress].zip || '',
    city: profile.billingaddresses[indexAddress].city || ''
  } : {})
  const [billingAddressErrors, setErrors] = useState(null)
  const [submitting, setSubmitting] = useState(false)

  const handleAddress = e => setAddress({ ...addr, [e.target.name]: e.target.value })

  const create = async () => {
    const newAddress = await api.billing.createAddress({ ...addr, profile: profile._id })
    const { data: { updateProfile } } = await api.profile.changeBillingAddress(profile._id, profile.billingaddresses.length > 0 ? profile.billingaddresses.length : 0)
    dispatchCheckout({
      type: BILLING_ADDRESS,
      payload: {
        billingAddress: newAddress
      }
    })
    dispatchProfile({
      type: UPDATE_PROFILE,
      payload: {
        profile: {
          ...profile,
          selectedBillingAddress: updateProfile.profile.selectedBillingAddress,
          billingaddresses: [...profile.billingaddresses, newAddress]
        }
      }
    })
    toaster.success('You had successfully a new billing address')
  }

  const edit = async () => {
    const updatedAddress = await api.billing.updateAddress(profile.billingaddresses[indexAddress]._id, { ...addr, profile: profile._id })
    // profile.billingaddresses[indexAddress] = { address, address2, zip, city }
    profile.billingaddresses.splice(indexAddress, 1, updatedAddress)
    toaster.success('Your address has been successfully updated')
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (!addr.address) {
      setErrors(prevErrors => ({...prevErrors, address: `You need to fill address field`}))
    }
    else if (!addr.zip) {
      setErrors(prevErrors => ({...prevErrors, zip: `You need to fill zip field`}))
    }
    else if (!addr.city) {
      setErrors(prevErrors => ({...prevErrors, city: `You need to fill city field`}))
    }
    else {
      try {
        setSubmitting(true)
        if (mode === 'create') {
          await create()
        }
        else {
          await edit()
        }
        if (handleClose) {
          setSubmitting(false)
          handleClose()
        }
      } catch (e) {
        console.log(e)
        setErrors({ ...billingAddressErrors, internalError: 'Oups, there is something wrong !' })
        setSubmitting(false)
      }
    }
  }

  // useEffect(() => {
  //   if (isSame) {
  //     setAddress(billingAddress.address)
  //     setAddress2(billingAddress.address2)
  //     setZip(billingAddress.zip)
  //     setCity(billingAddress.city)
  //   }
  //   else {
  //     setAddress(null)
  //     setAddress2(null)
  //     setZip(null)
  //     setCity(null)
  //   }
  // }, [isSame])

  return (
    <Pane is='form' onSubmit={handleSubmit}>
      <FieldComponent
        label='Address 1 *'
        name='address'
        placeholder='Ex: 123 rue de la route'
        handleChange={handleAddress}
        value={addr.address}
        errors={billingAddressErrors && billingAddressErrors.address}
      />
      <FieldComponent
        label='Address 2'
        name='address2'
        hint='This field is optional'
        placeholder='Ex: Résidence Sylvestre Appart 123'
        handleChange={handleAddress}
        value={addr.address2}
      />
      <FieldComponent
        label='Zip code *'
        name='zip'
        placeholder='Enter your zip code'
        handleChange={handleAddress}
        value={addr.zip}
        errors={billingAddressErrors && billingAddressErrors.zip}
      />
      <FieldComponent
        label='City *'
        name='city'
        placeholder='Enter your city here'
        handleChange={handleAddress}
        value={addr.city}
        errors={billingAddressErrors && billingAddressErrors.city}
      />
      <Button
        appearance='primary'
        intent='success'
        disabled={submitting}
      >
        {submitting ? 'Please wait ...' : (mode === 'create' ? 'Set Billing Address' : 'Update Address')}
      </Button>
      {
        billingAddressErrors && billingAddressErrors.internalError &&
        <InlineAlert intent='danger'>{billingAddressErrors.internalError}</InlineAlert>
      }
    </Pane>
  )
}

export default BillingAddressForm
