import { create, query, get, post } from './'
import { getProfileQuery, getEmailConfirmQuery, checkCodeQuery } from '../queries/profile.query'

export default {
  createProfile: (user, username, code, emailConfirm) => create('profiles', { username, user, code, emailConfirm }),
  getProfileByUser: id => query({ query: getProfileQuery(id) }),
  getEmailConfirmStatusByUser: id => query({ query: getEmailConfirmQuery(id) }),
  verifyCode: code => query({ query: checkCodeQuery(code) })
}
