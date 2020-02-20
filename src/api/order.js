import {create, get} from './'

export default {
  createOrder: data => create('orders', data),
  getOrders: () => get('orders'),
  sendOrderEmail: data => send(data)
}
