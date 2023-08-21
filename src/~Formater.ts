export const lowerCase = (string: string): string => {
  return string.replace(/\w/g, t1 => t1 && t1.toLowerCase())
}

export const upperCase = (string: string): string => {
  return string.replace(/\w/g, t1 => t1 && t1.toUpperCase())
}

export const camelCase = (string: string, first = false): string => {
  return first === true
    ? string.replace(/(^|-)(\w)/g, (_t1, _t2, t3) => t3 && t3.toUpperCase())
    : string.replace(/-(\w)/g, (_t1, t2) => t2 && t2.toUpperCase())
}

export const hyphenate = (string: string, first = false): string => {
  return first === true
    ? string.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-+/, '')
    : string.replace(/([A-Z])/g, '-$1').toLowerCase()
}

export const underline = (string: string, first = false): string => {
  return first === true
    ? string.replace(/([A-Z])/g, '_$1').toLowerCase().replace(/^_+/, '')
    : string.replace(/([A-Z])/g, '_$1').toLowerCase()
}


export default {
  lowerCase,
  upperCase,
  camelCase,
  hyphenate,
  underline
}
