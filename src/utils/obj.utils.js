export const STRAPI_OBJ = ''
export const getObj = () => JSON.parse(localStorage.getItem(STRAPI_OBJ))
export const setObj = obj => localStorage.setItem(STRAPI_OBJ, JSON.stringify(obj))
export const deleteObj = () => localStorage.removeItem(STRAPI_OBJ)
