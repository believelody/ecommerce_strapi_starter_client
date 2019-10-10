import React, { useEffect, useState } from 'react'
import { Pane, Card, Text } from 'evergreen-ui'
import Accordion from '../accordions/Accordion'
import Description from '../description/Description'
import ProductImageGallery from '../images/ProductImageGallery'
import ProductOptions from '../products/ProductOptions'
import Label from '../label/Label'
import api from '../../api'
import { useAppHooks } from '../../context'
import isMobile from '../../utils/isMobile.utils'
import { SET_LOADING, RESET_LOADING } from '../../reducers/loadingReducer'
import {arrayColor, arraySize} from '../../utils/product.utils'

const ProductDetail = ({ id }) => {
  const {useLoading} = useAppHooks()
  const [loadingState, dispatchLoading] = useLoading

  const [product, setProduct] = useState(null)
  const [currentIndex, setIndex] = useState(0)

  const COLORS = product && arrayColor(product.colors)
  const SIZES = product && arraySize(product.sizes)

  const fetchProduct = async id => {
    try {
      const {data} = await api.product.getProduct(id)
      setProduct(data.product)
      dispatchLoading({ type: RESET_LOADING })
    } catch (e) {
      console.log(e.message)
    }
  }

  useEffect(() => {
    dispatchLoading({ type: SET_LOADING })
    if (!product) fetchProduct(id)
  }, [])

  return (
    <Pane>
      {
        product &&
        <React.Fragment>
          <Card padding={15} elevation={2} background='tint1' marginBottom={15}>
            <Pane display='flex' alignItems='start' justifyContent='space-around' flexWrap='wrap' minHeight={300}>
              <ProductImageGallery images={product.thumbnails} />
              <Card
                width={400}
                minWidth={320}
                borderTop
                borderLeft
                borderRight
                borderBottom
              >
                <Pane
                  display='flex'
                  alignItems='center'
                  height={50}
                  overflow='hidden'
                >
                  <Label name={product.name} size={800} color='purpleTint' paddingY={10} />
                  <Pane
                    width={90}
                    background='tealTint'
                    display='flex'
                    paddingY={10}
                    alignItems='center'
                    borderLeft
                  >
                    <Label name={`${product.price} $`} size={800} />
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
                  />
                </Pane>
              </Card>
            </Pane>
          </Card>
          <Card elevation={2} background='tint1' marginTop={15}>
            <Accordion
              header={<Label name='Description' />}
              content={<Description text={product.description} />}
              index={0}
              currentIndex={currentIndex}
              setIndex={setIndex}
            />
            <Accordion
              header={<Label name='Reviews' />}
              content={
                <Pane maxHeight={600}>
                  <Text>Reviews</Text>
                </Pane>
              }
              index={1}
              currentIndex={currentIndex}
              setIndex={setIndex}
            />
          </Card>
        </React.Fragment>
      }
    </Pane>
  )
}

export default ProductDetail