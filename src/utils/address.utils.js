export const objToText = obj => Object.entries(obj)
    .map(([key, value]) => value)
    .reduce((acc, cur) => `${acc}${cur || ''} `, '')