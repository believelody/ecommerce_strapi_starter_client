import React, { useRef } from 'react'
import AliceCarousel, { slideNext } from 'react-alice-carousel'
import { Card, Pane, Text, Paragraph, Button, Heading, Badge, UnorderedList, IconButton } from 'evergreen-ui'
import { apiUrl } from '../../api'
import Image from '../image/Image'
import { NavLink } from 'react-router-dom'
import Label from '../label/Label'
import isMobileUtils from '../../utils/isMobile.utils'

const CarouselItem = ({item}) => (
    <Card
        width='100%'
        height={380}
        display={isMobileUtils() ? 'block' : 'flex'}
        background='tint1'
    >
        <Pane width='25%'>
            <Pane borderBottom paddingY={16} textAlign='center'>
                <Heading size={500}>{item.name}</Heading>
            </Pane>
            <Pane textAlign='left' marginX={4}>
                <Paragraph>
                    {item.description.slice(0, 100)}...
                </Paragraph>
            </Pane>
        </Pane>
        <Pane width='45%' borderLeft borderRight>
            <NavLink to={`/products/${item._id}`}>
                <Image
                    width='100%'
                    height='auto'
                    src={`${apiUrl}${item.thumbnails[0].url}`}
                    alt={`${apiUrl}${item.thumbnails[0].name}`}
                />
            </NavLink>
        </Pane>
        <Pane width='30%' textAlign='center'>
            <Pane marginY={8} borderBottom>
                <Heading size={500}>💥New Product On Store !!!💥</Heading>
                <Paragraph>Don't miss it, check available variants. Link below</Paragraph>
            </Pane>
            <Pane borderBottom>
                <UnorderedList marginY={12}>
                    {
                        item.colors.map((color, index) => (
                            <Text
                                key={index}
                                marginX={8}
                                paddingY={4}
                                paddingX={8}
                                size={400}
                                color='white'
                                borderRadius={2}
                                background={`${color.name}`}
                            >
                                {color.name}
                            </Text>
                        ))
                    }
                </UnorderedList>
                <UnorderedList marginY={8}>
                    {
                        item.sizes.map((size, index) => (
                            <Badge key={index} isSolid marginX={16} size={300}>{size.name}</Badge>
                        ))
                    }
                </UnorderedList>
            </Pane>
            <Pane
                background='#F7D154'
                paddingY={8}
                marginY={8}
                textAlign='center'
            >
                <Label name={`Only ${item.price} $`} size={600} />
            </Pane>
            <Pane>
                <NavLink to={`/products/${item._id}`}>
                    <Button appearance='primary' intent='success'>
                        Get yours right now ❗❗❗
                                    </Button>
                </NavLink>
            </Pane>
        </Pane>
    </Card>
)

const NewProductCarousel = ({ items }) => {
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
                <AliceCarousel
                    width='100%'
                    ref={carouselRef}
                    mouseTrackingEnabled
                    duration={1000}
                    autoPlay
                    stopAutoPlayOnHover
                    buttonsDisabled 
                    autoPlayInterval={5000}
                    fadeOutAnimation={true}
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

export default NewProductCarousel
