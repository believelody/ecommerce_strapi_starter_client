import React from 'react'
import { IconButton, Card } from 'evergreen-ui'
import styled from 'styled-components'
import { OPEN_SIDE_SHEET } from '../../reducers/sideSheetReducer'
import { Paragraph } from 'evergreen-ui/commonjs/typography'
import { useAppHooks } from '../../context'

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
                        content: (
                            <Card
                                backgroundColor="white"
                                elevation={0}
                                minHeight={300}
                                display="flex"
                                alignItems="start"
                                justifyContent="start"
                            >
                                <Paragraph>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos impedit odit incidunt reprehenderit, ab nisi sapiente esse voluptates quasi officiis ipsam at enim suscipit molestiae officia ex quidem exercitationem velit eaque, eligendi illum repellendus in. Cumque ipsa maxime officia quod. Aspernatur vel dignissimos dolore aliquam, velit debitis asperiores omnis obcaecati.
                            </Paragraph>
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
