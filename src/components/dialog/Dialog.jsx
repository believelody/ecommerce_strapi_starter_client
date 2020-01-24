import React, { Children, useState } from 'react'
import { CornerDialog } from 'evergreen-ui'
import { useAppHooks } from '../../context'
import { CLOSE_DIALOG } from '../../reducers/dialogReducer'

const Dialog = () => {
    const { useDialog } = useAppHooks()
    const [{children: Component, isShowed, title}, dispatchDialog] = useDialog

    const handleClose = () => {
        dispatchDialog({ type: CLOSE_DIALOG })
    }

    return (
        <CornerDialog
            title={title}
            isShown={isShowed}
            onCloseComplete={handleClose}
            hasFooter={false}
            hasClose={false}
            width={400}
            margin={0}
            padding={0}
        >
            {!!Component && <Component handleClose={handleClose} />}
        </CornerDialog>
    )
}

export default Dialog
