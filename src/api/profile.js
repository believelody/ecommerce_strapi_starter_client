import { create, privateQuery, upload } from './'
import { getEmailConfirmQuery, checkCodeQuery, getProfileByUserQuery } from '../queries/profile.query'
import { updateInfoMutation } from '../mutations/profile.mutation'

export default {
  createProfile: (user, username, code) => create('profiles', { username, user, code, emailConfirm: false }),
  getProfileByUser: id => privateQuery({ query: getProfileByUserQuery(id) }),
  getEmailConfirmStatusByUser: id => privateQuery({ query: getEmailConfirmQuery(id) }),
  verifyCode: code => privateQuery({ query: checkCodeQuery(code) }),
  changeImage: formElement => upload(formElement),
  updateInfo: (_id, data) => privateQuery({ query: updateInfoMutation(_id, data)})
}
