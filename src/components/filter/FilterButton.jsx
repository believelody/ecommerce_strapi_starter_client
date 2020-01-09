import React from 'react'
import { IconButton } from 'evergreen-ui'
import styled from 'styled-components'

const FilterButtonStyle = styled.span`
    position: fixed;
    right: 6px;
    top: 6px;
`

const FilterButton = () => {
    return (
        <FilterButtonStyle>
            <IconButton icon="settings" />
        </FilterButtonStyle>
    )
}

export default FilterButton
