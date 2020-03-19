import React from 'react'
import { Pane } from 'evergreen-ui'
import ProductList from '../components/products/ProductList'
import FilterButton from '../components/filter/FilterButton'

const bg = `
  linear-gradient(56deg, rgba(130, 130, 130, 0.05) 0%, rgba(130, 130, 130, 0.05) 33.333%,rgba(255, 255, 255, 0.05) 33.333%, rgba(255, 255, 255, 0.05) 66.666%,rgba(198, 198, 198, 0.05) 66.666%, rgba(198, 198, 198, 0.05) 99.999%),linear-gradient(29deg, rgba(94, 94, 94, 0.05) 0%, rgba(94, 94, 94, 0.05) 33.333%,rgba(185, 185, 185, 0.05) 33.333%, rgba(185, 185, 185, 0.05) 66.666%,rgba(113, 113, 113, 0.05) 66.666%, rgba(113, 113, 113, 0.05) 99.999%),linear-gradient(129deg, rgba(196, 196, 196, 0.05) 0%, rgba(196, 196, 196, 0.05) 33.333%,rgba(148, 148, 148, 0.05) 33.333%, rgba(148, 148, 148, 0.05) 66.666%,rgba(24, 24, 24, 0.05) 66.666%, rgba(24, 24, 24, 0.05) 99.999%),linear-gradient(76deg, rgba(19, 19, 19, 0.05) 0%, rgba(19, 19, 19, 0.05) 33.333%,rgba(159, 159, 159, 0.05) 33.333%, rgba(159, 159, 159, 0.05) 66.666%,rgba(108, 108, 108, 0.05) 66.666%, rgba(108, 108, 108, 0.05) 99.999%),linear-gradient(112deg, rgba(225, 225, 225, 0.05) 0%, rgba(225, 225, 225, 0.05) 33.333%,rgba(13, 13, 13, 0.05) 33.333%, rgba(13, 13, 13, 0.05) 66.666%,rgba(81, 81, 81, 0.05) 66.666%, rgba(81, 81, 81, 0.05) 99.999%),linear-gradient(90deg, rgb(75, 2, 28),rgb(175, 60, 142))
`

const ProductListPage = () => {
    return (
        <Pane background={bg} minHeight='100vh'>
            <ProductList />
            <FilterButton />
        </Pane>
    )
}

export default ProductListPage
