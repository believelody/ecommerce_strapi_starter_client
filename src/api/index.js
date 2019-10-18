import Strapi from 'strapi-sdk-javascript'
import variant from './variant'
import product from './product'
import profile from './profile'
import shipping from './shipping'
import user from './user'
import order from './order'
import category from './category'
import tag from './tag'

export const apiUrl = process.env.SERVER_URL ? process.env.SERVER_URL : 'http://localhost:1337'
export const strapi = new Strapi(apiUrl)

export const query = obj => strapi.request('POST', '/graphql', { data: obj })
export const register = (name, email, password) => strapi.register(name, email, password)
export const login = (email, password) => strapi.login(email, password)
export const create = (path, data) => strapi.createEntry(path, data)
export const send = obj => strapi.request('POST', '/email', {data: obj})

export default {order, product, profile, shipping, user, variant, category}
