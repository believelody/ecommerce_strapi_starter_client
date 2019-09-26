import { query } from './'
import { getProductsQuery, getProductQuery } from '../queries/product.query'

export default {
  getProducts: () => query(getProductsQuery()),
  getProduct: id => query(getProductQuery(id))
}
