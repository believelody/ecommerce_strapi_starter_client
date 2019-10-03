import React from 'react'

const AccordionHeader = ({ children, titleRef, handleClick }) => {
  return (
    <div className='row-header' ref={titleRef} onClick={handleClick}>
      {children}
    </div>
  )
}

export default AccordionHeader
