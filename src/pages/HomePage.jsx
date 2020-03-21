import React, { useState, useEffect } from 'react'
import { useAppHooks } from '../context'
import api from '../api'
import NewProductCarousel from '../components/carousel/NewProductCarousel'
import { RESET_LOADING, SET_LOADING } from '../reducers/loadingReducer'
import BestSellerCarousel from '../components/carousel/BestSellerCarousel'
import { fetchBestSellers } from '../utils/product.utils'
import Page from '../components/page/Page'

const bg = `
  linear-gradient(149deg, rgba(85, 85, 85, 0.05) 0%, rgba(85, 85, 85, 0.05) 25%,rgba(11, 11, 11, 0.05) 25%, rgba(11, 11, 11, 0.05) 50%,rgba(182, 182, 182, 0.05) 50%, rgba(182, 182, 182, 0.05) 75%,rgba(28, 28, 28, 0.05) 75%, rgba(28, 28, 28, 0.05) 100%),linear-gradient(232deg, rgba(145, 145, 145, 0.05) 0%, rgba(145, 145, 145, 0.05) 25%,rgba(165, 165, 165, 0.05) 25%, rgba(165, 165, 165, 0.05) 50%,rgba(84, 84, 84, 0.05) 50%, rgba(84, 84, 84, 0.05) 75%,rgba(131, 131, 131, 0.05) 75%, rgba(131, 131, 131, 0.05) 100%),linear-gradient(321deg, rgba(254, 254, 254, 0.05) 0%, rgba(254, 254, 254, 0.05) 25%,rgba(249, 249, 249, 0.05) 25%, rgba(249, 249, 249, 0.05) 50%,rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 75%,rgba(104, 104, 104, 0.05) 75%, rgba(104, 104, 104, 0.05) 100%),linear-gradient(90deg, rgb(21, 8, 116),rgb(111, 197, 250))
`

const HomePage = () => {
  const { useLoading } = useAppHooks()
  const [loadingState, dispatchLoading] = useLoading
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    try {
      const { data: { products } } = await api.product.getProducts()
      if (products.length > 0) {
        setProducts(products)
      }
    } catch (e) {
      console.log(e.message)
    }
    dispatchLoading({ type: RESET_LOADING })
  }

  useEffect(() => {
    dispatchLoading({ type: SET_LOADING, payload: { msg: 'Please wait' } })
    if (products.length === 0) fetchProducts()
  }, [])
  
  return (
    <Page bg={bg} padding={8} display='block'>
      {
        products.length > 0 &&
        <>
          <NewProductCarousel items={products.filter(product => product.newProduct).map(product => product)} />
          <BestSellerCarousel items={fetchBestSellers(products)} />
        </>
      }
    </Page>
  )
}

export default HomePage
