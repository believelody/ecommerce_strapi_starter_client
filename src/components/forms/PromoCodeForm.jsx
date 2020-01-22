import React, { useState } from 'react'
import FieldComponent from '../fields/FieldComponent'
import { Button, Pane, Text } from 'evergreen-ui'
import styled from 'styled-components'
import { useAppHooks } from '../../context'
import promoCodeMock from '../../mock/promoCode.mock'
import { PROMO_CODE } from '../../reducers/checkoutReducer'

const FormStyle = styled.form`
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
`

const PromoCodeForm = () => {
    const { useCheckout } = useAppHooks()
    const [checkoutState, dispatchCheckout] = useCheckout

    const [code, setCode] = useState('')
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        if (!code) {
            setError('Promo code field cannot be empty.')
        }
        else {
            if (promoCodeMock.find(p => code === p.code)) {
                dispatchCheckout({
                    type: PROMO_CODE,
                    payload: {
                        promo: promoCodeMock.find(p => code === p.code)
                    }
                })
                setSuccess(true)
            }
            else {
                setError('Sorry, this promo code doesn\'t exist.')
            }
        }
    }

    return !success ?
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
