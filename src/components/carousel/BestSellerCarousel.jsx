import React, { useRef } from 'react'
import { Pane, IconButton, Card, Button, Heading } from 'evergreen-ui'
import ReactAliceCarousel from 'react-alice-carousel'
import isMobileUtils from '../../utils/isMobile.utils'
import { NavLink } from 'react-router-dom'
import { apiUrl } from '../../api'
import Label from '../label/Label'
import Image from '../image/Image'

const CarouselItem = ({ item }) => (
    <Card
        width='100%'
        height={420}
        display={isMobileUtils() ? 'block' : 'flex'}
        background='tint1'
    >
        <Pane width='65%' borderLeft borderRight>
            <NavLink to={`/products/${item._id}`}>
                <Image
                    width='100%'
                    height='auto'
                    src={`${apiUrl}${item.thumbnails[0].url}`}
                    alt={`${apiUrl}${item.thumbnails[0].name}`}
                />
            </NavLink>
        </Pane>
        <Pane width='35%'>
            <Pane borderBottom paddingY={16} textAlign='center'>
                <Heading size={600}>Our Bestsellers 👑💯</Heading>
            </Pane>
            <Pane borderBottom paddingY={16} textAlign='center'>
                <Heading size={500}>{item.name}</Heading>
            </Pane>
            {
                item.nbOrder &&
                <Pane
                    background='#F7D154'
                    paddingY={8}
                    marginY={8}
                    textAlign='center'
                >
                    <Label name={`Already more than ${item.nbOrder} sold 🤩😵😲`} size={500} />
                </Pane>
            }
            <Pane>
                <NavLink to={`/products/${item._id}`}>
                    <Button height={38} appearance='minimal' intent='success'>
                        Get yours right now before sold out ❗❗❗
                    </Button>
                </NavLink>
            </Pane>
        </Pane>
    </Card>
)

const BestSellerCarousel = ({ items }) => {
    const carouselRef = useRef()

    const handleSlidePrev = (e) => {
        carouselRef.current.slidePrev()
    }

    const handleSlideNext = (e) => {
        carouselRef.current.slideNext()
    }

    return (
        <Pane
            width='100%'
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            marginY={16}
        >
            <Pane width='10%' textAlign='left' display='flex' justifyContent='center'>
                <IconButton
                    height={40}
                    icon='chevron-left'
                    onClick={handleSlidePrev}
                    borderRadius='50%'
                />
            </Pane>
            <Pane width='90%'>
                <ReactAliceCarousel
                    width='100%'
                    ref={carouselRef}
                    mouseTrackingEnabled
                    duration={1000}
                    autoPlay
                    stopAutoPlayOnHover
                    buttonsDisabled
                    autoPlayInterval={7000}
                    items={items.map(item => (<CarouselItem key={item._id} item={item} />))}
                />
            </Pane>
            <Pane width='10%' textAlign='right' display='flex' justifyContent='center'>
                <IconButton
                    height={40}
                    icon='chevron-right'
                    onClick={handleSlideNext}
                    borderRadius='50%'
                />
            </Pane>
        </Pane>
    )
}

export default BestSellerCarousel
