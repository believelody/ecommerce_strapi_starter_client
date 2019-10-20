import React from 'react'
import { Link } from 'react-router-dom'
import { Heading, Pane, Strong } from 'evergreen-ui'

const Label = ({ name, size = 500, handleClick = null, borderBottom = false, paddingBottom = 0, width, color = '', paddingY = 0, isLink, link = null }) => {

  return (
    <Pane
      display='flex'
      justifyContent='center'
      alignItems='center'
      borderBottom={borderBottom}
      paddingBottom={paddingBottom}
      width={width ? width : '100%'}
      onClick={handleClick}
      background={color}
      paddingY={paddingY}
    >
      {
        link ?
        <Link to={link}>
          <Heading size={size}>
            <Strong>{name}</Strong>
          </Heading>
        </Link> :
        <Heading size={size}>
          <Strong>{name}</Strong>
        </Heading>
      }
    </Pane>
  )
}

export default Label
