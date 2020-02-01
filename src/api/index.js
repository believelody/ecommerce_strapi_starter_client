import axios from 'axios'
import Strapi from 'strapi-sdk-javascript'
import variant from './variant'
import product from './product'
import profile from './profile'
import shipping from './shipping'
import user from './user'
import order from './order'
import category from './category'
import tag from './tag'
import { getToken } from '../utils/token.utils'

export const apiUrl = process.env.NODE_ENV === 'production' ? process.env.SERVER_URL : 'http://localhost:1337'
export const snipcartUrl = 'https://app.snipcart.com/api'
export const strapi = new Strapi(apiUrl)

export const query = obj => strapi.request('POST', '/graphql', { data: obj })

export const privateQuery = obj => strapi.request('POST', '/graphql', { data: obj }, {"Authorization": `Bearer ${getToken()}`})

export const register = (name, email, password) => strapi.register(name, email, password)

export const login = (email, password) => strapi.login(email, password)

export const create = (path, data) => strapi.createEntry(path, data)

export const send = obj => strapi.request('POST', '/email', {data: obj})

export const upload = async (formElement) => await strapi.upload(new FormData(formElement))

export const get = (path, query) => axios.get(`${apiUrl}/${path}?user=${query}`, {
  "Authorization": `Bearer ${getToken()}`
})

export const post = (path, data, query) => axios.post(`${apiUrl}/${path}${query}`, data, {
  "Authorization": `Bearer ${getToken()}`
})

export const put = (path, data, id) => axios.put(`${apiUrl}/${path}/${id}`, data, {
  "Authorization": `Bearer ${getToken()}`
})

export default {order, product, profile, shipping, user, variant, category}
