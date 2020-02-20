export const getOrdersQuery = () => `
  query {
    orders {
      _id,
      numOrder,
      amount,
      items,
      paymentStatus,
      shippingStatus,
      profile {
        _id,
        username,
        user {
          _id,
          email
        }
      }
    }
  }
`

export const getOrderQuery = id => `
  query {
    order(id: '${id}') {
      _id,
      numOrder,
      amount,
      items,
      paymentStatus,
      shippingStatus,
      profile {
        _id,
        username,
        user {
          _id,
          email
        }
      }
    }
  }
`
