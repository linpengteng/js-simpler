import { itType } from './*Customize'
import { isObject } from './-Object'
import { isArray } from './-Array'
import { isSet } from './-Set'


export function isNonEmptyMap(map: unknown): map is Map<unknown, unknown> {
  return isMap(map) && map.size > 0
}

export function isEmptyMap(map: unknown): map is Map<unknown, unknown> {
  return isMap(map) && map.size === 0
}

export function isMap(map: unknown): map is Map<unknown, unknown> {
  return itType(map) === 'Map'
}

export function toMap(map: unknown): Map<unknown, unknown> {
  if (isMap(map)) {
    return map
  }

  if (isArray(map) && map.every(item => isArray(item) && item.length === 2)) {
    return new Map(map)
  }

  if (isArray(map) && !map.every(item => isArray(item) && item.length === 2)) {
    return new Map(map.entries())
  }

  if (isObject(map)) {
    return new Map(Object.entries(map))
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
  toMap
}
