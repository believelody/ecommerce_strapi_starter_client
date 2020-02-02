import { create, privateQuery, upload } from './'
import { getEmailConfirmQuery, checkCodeQuery, getProfileByUserQuery } from '../queries/profile.query'
import { updateInfoMutation, confirmVerificationMutation, subscribeNewsletterMutation } from '../mutations/profile.mutation'

export default {
  createProfile: (gender, user, username, code) => create('profiles', { gender, username, user, code, emailConfirm: false, isSubscribed: false }),
  getProfileByUser: id => privateQuery({ query: getProfileByUserQuery(id) }),
  getEmailConfirmStatusByUser: id => privateQuery({ query: getEmailConfirmQuery(id) }),
  verifyCode: code => privateQuery({ query: checkCodeQuery(code) }),
  changeImage: formElement => upload(formElement),
  updateInfo: (_id, data) => privateQuery({ query: updateInfoMutation(_id, data)}),
  confirmEmail: _id => privateQuery({ query: confirmVerificationMutation(_id) }),
  subscribeNewsletter: _id => privateQuery({ query: subscribeNewsletterMutation(_id)})
}
