export const getProfileQuery = id => `
  query {
    user(id: '${id}') {
      _id,
      profile {
        _id,
        username,
        fistname,
        lastname,
        birthday,
        image {
          name,
          url
        },
        orders {
          num_order,
          amount,
          items
        }
        shippingaddresses {
          _id,
          address,
          address2,
          zip,
          city
        }
        billingaddresses {
          _id,
          address,
          address2,
          zip,
          city
        }
      }
    }
  }
`
