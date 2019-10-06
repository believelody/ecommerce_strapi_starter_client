import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import AccordionContent from './AccordionContent'
import AccordionHeader from './AccordionHeader'
import { useAppHooks } from '../../context'
import devices from '../../utils/devices.utils'

const RowStyle = styled.div`
  height: 30px;
  width: 100%;
  border-bottom: ${props => props.borderBottom ? '1px solid rgba(0, 0, 0, 0.2)' : 'none'};
  overflow: ${props => props.activateScroll ? 'auto' : 'hidden'};
  transition: all 300ms ease-in-out;

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
    padding: 10px;
    height: auto;
    position: relative;
    overflow-y: visible;
  }

  @media ${devices.desktop} {

  }

  @media ${devices.mobileL} {
    font-size: 0.85em;
  }
`

const Accordion = ({ header, content, index, currentIndex, setIndex, borderBottom, scrollAuto = false, predefinedHeight = 0 }) => {
  const itemRef = useRef()
  const itemTitleRef = useRef()
  const itemContentRef = useRef()

  const [itemDiv, setExpandDiv] = useState({
    id: index,
    isExpanded: false
  })

  const expandDiv = () => {
    let contentHeight = predefinedHeight > 0 ? predefinedHeight : itemContentRef.current.getBoundingClientRect().height
    console.log(contentHeight)
    if (itemDiv.isExpanded && currentIndex === itemDiv.id) {
      itemRef.current.style.height = `${itemTitleRef.current.getBoundingClientRect()
        .height + contentHeight}px`
      // iconRef.current.style.transform = "rotate3d(0, 0, 0, 450deg)"
    }
  }

  const reduceDiv = () => {
    if (!itemDiv.isExpanded && (currentIndex === -1 || currentIndex !== itemDiv.id)) {
      itemRef.current.style.height = `30px`
      // iconRef.current.style.transform = "rotate3d(0)"
    }
  }

  const handleClick = index => {
    setIndex(currentIndex === index ? -1 : index)
  }

  useEffect(() => {
    setExpandDiv(prevExpandDiv => ({
      ...prevExpandDiv,
      isExpanded: currentIndex === -1 || currentIndex !== prevExpandDiv.id ? false : true
    }))
  }, [currentIndex])

  useEffect(() => itemRef && itemTitleRef && itemContentRef && itemDiv.isExpanded ? expandDiv() : reduceDiv(), [itemDiv.isExpanded])

  return (
    <RowStyle ref={itemRef} borderBottom={borderBottom} activateScroll={scrollAuto && itemDiv.isExpanded}>
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
