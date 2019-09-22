export const STRAPI_CART = ''
export const getCart = () => JSON.parse(localStorage.getItem(STRAPI_CART))
export const setCart = cart => localStorage.setItem(STRAPI_CART, JSON.stringify(cart))
export const deleteCart = () => localStorage.removeItem(STRAPI_CART)
