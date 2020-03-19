import React, { useEffect, useState } from 'react'
import { Pane, Text, UnorderedList, Heading } from 'evergreen-ui'
import ProductItem from './ProductItem'
import api, { apiUrl } from '../../api'
import { useAppHooks } from '../../context'
import { SET_LOADING, RESET_LOADING } from '../../reducers/loadingReducer'

const ProductList = ({}) => {
  const {useLoading} = useAppHooks()
  const [loadingState, dispatchLoading] = useLoading
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    try {
      const {data} = await api.product.getProducts()
      if (data.products.length > 0) {
        setProducts(data.products)
      }
    } catch (e) {
      console.log(e.message)
    }
    dispatchLoading({ type: RESET_LOADING })
  }

  useEffect(() => {
    dispatchLoading({ type: SET_LOADING, payload: {msg: 'Please wait'} })
    if (products.length === 0) fetchProducts()
  }, [])

  return (
    <Pane width='100%'>
      <Pane borderBottom>
        <Heading marginBottom={8} width='100%' textAlign='center' size={600} color='white'>All Products</Heading>
      </Pane>
      <UnorderedList listStyle='none' display='flex' flexWrap='wrap' justifyContent='space-between' marginX={16}>
        {
          products.length > 0 && products.map(product => (
            <ProductItem key={product._id} product={product} />
          ))
        }
      </UnorderedList>
    </Pane>
  )
}

export default ProductList
