export const getProductsQuery = () => `
  query {
    products {
      _id
      name,
      description,
      price,
      newProduct,
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
`

export const getProductQuery = id => `
  query {
    product(id: "${id}") {
      _id,
      name,
      description,
      price,
      newProduct,
      skus {
        _id,
        unit,
        color {
          _id
        },
        size {
          _id
        }
      },
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

export const getProductSkuQuery = (productId, colorId, sizeId) => `
  query {
    skus(where: {product: "${productId}", color: "${colorId}", size: "${sizeId}"}) {
      _id,
      unit
    }
  }
`
export const getProductNbOrderQuery = id => `
  query {
    product(id: "${id}") {
      _id,
      nbOrder
    }
  }
`