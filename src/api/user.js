import { login, register, send } from './'

export default {
  login: (email, password) => login(email, password),
  register: (name, email, password) => register(name, email, password),
  confirmEmail: data => send(data)
}
