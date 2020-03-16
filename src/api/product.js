import { query, privateQuery, update } from './'
import { getProductsQuery, getProductQuery, getProductSkuQuery } from '../queries/product.query'

export default {
  getProducts: () => query({query: getProductsQuery()}),
  getProduct: id => query({query: getProductQuery(id)}),
  getProductSku: (productId, colorId, sizeId) => privateQuery({ query: getProductSkuQuery(productId, colorId, sizeId)}),
  updateSku: (id, unit) => update('skus', id, {unit})
}
