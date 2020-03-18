import React, { useState, useEffect } from 'react'
import { Pane } from 'evergreen-ui'
import { useAppHooks } from '../context'
import api from '../api'
import NewProductCarousel from '../components/carousel/NewProductCarousel'
import { RESET_LOADING, SET_LOADING } from '../reducers/loadingReducer'
import BestSellerCarousel from '../components/carousel/BestSellerCarousel'
import { fetchBestSellers } from '../utils/product.utils'

const bg = `
  linear-gradient(336deg, rgba(121, 121, 121, 0.06) 0%, rgba(121, 121, 121, 0.06) 82%,rgba(125, 125, 125, 0.06) 82%, rgba(125, 125, 125, 0.06) 100%),linear-gradient(54deg, rgba(15, 15, 15, 0.01) 0%, rgba(15, 15, 15, 0.01) 57%,rgba(204, 204, 204, 0.01) 57%, rgba(204, 204, 204, 0.01) 100%),linear-gradient(174deg, rgba(151, 151, 151, 0.02) 0%, rgba(151, 151, 151, 0.02) 87%,rgba(226, 226, 226, 0.02) 87%, rgba(226, 226, 226, 0.02) 100%),linear-gradient(224deg, rgba(4, 4, 4, 0.02) 0%, rgba(4, 4, 4, 0.02) 15%,rgba(232, 232, 232, 0.02) 15%, rgba(232, 232, 232, 0.02) 100%),linear-gradient(215deg, rgba(5, 5, 5, 0.05) 0%, rgba(5, 5, 5, 0.05) 32%,rgba(97, 97, 97, 0.05) 32%, rgba(97, 97, 97, 0.05) 100%),linear-gradient(317deg, rgba(22, 22, 22, 0.06) 0%, rgba(22, 22, 22, 0.06) 56%,rgba(170, 170, 170, 0.06) 56%, rgba(170, 170, 170, 0.06) 100%),linear-gradient(15deg, rgba(172, 172, 172, 0.1) 0%, rgba(172, 172, 172, 0.1) 55%,rgba(157, 157, 157, 0.1) 55%, rgba(157, 157, 157, 0.1) 100%),linear-gradient(241deg, rgba(54, 54, 54, 0.06) 0%, rgba(54, 54, 54, 0.06) 34%,rgba(232, 232, 232, 0.06) 34%, rgba(232, 232, 232, 0.06) 100%),linear-gradient(222deg, rgba(129, 129, 129, 0.08) 0%, rgba(129, 129, 129, 0.08) 91%,rgba(169, 169, 169, 0.08) 91%, rgba(169, 169, 169, 0.08) 100%),linear-gradient(90deg, rgb(175, 20, 224),rgb(228, 14, 67))
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
    products.length > 0 &&
    <Pane background={bg} minHeight='100vh' padding={8} display='block'>
      <NewProductCarousel items={products.filter(product => product.newProduct).map(product => product)} />
      <BestSellerCarousel items={fetchBestSellers(products)} />
    </Pane>
  )
}

export default HomePage
