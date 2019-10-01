export const STRAPI_USER = 'strapi_user'
export const getUser = () => JSON.parse(localStorage.getItem(STRAPI_USER))
export const setUser = user => localStorage.setItem(STRAPI_USER, JSON.stringify(user))
export const deleteUser = () => localStorage.removeItem(STRAPI_USER)
