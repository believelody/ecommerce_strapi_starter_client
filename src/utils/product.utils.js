export const arrayColor = colors => colors.map((color, index) => ({label: color.name, value: index}))

export const arraySize = sizes => sizes.map((size, index) => ({label: size.name, value: index}))

export const fetchBestSellers = products => products.sort((a, b) => b.nbOrder - a.nbOrder).slice(0, 2)