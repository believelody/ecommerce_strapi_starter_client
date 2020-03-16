import { query, privateQuery, update } from './'
import { getProductsQuery, getProductQuery, getProductSkuQuery, getProductNbOrderQuery } from '../queries/product.query'

export default {
  getProducts: () => query({query: getProductsQuery()}),
  getProduct: id => query({query: getProductQuery(id)}),
  getProductSku: (productId, colorId, sizeId) => privateQuery({ query: getProductSkuQuery(productId, colorId, sizeId)}),
  getProductNbOrder: productId => privateQuery({ query: getProductNbOrderQuery(productId) }),
  updateSku: (id, unit) => update('skus', id, {unit}),
  updateNbOrder: (id, nbOrder) => update('products', id, {nbOrder}),
}
