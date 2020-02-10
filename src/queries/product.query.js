export const getProductsQuery = () => `
  query {
    products {
      _id
      name,
      price
      thumbnails {
        name,
        url
      },
      colors {
        _id,
        name,
        skus {
          _id,
          unit
        }
      },
      sizes {
        _id,
        name,
        skus {
          _id,
          unit
        }
      }
    }
  }
`

export const getProductQuery = id => `
  query {
    product(id: "${id}") {
      _id,
      name,
      description,
      price
      thumbnails {
        name,
        url
      },
      colors {
        _id,
        name,
        skus {
          _id,
          unit
        }
      },
      sizes {
        _id,
        name,
        skus {
          _id,
          unit
        }
      }
      tags {
        _id,
        name
      },
      reviews {
        author,
        text,
        date,
        rating,
        order,
        thumbnails {
          name,
          url
        }
      }
    }
  }
`
