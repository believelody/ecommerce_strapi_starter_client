export const getCategoriesQuery = () => `
  query {
    categories {
      name,
      image {
        name,
        url
      }
    }
  }
`

export const getCategoryQuery = id => `
  query {
    category(id: '${id}') {
      name,
      description,
      image {
        name,
        url
      },
      products {
        name,
        price,
        thumbnails {
          name,
          url
        }
      }
    }
  }
`
