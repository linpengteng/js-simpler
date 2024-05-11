import { isFunction } from './-Function'
import { isPromise } from './-Promise'
import { isRegExp } from './-RegExp'
import { isObject } from './-Object'
import { isArray } from './-Array'
import { isDate } from './-Date'
import { isMap } from './-Map'
import { isSet } from './-Set'

export const isWeakMap = (map: unknown): map is WeakMap<object, unknown> => {
  return Object.prototype.toString.call(map) === '[object WeakMap]'
}

export const toWeakMap = (map?: unknown): WeakMap<object, unknown> => {
  if (isWeakMap(map)) {
    return map
  }

  if (isArray(map)) {
    return new WeakMap(
      (map as Array<[object, unknown]>).filter(arr => isArray(arr) && arr.length === 2).filter(arr => (
        isFunction(arr[0]) ||
        isPromise(arr[0]) ||
        isRegExp(arr[0]) ||
        isObject(arr[0]) ||
        isArray(arr[0]) ||
        isDate(arr[0]) ||
        isMap(arr[0]) ||
        isSet(arr[0])
      )),
    )
  }

  if (isMap(map)) {
    return new WeakMap(
      Array.from((map as Map<object, unknown>).entries()).filter(arr => (
        isFunction(arr[0]) ||
        isPromise(arr[0]) ||
        isRegExp(arr[0]) ||
        isObject(arr[0]) ||
        isArray(arr[0]) ||
        isDate(arr[0]) ||
        isMap(arr[0]) ||
        isSet(arr[0])
      )),
    )
  }

  return new WeakMap()
}

export const newWeakMap = (map?: unknown): WeakMap<any, unknown> => {
  if (isArray(map)) {
    return new WeakMap(
      (map as Array<[object, unknown]>).filter(arr => isArray(arr) && arr.length === 2).filter(arr => (
        isFunction(arr[0]) ||
        isPromise(arr[0]) ||
        isRegExp(arr[0]) ||
        isObject(arr[0]) ||
        isArray(arr[0]) ||
        isDate(arr[0]) ||
        isMap(arr[0]) ||
        isSet(arr[0])
      )),
    )
  }

  if (isMap(map)) {
    return new WeakMap(
      Array.from((map as Map<object, unknown>).entries()).filter(arr => (
        isFunction(arr[0]) ||
        isPromise(arr[0]) ||
        isRegExp(arr[0]) ||
        isObject(arr[0]) ||
        isArray(arr[0]) ||
        isDate(arr[0]) ||
        isMap(arr[0]) ||
        isSet(arr[0])
      )),
    )
  }

  return new WeakMap()
}

export default {
  isWeakMap,
  toWeakMap,
  newWeakMap,
}
