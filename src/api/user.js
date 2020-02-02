import { login, register, send, changePassword, resetPassword } from './'

export default {
  login: (email, password) => login(email, password),
  register: (name, email, password) => register(name, email, password),
  confirmEmail: data => send(data),
  changePassword: email => changePassword(email),
  resetPassword: (code, newPwd, confirmPwd) => resetPassword(code, newPwd, confirmPwd),
}
