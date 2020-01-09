import React from 'react'
import { Pane, Dialog } from 'evergreen-ui'
import { useAppHooks } from '../../context'
import { CLOSE_MODAL } from '../../reducers/modalReducer'

const Modal = () => {
  const { useModal } = useAppHooks()
  const [{isOpened, title, msg, status, action, labelConfirm}, dispatchModal] = useModal

  const closeModal = async () => {
    dispatchModal({ type: CLOSE_MODAL })
    await action()
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
      >
        {msg ? msg : 'Please confirm your action'}
      </Dialog>
    </Pane>
  )
}

export default Modal
