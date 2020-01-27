import { create, query, privateQuery, put, upload } from './'
import { getProfileQuery, getEmailConfirmQuery, checkCodeQuery, getProfileByUserQuery } from '../queries/profile.query'
import { changeProfileImage, updateNamesMutation } from '../mutations/profile.mutation'

export default {
  createProfile: (user, username, code) => create('profiles', { username, user, code, emailConfirm: false }),
  getProfileByUser: id => privateQuery({ query: getProfileByUserQuery(id) }),
  getEmailConfirmStatusByUser: id => privateQuery({ query: getEmailConfirmQuery(id) }),
  verifyCode: code => privateQuery({ query: checkCodeQuery(code) }),
  changeImage: (_id, image) => upload(image, 'profile/image', _id, 'profile', 'users-permissions', 'image'),
  updateNames: (_id, data) => privateQuery({ query: updateNamesMutation(_id, data)})
}
