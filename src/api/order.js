import {create} from './'

export default {
  createOrder: data => create('orders', data),
  sendOrderEmail: data => send(data)
}
