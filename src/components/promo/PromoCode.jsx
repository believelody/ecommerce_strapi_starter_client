import React from 'react'
import { Card } from 'evergreen-ui'
import styled from 'styled-components'
import PromoCodeForm from '../forms/PromoCodeForm'

const PromoStyle = styled.div`
    width: 100%;
    margin-top: 4px;
    padding: 8px 8px 0px 8px;
    text-align: center;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.05);
`

const PromoCode = () => {
    return (
        <PromoStyle>
            <PromoCodeForm />
        </PromoStyle>
    )
}

export default PromoCode
