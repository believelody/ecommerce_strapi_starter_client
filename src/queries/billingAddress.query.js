export const getAddressesQuery = () => `
  query {
    billingaddresses {
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
    billingaddress(id: '${id}') {
      _id,
      address,
      address2,
      zip,
      city
    }
  }
`
