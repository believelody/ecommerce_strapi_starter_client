import React from 'react'
import { Pane, Text, Dialog, Button } from 'evergreen-ui'
import { useAppHooks } from '../../context'
import { SET_LOADING, RESET_LOADING } from '../../reducers/loadingReducer'
import { CLOSE_MODAL } from '../../reducers/modalReducer'

const Modal = () => {
  const { useModal, useLoading } = useAppHooks()
  const [{isOpened, title, msg, status, action, labelConfirm}, dispatchModal] = useModal
  const [loadingState, dispatchLoading] = useLoading

  const closeModal = () => {
    dispatchLoading({ type: SET_LOADING })
    action()
    dispatchModal({ type: CLOSE_MODAL })
    dispatchLoading({ type: RESET_LOADING })
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
