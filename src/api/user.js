import { login, register } from './'

export default {
  login: (email, password) => login(email, password),
  register: (name, email, password) => register(name, email, password)
}
