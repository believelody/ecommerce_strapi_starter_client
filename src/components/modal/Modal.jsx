import React from 'react'
import { Pane, Dialog } from 'evergreen-ui'
import { useAppHooks } from '../../context'
import { CLOSE_MODAL } from '../../reducers/modalReducer'

const Modal = () => {
  const { useModal } = useAppHooks()
  const [{isOpened, title, msg, status, action, labelConfirm, children: Component}, dispatchModal] = useModal

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
        hasFooter={!!Component ? false : true}
      >
        {!!!Component && msg && msg}
        {!!!Component && !msg && 'Please confirm your action'}
        <Pane display='flex' justifyContent='center' alignItems='center' width='100%'>
          {!!Component && <Component handleClose={() => dispatchModal({ type: CLOSE_MODAL })} />}
        </Pane>
      </Dialog>
    </Pane>
  )
}

export default Modal
