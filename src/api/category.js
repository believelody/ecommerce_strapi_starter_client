import { query } from './'
import { getCategoriesQuery, getCategoryQuery } from '../queries/category.query'

export default {
  getCategories: () => query({query: getCategoriesQuery()}),
  getCategory: name => query({query: getCategoryQuery(name)})
}
