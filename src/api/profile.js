import { create, privateQuery, upload } from './'
import { getEmailConfirmQuery, checkCodeQuery, getProfileByUserQuery } from '../queries/profile.query'
import { updateInfoMutation, confirmVerificationMutation, subscribeNewsletterMutation, changeShippingAddressMutation, deleteProfileMutation, changeBillingAddressMutation } from '../mutations/profile.mutation'

export default {
  createProfile: (gender, user, username, code) => create('profiles', { gender, username, user, code, emailConfirm: false, isSubscribed: false }),
  getProfileByUser: id => privateQuery({ query: getProfileByUserQuery(id) }),
  getEmailConfirmStatusByUser: id => privateQuery({ query: getEmailConfirmQuery(id) }),
  verifyCode: code => privateQuery({ query: checkCodeQuery(code) }),
  changeImage: formElement => upload(formElement),
  changeShippingAddress: (id, select) => privateQuery({ query: changeShippingAddressMutation(id, select) }),
  changeBillingAddress: (id, select) => privateQuery({ query: changeBillingAddressMutation(id, select) }),
  updateInfo: (_id, data) => privateQuery({ query: updateInfoMutation(_id, data)}),
  confirmEmail: (_id, confirm, code) => privateQuery({ query: confirmVerificationMutation(_id, confirm, code) }),
  subscribeNewsletter: (_id, checked) => privateQuery({ query: subscribeNewsletterMutation(_id, checked)}),
  deleteProfile: _id => privateQuery({ query: deleteProfileMutation(_id)})
}
