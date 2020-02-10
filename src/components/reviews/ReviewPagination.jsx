import React from 'react'
import { Pane } from 'evergreen-ui'
import Pagination from '../pagination/Pagination'

const ReviewPagination = ({ max, currentIndex, setCurrentIndex, nbPerPage, start, end, setStart, setEnd }) => {
    return (
        <Pane>
            <Pagination
                max={max}
                nbPerPage={nbPerPage}
                start={start}
                end={end}
                setStart={setStart}
                setEnd={setEnd}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
                hasFirst hasLast
            />
        </Pane>
    )
}

export default ReviewPagination
