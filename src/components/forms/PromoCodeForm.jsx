import React, { useState } from 'react'
import FieldComponent from '../fields/FieldComponent'
import { Button, Pane, Text } from 'evergreen-ui'
import styled from 'styled-components'

const FormStyle = styled.form`
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
`

const PromoCodeForm = () => {
    const [code, setCode] = useState('')
    const [error, setError] = useState(null)
    const [isSubmitted, setIsSubmit] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        if (!code) {
            setError('Promo code field cannot be empty.')
        }
        else {
            setIsSubmit(true)
        }
    }

    return !isSubmitted ?
        <FormStyle onSubmit={handleSubmit}>
            <Pane width='70%' paddingLeft={8}>
                <FieldComponent
                    type='code'
                    name='code'
                    label='Do you have promo code? Please fill this form'
                    placeholder='CODEPROMOHERE'
                    value={code}
                    handleChange={e => setCode(e.target.value)}
                    error={error}
                />
            </Pane>
            <Pane width='30%'>
                <Button appearance='minimal' type='submit'>PROMO</Button>
            </Pane>
        </FormStyle>
        :
        <Pane padding={8} textAlign='center'>
            <Text>Alright, happy shopping 😉</Text>
        </Pane>
}

export default PromoCodeForm
