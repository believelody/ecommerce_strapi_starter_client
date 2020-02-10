import React from 'react'
import { Card, Heading, Avatar, Paragraph, Pane, Strong, Small, Text, Button } from 'evergreen-ui'
import StarRatings from 'react-star-ratings'
import { useAppHooks } from '../../context'
import { OPEN_MODAL_CHILDREN } from '../../reducers/modalReducer'
import ProductImageGallery from '../galleries/ProductImageGallery'
import moment from 'moment'

const ReviewItem = ({ review }) => {
    const { useModal } = useAppHooks()
    const [modalState, dispatchModal] = useModal

    const displayImage = images => {
        dispatchModal({
            type: OPEN_MODAL_CHILDREN,
            payload: {
                children: <ProductImageGallery fullScreen={false} images={images} />,
                title: 'My images'
            }
        })
    }

    return (
        <Card padding={8} marginBottom={8} elevation={1} border>
            <Pane>
                <Heading display='flex' justifyContent='space-between' alignItems='center'>
                    <Pane display='flex' justifyContent='space-between' alignItems='center'>
                        <Avatar size={50} name={review.author} />
                        <Pane display='flex' flexDirection='column' marginLeft={8}>
                            <Strong>{review.author}</Strong>
                            <Text><Small>{review.order}</Small></Text>
                            <Text><Small><i>{moment(review.date).format('MMMM Do YYYY')}</i></Small></Text>
                        </Pane>
                    </Pane>
                    <Pane>
                        <StarRatings
                            rating={review.rating}
                            starRatedColor='blue'
                            numberOfStars={5}
                            name='rating'
                            starDimension='20px'
                            starSpacing='0px'
                            starRatedColor='#FFD700'
                        />
                    </Pane>
                </Heading>
            </Pane>
            {
                review.text &&
                <Pane borderTop paddingTop={8}>
                    <Paragraph>
                        {review.text}
                    </Paragraph>
                    {
                        review.thumbnails.length > 0 &&
                        <Pane display='flex' justifyContent='flex-end'>
                            <Button
                                appearance='primary'
                                onClick={() => displayImage(review.thumbnails)}
                            >
                                View images
                            </Button>
                        </Pane>
                    }
                </Pane>
            }
        </Card>
    )
}

export default ReviewItem
