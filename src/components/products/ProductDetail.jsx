import React, { useEffect, useState } from 'react'
import { Pane, Card, Icon, Button } from 'evergreen-ui'
import Accordion from '../accordions/Accordion'
import Description from '../description/Description'
import ProductImageGallery from '../galleries/ProductImageGallery'
import ProductOptions from '../products/ProductOptions'
import Label from '../label/Label'
import ReviewsList from '../reviews/ReviewsList'
import api from '../../api'
import { useAppHooks } from '../../context'
import { SET_LOADING, RESET_LOADING } from '../../reducers/loadingReducer'
import ProductDetailData from './ProductDetailData'

const ProductDetail = ({ id }) => {
  const {useLoading, history} = useAppHooks()
  const [loadingState, dispatchLoading] = useLoading

  const [product, setProduct] = useState(null)
  const [currentIndex, setIndex] = useState(0)

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
              <ProductDetailData product={product} />
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
