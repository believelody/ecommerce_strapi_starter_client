export const getProductsQuery = () => `
  query {
    products {
      _id
      name,
      price
      thumbnails {
        name,
        url
      }
    }
  }
`

export const getProductQuery = id => `
  query {
    product(id: '${id}') {
      _id,
      name,
      description,
      price
      thumbnails {
        name,
        url
      },
      variants {
        _id,
        name,
        label,
        dimension,
        image {
          name,
          url
        },
        sku {
          _id,
          unit
        }
      }
      tags {
        _id,
        name
      }
    }
  }
`
