import React from 'react'
import { Pane, Spinner, Text } from 'evergreen-ui'
import { useAppHooks } from '../../context'

let gradient = ``

const Loading = ({}) => {
  const { useLoading } = useAppHooks()
  const [{loading, msg}, dispatchLoading] = useLoading

  console.log(loading)

  return (
    loading &&
    <Pane
      display="flex"
      overflow='hidden'
      alignItems="center"
      justifyContent="center"
      position='fixed'
      width='100vw'
      height='100vh'
      backgroundColor='rgba(255, 255, 255, .8)'
      flexDirection='column'
    >
      <Spinner size={50} />
      <Text size={600}>{msg ? msg : 'Loading your content'}</Text>
    </Pane>
  );
}

export default Loading
