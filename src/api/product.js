import { query } from './'
import { getProductsQuery, getProductQuery } from '../queries/product.query'

export default {
  getProducts: () => query({query: getProductsQuery()}),
  getProduct: id => query({query: getProductQuery(id)})
}
