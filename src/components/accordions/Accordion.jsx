import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import AccordionContent from './AccordionContent'
import AccordionHeader from './AccordionHeader'
import devices from '../../utils/devices.utils' 

const RowStyle = styled.div`
  height: auto;
  width: 100%;
  border-bottom: ${props => props.borderBottom ? '1px solid rgba(0, 0, 0, 0.2)' : 'none'};
  overflow: auto;
  & .row-header {
    height: 30px;
    line-height: 40px;
    cursor: pointer;

    & .row-icon {
      margin-top: 20px;
      transition: all 300ms ease-in-out;
    }
  }

  & .row-content {
    font-size: 0.85em;
    height: ${({isExpanded}) => isExpanded ? 'auto' : '0px'};
    transition: height 300ms ease-in-out;
    overflow: auto;
  }

  @media ${devices.desktop} {

  }

  @media ${devices.mobileL} {
    font-size: 0.85em;
  }
`

const Accordion = ({ header, content, index, currentIndex, setIndex, borderBottom }) => {
  const itemRef = useRef()
  const itemTitleRef = useRef()
  const itemContentRef = useRef()

  const [itemDiv, setExpandDiv] = useState({
    id: index,
    isExpanded: false
  })

  const handleClick = index => {
    setIndex(currentIndex === index ? -1 : index)
  }

  // const expandDiv = () => {
  //   itemContentRef.current.style.height = `${itemContentRef.current.scrollHeight}px`
  // }

  // const reduceDiv = () => {
  //   itemContentRef.current.style.height = `0px`
  // }

  useEffect(() => {
    setExpandDiv(prevExpandDiv => ({
      ...prevExpandDiv,
      isExpanded: currentIndex === -1 || currentIndex !== prevExpandDiv.id ? false : true
    }))
  }, [currentIndex])

  // useEffect(() => itemRef && itemTitleRef && itemContentRef && itemContentRef.current && itemDiv.isExpanded ? expandDiv() : reduceDiv(), [itemDiv.isExpanded])

  // useEffect(() => {
  //   if (itemRef && itemTitleRef && itemContentRef && itemContentRef.current && itemDiv.isExpanded) {
  //     itemContentRef.current.style.height = `${itemContentRef.current.scrollHeight}px`
  //   }
  // })

  return (
    <RowStyle
      ref={itemRef}
      borderBottom={borderBottom}
      isExpanded={itemDiv.isExpanded}
    >
      <AccordionHeader titleRef={itemTitleRef} handleClick={() => handleClick(index)}>
        {header}
      </AccordionHeader>
      <AccordionContent contentRef={itemContentRef}>
        {content}
      </AccordionContent>
    </RowStyle>
  )
}

export default Accordion
