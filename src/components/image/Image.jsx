import React from 'react'
import styled from 'styled-components'

const ImageStyle = styled.img`
    width: ${props => props.width || 'inherit'};
    height: ${props => props.height || 'inherit'};
    background-size: ${props => props.fit || 'cover'};
`

const Image = ({ src, alt, fit, width, height }) => {
    return <ImageStyle width={width} height={height} fit={fit} src={src} alt={alt} />
}

export default Image
