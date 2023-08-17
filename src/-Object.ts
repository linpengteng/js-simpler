import { type } from './*Customize'
import { isArray } from './-Array'
import { isMap } from './-Map'
import { isSet } from './-Set'


export const isNonEmptyObject = (obj: unknown): obj is Record<string, unknown> => {
  return isObject(obj) && Object.keys(obj).length > 0
}

export const isEmptyObject = (obj: unknown): obj is Record<string, unknown> => {
  return isObject(obj) && Object.keys(obj).length === 0
}

export const isObject = (obj: unknown): obj is Record<string, unknown> => {
  return type(obj) === 'Object'
}

export const toObject = (obj: unknown): Record<string, unknown> => {
  if (isObject(obj)) {
    return obj
  }

  if (isArray(obj) || isMap(obj) || isSet(obj)) {
    return Object.fromEntries(obj.entries())
  }

  return {}
}

export const newObject = (obj: unknown): Record<string, unknown> => {
  if (isObject(obj)) {
    return { ...obj }
  }

  if (isArray(obj) || isMap(obj) || isSet(obj)) {
    return Object.fromEntries(obj.entries())
  }

  return {}
}


export default {
  isNonEmptyObject,
  isEmptyObject,
  isObject,
  toObject,
  newObject
}
