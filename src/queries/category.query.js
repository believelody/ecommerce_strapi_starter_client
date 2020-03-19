export const getCategoriesQuery = () => `
  query {
    categories {
      _id,
      name,
    }
  }
`

export const getCategoryQuery = name => `
  query {
    categories(where: {name: "${name}"}) {
      _id,
      name,
      description,
      products {
        _id,
        name,
        description,
        price,
        newProduct,
        nbOrder,
        thumbnails {
          name,
          url
        },
        colors {
          _id,
          name
        },
        sizes {
          _id,
          name
        },
        skus {
          _id,
          unit,
          color { _id },
          size { _id }
        },
      }
    }
  }
`
