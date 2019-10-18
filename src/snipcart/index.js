import { apiUrl } from '../api'

export const snipcartShowModal = () => Snipcart.api.modal.show()
export const snipcartCloseModal = () => Snipcart.api.modal.close()
export const snipcartGet = () => Snipcart.api.cart.get()
export const snipcartStartNew = () => Snipcart.api.cart.start()
export const snipcartMetadata = metadata => Snipcart.api.cart.metadata(metadata)
export const snipcartBillingAddress = data => Snipcart.api.cart.billingAddress(data)
export const snipcartShippingAddress = data => Snipcart.api.cart.shippingAddress(data)
export const snipcartCountItems = () => Snipcart.api.items.count()
export const snipcartAllItems = () => Snipcart.api.items.all()
export const snipcartAddItem = data => Snipcart.api.items.add(data.map((item, index) => ({
  "id": item.product._id,
  "name": item.product.name,
  "quantity": item.quantity,
  "url": `/products/${item.product._id}`,
  "price": item.product.price,
  "unitPrice": item.product.price,
  "totalPrice": item.product.price * item.quantity,
  "minQuantity": 0,
  "maxQuantity": 21,
})))
export const snipcartUpdateItem = (id, data) => Snipcart.api.items.update(id, data)
export const snipcartRemoveItem = id => Snipcart.api.items.remove(id)
export const snipcartClearItems = () => Snipcart.api.items.clear()
export const snipcartCurrentUser = () => Snipcart.api.user.current()
export const snipcartLogoutUser = () => Snipcart.api.user.logout()
