export const getOrdersQuery = () => `
  query {
    orders {
      num_order,
      amount,
      items,
      profile {
        username
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
      num_order,
      amount,
      items,
      profile {
        username
        user {
          _id,
          email
        }
      }
    }
  }
`
