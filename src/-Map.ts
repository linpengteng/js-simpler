import { type } from './*Customize'
import { isObject } from './-Object'
import { isArray } from './-Array'
import { isSet } from './-Set'


export const isNonEmptyMap = (map: unknown): map is Map<unknown, unknown> => {
  return isMap(map) && map.size > 0
}

export const isEmptyMap = (map: unknown): map is Map<unknown, unknown> => {
  return isMap(map) && map.size === 0
}

export const isMap = (map: unknown): map is Map<unknown, unknown> => {
  return type(map) === 'Map'
}

export const toMap = (map: unknown): Map<unknown, unknown> => {
  if (isMap(map)) {
    return map
  }

  if (isObject(map)) {
    return new Map(Object.entries(map))
  }

  if (isArray(map)) {
    return new Map(map.filter(arr => isArray(arr) && arr.length === 2))
  }

  if (isSet(map)) {
    return new Map(map.entries())
  }

  return new Map()
}

export const newMap = (map: unknown): Map<unknown, unknown> => {
  if (isObject(map)) {
    return new Map(Object.entries(map))
  }

  if (isArray(map)) {
    return new Map(map.filter(arr => isArray(arr) && arr.length === 2))
  }

  if (isMap(map)) {
    return new Map(map.entries())
  }

  if (isSet(map)) {
    return new Map(map.entries())
  }

  return new Map()
}

export default {
  isNonEmptyMap,
  isEmptyMap,
  isMap,
  toMap,
  newMap
}
