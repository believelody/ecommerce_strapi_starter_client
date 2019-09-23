import React, { useState } from 'react'
import InputComponent from '../inputs/InputComponent'

const Desktop = () => {
  const [username, setUsername] = useState()

  const handleChange = e => setUsername(e.target.value)

  console.log(username)

  return (
    <div>
      <h1>Test</h1>
      <InputComponent name='username' placeholder='yes we can' handleChange={handleChange} />
    </div>
  )
}

export default Desktop
