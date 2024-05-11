import { isObject } from './-Object'
import { isArray } from './-Array'
import { isMap } from './-Map'

export const isNonEmptySet = (set: unknown): set is Set<unknown> => {
  return isSet(set) && set.size > 0
}

export const isEmptySet = (set: unknown): set is Set<unknown> => {
  return isSet(set) && set.size === 0
}

export const isSet = (set: unknown): set is Set<unknown> => {
  return Object.prototype.toString.call(set) === '[object Set]'
}

export const toSet = (set?: unknown): Set<unknown> => {
  if (isSet(set)) {
    return set
  }

  if (isObject(set)) {
    return new Set(Object.entries(set))
  }

  if (isArray(set)) {
    return new Set(set)
  }

  if (isMap(set)) {
    return new Set(set.entries())
  }

  return new Set()
}

export const newSet = (set?: unknown): Set<unknown> => {
  if (isObject(set)) {
    return new Set(Object.entries(set))
  }

  if (isArray(set)) {
    return new Set(set)
  }

  if (isMap(set)) {
    return new Set(set.entries())
  }

  if (isSet(set)) {
    return new Set(set.values())
  }

  return new Set()
}

export default {
  isNonEmptySet,
  isEmptySet,
  isSet,
  toSet,
  newSet,
}
