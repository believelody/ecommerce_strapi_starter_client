import React, { useEffect, useState } from 'react'
import { Pane, Card, Icon } from 'evergreen-ui'
import Accordion from '../accordions/Accordion'
import Description from '../description/Description'
import ProductImageGallery from '../galleries/ProductImageGallery'
import ProductOptions from '../products/ProductOptions'
import Label from '../label/Label'
import ReviewsList from '../reviews/ReviewsList'
import api from '../../api'
import { useAppHooks } from '../../context'
import { SET_LOADING, RESET_LOADING } from '../../reducers/loadingReducer'
import {arrayColor, arraySize} from '../../utils/product.utils'
import ProductDetailRating from './ProductDetailRating'
import ProductDetailWish from './ProductDetailWish'
import EntrustPayment from '../entrust/EntrustPayment'
import EntrustShipping from '../entrust/EntrustShipping'
import { Button } from 'evergreen-ui/commonjs/buttons'

const ProductDetail = ({ id }) => {
  const {useLoading, history} = useAppHooks()
  const [loadingState, dispatchLoading] = useLoading

  const [product, setProduct] = useState(null)
  const [currentIndex, setIndex] = useState(0)

  const COLORS = product && arrayColor(product.colors)
  const SIZES = product && arraySize(product.sizes)

  const backToList = () => {
    history.goBack()
  }

  const fetchProduct = async id => {
    try {
      const {data} = await api.product.getProduct(id)
      setProduct(data.product)
      dispatchLoading({ type: RESET_LOADING })
    } catch (e) {
      console.log(e.message)
      dispatchLoading({ type: RESET_LOADING })
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
          <Button height={40} onClick={backToList} marginBottom={16}>
            <Icon icon='arrow-left' marginRight={8} />
            Back to list
          </Button>
          <Card padding={15} elevation={2} background='tint1' marginBottom={15}>
            <Pane display='flex' alignItems='start' justifyContent='space-around' flexWrap='wrap' minHeight={300}>
              <ProductImageGallery images={product.thumbnails} />
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
                  />
                </Pane>
                <Pane display='flex' alignItems='center' justifyContent='space-around' marginY={4} marginX={8}>
                  <ProductDetailRating reviews={product.reviews} />
                  <ProductDetailWish product={product} />
                </Pane>
              </Card>
            </Pane>
          </Card>
          <Card elevation={2} background='tint1' marginTop={15}>
            <Accordion
              header={({ handleClick }) => <Label name='Description' handleClick={handleClick} />}
              content={<Description text={product.description} />}
              index={0}
              currentIndex={currentIndex}
              setIndex={setIndex}
            />
            <hr />
            <Accordion
              header={({ handleClick }) => <Label name='Reviews' handleClick={handleClick} />}
              content={
                <ReviewsList reviews={product.reviews} />
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
