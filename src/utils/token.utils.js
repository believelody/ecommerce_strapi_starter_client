export const STRAPI_TOKEN = ''
export const getToken = () => localStorage.getItem(STRAPI_TOKEN)
export const setToken = token => localStorage.setItem(STRAPI_TOKEN, token)
export const deleteToken = () => localStorage.removeItem(STRAPI_TOKEN)
