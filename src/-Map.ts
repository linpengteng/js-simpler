import { isObject } from './-Object'
import { isSet } from './-Set'

export const isNonEmptyMap = (map: unknown): map is Map<unknown, unknown> => {
  return isMap(map) && map.size > 0
}

export const isEmptyMap = (map: unknown): map is Map<unknown, unknown> => {
  return isMap(map) && map.size === 0
}

export const isMap = (map: unknown): map is Map<unknown, unknown> => {
  return Object.prototype.toString.call(map) === '[object Map]'
}

export const toMap = (map?: unknown): Map<unknown, unknown> => {
  if (isObject(map)) {
    return new Map(Object.entries(map))
  }

  if (isMap(map)) {
    return map
  }

  if (isSet(map)) {
    return new Map(Array.from(map.values()).entries())
  }

  try {
    // @ts-ignore
    return new Map(map)
  } catch /* istanbul ignore next */ {
    return new Map()
  }
}

export const newMap = (map?: unknown): Map<unknown, unknown> => {
  if (isObject(map)) {
    return new Map(Object.entries(map))
  }

  if (isMap(map)) {
    return new Map(map.entries())
  }

  if (isSet(map)) {
    return new Map(Array.from(map.values()).entries())
  }

  try {
    // @ts-ignore
    return new Map(map)
  } catch /* istanbul ignore next */ {
    return new Map()
  }
}

export default {
  isNonEmptyMap,
  isEmptyMap,
  isMap,
  toMap,
  newMap,
}
