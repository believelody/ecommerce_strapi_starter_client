export const getEmailConfirmQuery = id => `
  query {
    profiles(where: {user: "${id}"}) {
      _id,
      emailConfirm
    }
  }
`

export const checkCodeQuery = code => `
  query {
    profiles(where: {code: "${code}"}) {
      _id
    }
  }
`

export const getProfileByUserQuery = id => `
  query {
    profiles(where: {user: "${id}"}) {
      _id,
      gender,
      username,
      firstname,
      lastname,
      birthday,
      emailConfirm,
      isSubscribed,
      image {
        name,
        url
      },
      orders {
        num_order,
        amount,
        items
      },
      shippingaddresses {
        _id,
        address,
        address2,
        zip,
        city
      },
      billingaddresses {
        _id,
        address,
        address2,
        zip,
        city
      },
      selectedShippingAddress,
      selectedBillingAddress
    }
  }
`
