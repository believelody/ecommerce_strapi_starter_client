import React, { useState } from 'react'
import { Pane, Button } from 'evergreen-ui'

const Pagination = ({ max, currentIndex, setCurrentIndex, start, end, nbPerPage, setStart, setEnd, hasFirst = false, hasLast = false }) => {
    const ARRAY = Array.from({length: max}, (v,k) => k)

    const handleFirst = () => {
        setCurrentIndex(0)
        setStart(0)
        setEnd(nbPerPage)
    }

    const handlePrevious = () => {
        setCurrentIndex(prevIndex => prevIndex - 1)
        setEnd(start)
        setStart(prevStart => Math.abs(prevStart - nbPerPage))
    }

    const handleSelectIndex = index => {
        if (index > currentIndex) {
            handleNext()
        }
        else {
            handlePrevious()
        }
    }

    const handleNext = () => {
        setCurrentIndex(prevIndex => prevIndex + 1)
        setStart(end)
        setEnd(prevEnd => prevEnd + nbPerPage)
    }

    const handleLast = () => {
        setCurrentIndex(max - 1)
        setEnd(max * nbPerPage)
        setStart((max - 1) * nbPerPage)
    }

    return (
        <Pane display='flex' justifyContent='space-around' alignItems='center'>
            <Pane>
                {hasFirst && <Button marginRight={16} disabled={currentIndex === 0} onClick={handleFirst}>First</Button>}
                <Button disabled={currentIndex === 0} onClick={handlePrevious}>Previous</Button>
            </Pane>
            <Pane maxWidth={300} border>
                {
                    ARRAY.length > 0 && ARRAY.map(i =>
                        <Button
                            key={i}
                            onClick={() => handleSelectIndex(i)}
                            appearance={currentIndex === i ? 'primary' : 'minimal'}
                        >
                            {i+1}
                        </Button>
                    )
                }
            </Pane>
            <Pane>
                <Button disabled={currentIndex === max - 1} onClick={handleNext}>Next</Button>
                {hasLast && <Button marginLeft={16} disabled={currentIndex === max - 1} onClick={handleLast}>Last</Button>}
            </Pane>
        </Pane>
    )
}

export default Pagination
