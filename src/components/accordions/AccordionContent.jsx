import React from 'react'

const AccordionContent = ({ children, contentRef }) => {
  return (
    <div className='row-content' ref={contentRef}>
      {children}
    </div>
  )
}

export default AccordionContent
