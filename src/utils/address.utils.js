export const objToText = obj => Object.entries(obj)
    .filter(([key, value]) => key !== '_id')
    .map(([key, value]) => value)
    .reduce((acc, cur) => `${acc}${cur || ''} `, '')