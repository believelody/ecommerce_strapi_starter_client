import { login, register, send, changePassword } from './'

export default {
  login: (email, password) => login(email, password),
  register: (name, email, password) => register(name, email, password),
  confirmEmail: data => send(data),
  changePassword: email => changePassword(email)
}
