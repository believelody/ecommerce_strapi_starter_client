import React from 'react'
import { Pane, Text } from 'evergreen-ui'
import ReactStarRatings from 'react-star-ratings'

const ProductDetailRating = ({ reviews }) => {
    const rating = reviews.reduce((acc, cur) => acc + cur.rating, 0)/reviews.length

    return (
        <Pane display='flex' alignItems='center' justifyContent='flex-start' width='50%'>
            <ReactStarRatings
                rating={rating}
                starDimension='20px'
                starSpacing='0px'
                starRatedColor='#FFD700'
                numberOfStars={5}
                name="global-rating"
            />
            <Pane marginLeft={4}>
                <Text>{rating}/5</Text>
            </Pane>
        </Pane>
    )
}

export default ProductDetailRating
