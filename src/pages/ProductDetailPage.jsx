import React from 'react'
import ProductDetail from '../components/products/ProductDetail'
import Page from '../components/page/Page'

const bg = `
  linear-gradient(135deg, rgb(203, 70, 215) 0%, rgb(203, 70, 215) 28%,rgb(138, 55, 153) 28%, rgb(138, 55, 153) 39%,rgb(94, 44, 112) 39%, rgb(94, 44, 112) 41%,rgb(160, 60, 174) 41%, rgb(160, 60, 174) 42%,rgb(181, 65, 194) 42%, rgb(181, 65, 194) 44%,rgb(73, 39, 92) 44%, rgb(73, 39, 92) 59%,rgb(116, 49, 133) 59%, rgb(116, 49, 133) 95%,rgb(51, 34, 71) 95%, rgb(51, 34, 71) 100%)
`

const ProductDetailPage = ({ match }) => {
  return (
    <Page bg={bg} padding={12}>
      <ProductDetail id={match.params.id} />
    </Page>
  )
}

export default ProductDetailPage
