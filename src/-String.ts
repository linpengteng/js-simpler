import { type } from './*Customize'


export const isNonEmptyString = (str: unknown): str is string => {
  return isString(str) && !!str.trim()
}

export const isEmptyString = (str: unknown): str is string => {
  return isString(str) && !str.trim()
}

export const isString = (str: unknown): str is string => {
  return type(str) === 'String'
}


export default {
  isNonEmptyString,
  isEmptyString,
  isString
}
