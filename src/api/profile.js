import { create, privateQuery, upload, update, deleteData } from './'
import { getEmailConfirmQuery, checkCodeQuery, getProfileByUserQuery } from '../queries/profile.query'

export default {
  createProfile: (gender, user, username, code) => create('profiles', { gender, username, user, code, emailConfirm: false, isSubscribed: false }),
  getProfileByUser: id => privateQuery({ query: getProfileByUserQuery(id) }),
  getEmailConfirmStatusByUser: id => privateQuery({ query: getEmailConfirmQuery(id) }),
  verifyCode: code => privateQuery({ query: checkCodeQuery(code) }),
  changeImage: formElement => upload(formElement),
  changeShippingAddress: (id, select) => update('profiles', id, { selectedShippingAddress:select }),
  changeBillingAddress: (id, select) => update('profiles', id, { selectedBillingAddress: select }),
  updateInfo: (id, data) => update('profiles', id, data),
  confirmEmail: id => update('profiles', id, {confirmEmail: true, code: ''}),
  subscribeNewsletter: (id, checked) => update('profiles', id, {isSubscribed: checked}),
  deleteProfile: id => deleteData('profiles', id)
}
