import { query } from './'
import { getCategoriesQuery, getCategoryQuery } from '../queries/category.query'

export default {
  getCategories: () => query(getCategoriesQuery()),
  getCategory: id => query(getCategoryQuery(id))
}
