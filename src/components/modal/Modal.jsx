import React, { useState } from 'react'
import { Pane, Dialog, Text } from 'evergreen-ui'
import { useAppHooks } from '../../context'
import { CLOSE_MODAL } from '../../reducers/modalReducer'

const Modal = () => {
  const { useModal } = useAppHooks()
  const [{isOpened, title, msg, status, action, labelConfirm, children: Component}, dispatchModal] = useModal

  const [submitting, setSubmitting] = useState(false)

  const closeModal = async () => {
    if (action) {
      try {
        setSubmitting(true)
        await action()
        setSubmitting(false)
      } catch (e) {
        console.log(e)
        setSubmitting(false)
      }
    }
    dispatchModal({ type: CLOSE_MODAL })
  }

  return (
    <Pane>
      <Dialog
        isShown={isOpened}
        title={title}
        onCloseComplete={() => dispatchModal({ type: CLOSE_MODAL })}
        onConfirm={closeModal}
        intent={status}
        confirmLabel={submitting ? 'Please wait ...' : labelConfirm ? labelConfirm : 'Delete'}
        hasFooter={!!Component ? false : true}
        isConfirmLoading={submitting}
      >
        {!!!Component && <Text>{msg || 'Please confirm your action'}</Text>}
        <Pane display='flex' justifyContent='center' alignItems='center' width='100%'>
          {!!Component && <Component handleClose={() => dispatchModal({ type: CLOSE_MODAL })} />}
        </Pane>
      </Dialog>
    </Pane>
  )
}

export default Modal
