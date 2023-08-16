export const toCamelCase = (string: string, first = false): string => {
  return first === true
    ? string.replace(/(^|-)(\w)/g, (_t1, _t2, t3) => t3 && t3.toUpperCase())
    : string.replace(/-(\w)/g, (_t1, t2) => t2 && t2.toUpperCase())
}

export const toHyphenate = (string: string, first = false): string => {
  return first === true
    ? string.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-+/, '')
    : string.replace(/([A-Z])/g, '-$1').toLowerCase()
}

export const toUnderline = (string: string, first = false): string => {
  return first === true
    ? string.replace(/([A-Z])/g, '_$1').toLowerCase().replace(/^_+/, '')
    : string.replace(/([A-Z])/g, '_$1').toLowerCase()
}


export default {
  toCamelCase,
  toHyphenate,
  toUnderline
}
