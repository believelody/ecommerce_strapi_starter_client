import React from 'react'
import { SideSheet, Paragraph } from 'evergreen-ui'
import { useAppHooks } from '../../context'
import { CLOSE_SIDE_SHEET } from '../../reducers/sideSheetReducer'
import TitleSideSheet from './TitleSideSheet'
import ContentSideSheet from './ContentSideSheet'

const SideSheetNav = () => {
    const {useSideSheet} = useAppHooks()
    const [{isShowed, title, description, content: Component, width}, dispatchSideSheet] = useSideSheet

    const closeSideSheet = () => dispatchSideSheet({ type: CLOSE_SIDE_SHEET })

    return (
        <SideSheet
            isShown={isShowed}
            onCloseComplete={closeSideSheet}
            containerProps={{
                display: 'flex',
                flex: 1,
                flexDirection: 'column'
            }}
            width={width}
        >
            <TitleSideSheet title={title} description={description} />
            <ContentSideSheet>
                {!!Component && <Component handleClose={closeSideSheet} />}
            </ContentSideSheet>
        </SideSheet>
    )
}

export default SideSheetNav
