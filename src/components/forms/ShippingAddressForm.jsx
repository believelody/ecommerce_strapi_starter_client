import React, { useState } from 'react'
import { Pane, Checkbox, Button, InlineAlert } from 'evergreen-ui'
import FieldComponent from '../fields/FieldComponent'
import { useAppHooks } from '../../context'
import { IS_SAME, SHIPPING_ADDRESS } from '../../reducers/checkoutReducer'
import api from '../../api'
import { toaster } from 'evergreen-ui/commonjs/toaster'
import { UPDATE_PROFILE } from '../../reducers/profileReducer'

const ShippingAddressForm = ({ handleClose, mode, indexAddress = -1 }) => {
  const { useCheckout, useProfile } = useAppHooks()
  const [checkoutState, dispatchCheckout] = useCheckout
  const [{profile}, dispatchProfile] = useProfile

  const [addr, setAddress] = useState(mode === 'edit' && indexAddress > -1 ? {
    address: profile.shippingaddresses[indexAddress].address || '',
    address2: profile.shippingaddresses[indexAddress].address2 || '',
    zip: profile.shippingaddresses[indexAddress].zip || '',
    city: profile.shippingaddresses[indexAddress].city || ''
  } : {})
  const [checked, setChecked] = useState(false)
  const [shippingAddressErrors, setErrors] = useState(null)
  const [submitting, setSubmitting] = useState(false)

  const handleAddress = e => setAddress({ ...addr, [e.target.name]: e.target.value})

  const create = async () => {
    const newAddress = await api.shipping.createAddress({ ...addr, profile: profile._id })
    const {data: {updateProfile}} = await api.profile.changeShippingAddress(profile._id, profile.shippingaddresses.length > 0 ? profile.shippingaddresses.length : 0)
    dispatchCheckout({
      type: SHIPPING_ADDRESS,
      payload: {
        shippingAddress: newAddress
      }
    })
    dispatchProfile({
      type: UPDATE_PROFILE,
      payload: {
        profile: {
          ...profile,
          selectedShippingAddress: updateProfile.profile.selectedShippingAddress,
          shippingaddresses: [...profile.shippingaddresses, newAddress]
        }
      }
    })
    if (checked) {
      dispatchCheckout({ type: IS_SAME })
    }
    toaster.success('You had successfully a new shipping address')
  }

  const edit = async () => {
    const updatedAddress = await api.shipping.updateAddress(profile.shippingaddresses[indexAddress]._id, { ...addr, profile: profile._id })
    // profile.shippingaddresses[indexAddress] = { address, address2, zip, city }
    profile.shippingaddresses.splice(indexAddress, 1, updatedAddress)
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
        setErrors({...shippingAddressErrors, internalError: 'Oups, there is something wrong !'})
        setSubmitting(false)
      }
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
          name='address'
          placeholder='Ex: 123 rue de la route'
          handleChange={handleAddress}
          errors={shippingAddressErrors && shippingAddressErrors.address}
          value={addr.address}
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
          errors={shippingAddressErrors && shippingAddressErrors.zip}
          value={addr.zip}
        />
        <FieldComponent
          label='City *'
          name='city'
          placeholder='Enter your city here'
          handleChange={handleAddress}
          errors={shippingAddressErrors && shippingAddressErrors.city}
          value={addr.city}
        />
        <Button
          appearance='primary'
          intent='success'
          disabled={submitting}
        >
          {submitting ? 'Please wait ...' : (mode === 'create' ? 'Set Shipping Address' : 'Update Address')}
        </Button>
      </form>
      {
        shippingAddressErrors && shippingAddressErrors.internalError &&
        <InlineAlert intent='danger'>{shippingAddressErrors.internalError}</InlineAlert>
      }
    </Pane>
  )
}

export default ShippingAddressForm
