import React, { useState, useEffect } from 'react'
import { Pane, Card, Text } from 'evergreen-ui'
import ReviewItem from './ReviewItem'
import moment from 'moment'
import ReviewPagination from './ReviewPagination'
import ReviewFilter from './ReviewFilter'

const ReviewsList = ({ reviews }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [reviewPerPage, setReviewPerPage] = useState(15)
    const [start, setStart] = useState(currentIndex)
    const [end, setEnd] = useState(reviewPerPage)

    useEffect(() => {
        setCurrentIndex(0)
        setStart(0)
        setEnd(reviewPerPage)
    }, [reviewPerPage])

    return (
        reviews.length > 0 ?
        <Pane padding={8}>
            <ReviewFilter value={reviewPerPage} handleValue={setReviewPerPage} />
            {
                reviews
                    .sort((a, b) => moment(a.date).isBefore(b.date) ? 1 : -1)
                    .slice(start, end)
                    .map((review, index) => <ReviewItem key={index} review={review} />)
            }
            <ReviewPagination
                max={Math.ceil(reviews.length / reviewPerPage)}
                nbPerPage={reviewPerPage}
                start={start}
                end={end}
                setStart={setStart}
                setEnd={setEnd}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
            />
        </Pane>
        :
        <Card padding={16} border>
            <Text>No review</Text>
        </Card>
    )
}

export default ReviewsList
