import React, { useState } from 'react'
import InputComponent from '../inputs/InputComponent'
import FieldComponent from '../fields/FieldComponent'
import Label from '../label/Label'

const Desktop = () => {
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [errors, setErrors] = useState(null)

  const handleName = e => setUsername(e.target.value)
  const handleEmail = e => setEmail(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()
    setErrors(null)
    if (!email) {
      setErrors({ email: 'Email is required' })
    }
  }

  return (
    <div>
      <h1>Test</h1>
      <form onSubmit={handleSubmit}>
        <FieldComponent
          label={<Label name='Email *' />}
          name='email'
          type='email'
          placeholder='ex: username@mail.com'
          handleChange={handleEmail}
          error={errors && errors.email}
        />
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default Desktop
