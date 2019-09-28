import React, { useEffect, useState } from 'react'
import { Pane, Text, UnorderedList } from 'evergreen-ui'
import api from '../../api'
import ProductItem from './ProductItem'

const ProductList = ({}) => {
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
  }

  useEffect(() => {
    if (products.length === 0) fetchProducts()
  }, [fetchProducts])

  return (
    <Pane width='100%'>
      <Text width='100%' textAlign='center' size={600}>Product List</Text>
      <UnorderedList listStyle='none'>
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
