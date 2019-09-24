export const getAddressesQuery = () => `
  query {
    shippingaddresses {
      _id,
      address,
      address2,
      zip,
      city
    }
  }
`

export const getAddressQuery = id => `
  query {
    shippingaddress(id: '${id}') {
      _id,
      address,
      address2,
      zip,
      city
    }
  }
`
