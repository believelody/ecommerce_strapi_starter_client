import React, { useState } from 'react'
import { Pane, Card, Text, UnorderedList, ListItem, Paragraph, Strong } from 'evergreen-ui'
import Label from '../label/Label'
import ProductOptions from './ProductOptions'
import ProductDetailRating from './ProductDetailRating'
import ProductDetailWish from './ProductDetailWish'
import { arrayColor, arraySize } from '../../utils/product.utils'

const ProductDetailData = ({ product }) => {
    const COLORS = product && arrayColor(product.colors)
    const SIZES = product && arraySize(product.sizes)

    const [quantity, setQuantity] = useState(0)

    const getQuantity = qt => setQuantity(qt)
    
    return (
        <Pane display='block'>
            <Card
                width={400}
                minWidth={320}
                border
            >
                <Pane
                    display='flex'
                    alignItems='center'
                    height={50}
                    overflow='hidden'
                >
                    <Label name={product.name} size={600} color='purpleTint' paddingY={10} />
                    <Pane
                        width={90}
                        background='yellowTint'
                        display='flex'
                        paddingY={10}
                        alignItems='center'
                        borderLeft
                    >
                        <Label name={`${product.price} $`} size={600} />
                    </Pane>
                </Pane>
                <Pane
                    borderTop
                    borderBottom
                >
                    <ProductOptions
                        product={product}
                        colors={COLORS}
                        sizes={SIZES}
                        width='100%'
                        withCartButton
                        getQuantityFromParent={getQuantity}
                    />
                </Pane>
                <Pane display='flex' alignItems='center' justifyContent='space-around' marginY={4} marginX={8}>
                    <ProductDetailRating reviews={product.reviews} />
                    <ProductDetailWish product={product} />
                </Pane>
            </Card>
            <Pane>
                {
                    quantity === 0 ?
                    <Paragraph>
                        Select a quantity and see which payment method suits you 😉
                    </Paragraph>
                    :
                    <UnorderedList>
                        <ListItem>
                            <Text>Pay <Strong>{product.price * quantity} $</Strong> by CB 💳 / Paypal, Or</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Pay <Strong>{((product.price * quantity) / 2).toFixed(2)} $</Strong> x 2 with <i>2 times recurrent payment</i>, Or</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Pay <Strong>{((product.price * quantity) / 3).toFixed(2)} $</Strong> x 3 with <i>3 times recurrent payment</i>, Or</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Pay <Strong>{((product.price * quantity) / 4).toFixed(2)} $</Strong> x 4 with <i>4 times recurrent payment</i></Text>
                        </ListItem>
                    </UnorderedList>
                }
            </Pane>
        </Pane>
    )
}

export default ProductDetailData
