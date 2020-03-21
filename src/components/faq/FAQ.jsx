import React, { useState } from 'react'
import { Card } from 'evergreen-ui'
import ShippingFAQ from './ShippingFAQ'
import OrderFAQ from './OrderFAQ'
import ProductFAQ from './ProductFAQ'

const FAQ = () => {
    const [currentIndex, setIndex] = useState(-1)

    return (
        <Card background='tint1' marginTop={16}>
            <ShippingFAQ setIndex={setIndex} currentIndex={currentIndex} />
            <OrderFAQ setIndex={setIndex} currentIndex={currentIndex} />
            <ProductFAQ setIndex={setIndex} currentIndex={currentIndex} />
        </Card>
    )
}

export default FAQ
