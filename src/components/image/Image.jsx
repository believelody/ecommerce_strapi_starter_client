import React from 'react'
import styled from 'styled-components'

const ImageStyle = styled.img`
    width: 100%;
    height: auto;
`

const Image = ({ src, alt }) => {
    return <ImageStyle src={src} alt={alt} />
}

export default Image
