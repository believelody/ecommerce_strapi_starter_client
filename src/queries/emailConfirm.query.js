export const getEmailConfirmStatusQuery = id => `
  query {
    user(id: '${id}') {
      emailConfirm
    }
  }
`
