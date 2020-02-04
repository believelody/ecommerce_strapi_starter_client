import { login, register, send, sendForgottenPasswordLink, resetPassword, privateQuery } from './'
import { deleteUserMutation, changEmailMutation } from '../mutations/user.mutation'

export default {
  login: (email, password) => login(email, password),
  register: (name, email, password) => register(name, email, password),
  confirmEmail: data => send(data),
  changeEmail: (id, email) => privateQuery({ query: changEmailMutation(id, email)}),
  sendForgottenPasswordLink: email => sendForgottenPasswordLink(email),
  resetPassword: (code, newPwd, confirmPwd) => resetPassword(code, newPwd, confirmPwd),
  deleteUser: id => privateQuery({ query: deleteUserMutation(id)})
}
