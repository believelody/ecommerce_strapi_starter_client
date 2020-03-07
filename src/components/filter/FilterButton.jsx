import React from 'react'
import { IconButton, Card } from 'evergreen-ui'
import styled from 'styled-components'
import { OPEN_SIDE_SHEET } from '../../reducers/sideSheetReducer'
import { Paragraph } from 'evergreen-ui/commonjs/typography'
import { useAppHooks } from '../../context'
import FilterContent from './FilterContent'

const FilterButtonStyle = styled.span`
    position: fixed;
    right: 6px;
    top: 6px;
`

const FilterButton = () => {
    const { useSideSheet } = useAppHooks()
    const [sideSheetState, dispatchSideSheet] = useSideSheet

    return (
        <FilterButtonStyle
            onClick={
                () => dispatchSideSheet({
                    type: OPEN_SIDE_SHEET,
                    payload: {
                        title: 'Products Filter',
                        description: 'Find what you search with options below',
                        content: ({ handleClose }) => (
                            <Card
                                backgroundColor="white"
                                elevation={0}
                                minHeight={300}
                                display="flex"
                                alignItems="start"
                                justifyContent="start"
                            >
                                <FilterContent handleClose={handleClose} />
                            </Card>
                        )
                    }
                })
            }
        >
            <IconButton icon="settings" />
        </FilterButtonStyle>
    )
}

export default FilterButton
