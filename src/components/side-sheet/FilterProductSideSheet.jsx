import React from 'react'
import { SideSheet, Paragraph } from 'evergreen-ui'
import { useAppHooks } from '../../context'
import { CLOSE_SIDE_SHEET } from '../../reducers/sideSheetReducer'
import TitleSideSheet from './TitleSideSheet'
import ContentSideSheet from './ContentSideSheet'

const FilterProductSideSheet = () => {
    const {useSideSheet} = useAppHooks()
    const [{isShowed, title, description, content}, dispatchSideSheet] = useSideSheet

    return (
        <SideSheet
            isShown={isShowed}
            onCloseComplete={() => dispatchSideSheet({ type: CLOSE_SIDE_SHEET})}
            containerProps={{
                display: 'flex',
                flex: 1,
                flexDirection: 'column'
            }}
        >
            <TitleSideSheet title={title} description={description} />
            <ContentSideSheet content={content} />
        </SideSheet>
    )
}

export default FilterProductSideSheet
