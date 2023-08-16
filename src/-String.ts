import { itType } from './*Customize'


export const isNonEmptyString = (str: unknown): str is string => {
  return isString(str) && !!str.trim()
}

export const isEmptyString = (str: unknown): str is string => {
  return isString(str) && !str.trim()
}

export const isString = (str: unknown): str is string => {
  return itType(str) === 'String'
}

export const toString = (str: unknown): string => {
  return String(str)
}


export default {
  isNonEmptyString,
  isEmptyString,
  isString,
  toString
}
