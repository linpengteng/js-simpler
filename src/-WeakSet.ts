import { type } from './*Customize'
import { isFunction } from './-Function'
import { isPromise } from './-Promise'
import { isRegExp } from './-RegExp'
import { isObject } from './-Object'
import { isArray } from './-Array'
import { isDate } from './-Date'
import { isMap } from './-Map'
import { isSet } from './-Set'


export const isWeakSet = (set: unknown): set is WeakSet<object> => {
  return type(set) === 'WeakSet'
}

export const toWeakSet = (set: unknown): WeakSet<object> => {
  if (isWeakSet(set)) {
    return set
  }

  if (isObject(set)) {
    return new WeakSet(Object.entries(set))
  }

  if (isArray(set)) {
    return new WeakSet((set as Array<object>).filter(
      item => (
        isFunction(item) ||
        isPromise(item) ||
        isRegExp(item) ||
        isObject(item) ||
        isArray(item) ||
        isDate(item) ||
        isMap(item) ||
        isSet(item)
      )
    ))
  }

  if (isMap(set)) {
    return new WeakSet(set.entries())
  }

  if (isSet(set)) {
    return new WeakSet(Array.from((set as Set<object>).values()).filter(
      item => (
        isFunction(item) ||
        isPromise(item) ||
        isRegExp(item) ||
        isObject(item) ||
        isArray(item) ||
        isDate(item) ||
        isMap(item) ||
        isSet(item)
      )
    ))
  }

  return new WeakSet()
}

export const newWeakSet = (set: unknown): WeakSet<object> => {
  if (isObject(set)) {
    return new WeakSet(Object.entries(set))
  }

  if (isArray(set)) {
    return new WeakSet((set as Array<object>).filter(
      item => (
        isFunction(item) ||
        isPromise(item) ||
        isRegExp(item) ||
        isObject(item) ||
        isArray(item) ||
        isDate(item) ||
        isMap(item) ||
        isSet(item)
      )
    ))
  }

  if (isMap(set)) {
    return new WeakSet(set.entries())
  }

  if (isSet(set)) {
    return new WeakSet(Array.from((set as Set<object>).values()).filter(
      item => (
        isFunction(item) ||
        isPromise(item) ||
        isRegExp(item) ||
        isObject(item) ||
        isArray(item) ||
        isDate(item) ||
        isMap(item) ||
        isSet(item)
      )
    ))
  }

  return new WeakSet()
}


export default {
  isWeakSet,
  toWeakSet,
  newWeakSet
}
