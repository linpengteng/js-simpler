import { itType } from './*Customize'
import { isObject } from './-Object'
import { isArray } from './-Array'
import { isMap } from './-Map'


export function isNonEmptySet(set: unknown): set is Set<unknown> {
  return isSet(set) && set.size > 0
}

export function isEmptySet(set: unknown): set is Set<unknown> {
  return isSet(set) && set.size === 0
}

export function isSet(set: unknown): set is Set<unknown> {
  return itType(set) === 'Set'
}

export function toSet(set: unknown): Set<unknown> {
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


export default {
  isNonEmptySet,
  isEmptySet,
  isSet,
  toSet
}
