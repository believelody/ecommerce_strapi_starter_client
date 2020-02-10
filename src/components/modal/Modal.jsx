import React from 'react'
import { Pane, Dialog } from 'evergreen-ui'
import { useAppHooks } from '../../context'
import { CLOSE_MODAL } from '../../reducers/modalReducer'

const Modal = () => {
  const { useModal } = useAppHooks()
  const [{isOpened, title, msg, status, action, labelConfirm, children}, dispatchModal] = useModal

  const closeModal = async () => {
    dispatchModal({ type: CLOSE_MODAL })
    if (action) await action()
  }

  return (
    <Pane>
      <Dialog
       isShown={isOpened}
       title={title}
       onCloseComplete={() => dispatchModal({ type: CLOSE_MODAL })}
       onConfirm={closeModal}
       intent={status}
       confirmLabel={labelConfirm ? labelConfirm : 'Delete'}
       hasFooter={children ? false : true}
      >
        {!children && msg && msg}
        {!children && !msg && 'Please confirm your action'}
        {children}
      </Dialog>
    </Pane>
  )
}

export default Modal
