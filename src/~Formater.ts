import { isNonEmptyString } from './-String'


export const lowerCase = <T = any>(string: T): T => {
  return (isNonEmptyString(string) ? string.replace(/[A-Z]/g, t1 => t1 && t1.toLowerCase()) : string) as T
}

export const upperCase = <T = any>(string: T): T => {
  return (isNonEmptyString(string) ? string.replace(/[a-z]/g, t1 => t1 && t1.toUpperCase()) : string) as T
}

export const camelCase = <T = any>(string: T, first = false): T => {
  return (
    first === true
      ? isNonEmptyString(string) ? string.replace(/(^|[_-])([a-z])/g, (_t1, _t2, t3) => t3 && t3.toUpperCase()) : string
      : isNonEmptyString(string) ? string.replace(/[_-]([a-z])/g, (_t1, t2) => t2 && t2.toUpperCase()) : string
  ) as T
}

export const hyphenate = <T = any>(string: T, first = false): T => {
  return (
    first === true
      ? isNonEmptyString(string) ? string.replace(/([A-Z])/g, '-$1').replace(/([_-])([a-zA-Z])/g, '-$2').toLowerCase().replace(/^[_-]+/, '') : string
      : isNonEmptyString(string) ? string.replace(/([A-Z])/g, '-$1').replace(/([_-])([a-zA-Z])/g, '-$2').toLowerCase() : string
  ) as T
}

export const underline = <T = any>(string: T, first = false): T => {
  return (
    first === true
      ? isNonEmptyString(string) ? string.replace(/([A-Z])/g, '_$1').replace(/([_-])([a-zA-Z])/g, '_$2').toLowerCase().replace(/^[_-]+/, '') : string
      : isNonEmptyString(string) ? string.replace(/([A-Z])/g, '_$1').replace(/([_-])([a-zA-Z])/g, '_$2').toLowerCase() : string
  ) as T
}


export default {
  lowerCase,
  upperCase,
  camelCase,
  hyphenate,
  underline
}
