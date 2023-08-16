import { isBoolean } from './-Boolean'
import { isNumber } from './-Number'
import { isString } from './-String'
import { isObject } from './-Object'
import { isArray } from './-Array'
import { isDate } from './-Date'
import { isSet } from './-Set'
import { isMap } from './-Map'


export const itType = (val: any) => {
  return Object.prototype.toString.call(val).replace(/^\[[^\s\]]+\s*([^\]]+)]$/, '$1')
}

export const itSize = (val: any) => {
  if (isDate(val)) {
    return +val || 0
  }

  if (isString(val)) {
    return [...val].length
  }

  if (isNumber(val)) {
    return val || 0
  }

  if (isArray(val)) {
    return val.length
  }

  if (isObject(val)) {
    return Object.keys(val).length
  }

  if (isBoolean(val)) {
    return val === true ? 1 : 0
  }

  if (isMap(val) || isSet(val)) {
    return val.size
  }

  return 0
}

export const isEqual = (val1: unknown, val2: unknown, deep = false): boolean => {
  if (val1 === val2) {
    return true
  }

  if (Object.is(val1, val2)) {
    return true
  }

  if (itType(val1) !== itType(val2)) {
    return false
  }

  if (isObject(val1) && isObject(val2)) {
    if (Object.keys(val1).length !== Object.keys(val2).length) {
      return false
    }

    for (const key of Object.keys(val1)) {
      const first = val1[key]
      const second = val2[key]

      const reuslt = deep === true
        ? isEqual(first, second, deep)
        : first === second

      if (!reuslt) {
        return false
      }
    }

    return true
  }

  if (isArray(val1) && isArray(val2)) {
    if (val1.length !== val2.length) {
      return false
    }

    for (const key of val1.keys()) {
      const first = val1[key]
      const second = val2[key]

      const reuslt = deep === true
        ? isEqual(first, second, deep)
        : first === second

      if (!reuslt) {
        return false
      }
    }

    return true
  }

  if (isMap(val1) && isMap(val2)) {
    return val1.size === val2.size && isEqual([...val1.entries()], [...val2.entries()], deep)
  }

  if (isSet(val1) && isSet(val2)) {
    return val1.size === val2.size && isEqual([...val1.values()], [...val2.values()], deep)
  }

  return false
}

export const deepAssign = <T = unknown>(val: T, ...rest: unknown[]): T => {
  let target: any
  let sources: any

  const keys = (own: any) => {
    return isObject(own) ? Object.keys(own) : isArray(own) ? own.keys() : []
  }

  const clone = (t: any, s: any) => {
    for (const key of keys(s)) {
      const target = t[key]
      const source = s[key]
      const iIsArray = isArray(target)
      const oIsArray = isArray(source)
      const iIsObject = isObject(target)
      const oIsObject = isObject(source)

      if (oIsObject) {
        clone(t[key] = iIsObject ? target : {}, source)
        continue
      }

      if (oIsArray) {
        clone(t[key] = iIsArray ? (target.length !== source.length && target.splice(0), target) : [], source)
        continue
      }

      t[key] = s[key]
    }
  }

  if (!isObject(val) && !isArray(val)) {
    return val
  }

  if (isObject(val)) {
    sources = [...rest]
    target = val
  }

  if (isArray(val)) {
    sources = [...rest]
    target = val
  }

  if (sources) {
    for (const source of sources) {
      const iIsArray = isArray(target)
      const oIsArray = isArray(source)
      const iIsObject = isObject(target)
      const oIsObject = isObject(source)
      iIsObject && oIsObject && clone(target, source)
      iIsArray && oIsArray && clone((target.length !== source.length && target.splice(0), target), source)
    }
  }

  return target as T
}

export const deepClone = <T = unknown>(val: T, ...rest: unknown[]): T => {
  let target: any
  let sources: any

  const keys = (own: any) => {
    return isObject(own) ? Object.keys(own) : isArray(own) ? own.keys() : []
  }

  const clone = (t: any, s: any) => {
    for (const key of keys(s)) {
      const target = t[key]
      const source = s[key]
      const iIsArray = isArray(target)
      const oIsArray = isArray(source)
      const iIsObject = isObject(target)
      const oIsObject = isObject(source)

      if (oIsObject) {
        clone(t[key] = iIsObject ? target : {}, source)
        continue
      }

      if (oIsArray) {
        clone(t[key] = iIsArray ? (target.length !== source.length && target.splice(0), target) : [], source)
        continue
      }

      t[key] = s[key]
    }
  }

  if (!isObject(val) && !isArray(val)) {
    return val
  }

  if (isObject(val)) {
    sources = [val, ...rest]
    target = {}
  }

  if (isArray(val)) {
    sources = [val, ...rest]
    target = []
  }

  if (sources) {
    for (const source of sources) {
      const iIsArray = isArray(target)
      const oIsArray = isArray(source)
      const iIsObject = isObject(target)
      const oIsObject = isObject(source)
      iIsObject && oIsObject && clone(target, source)
      iIsArray && oIsArray && clone((target.length !== source.length && target.splice(0), target), source)
    }
  }

  return target as T
}


export default {
  itType,
  itSize,
  isEqual,
  deepAssign,
  deepClone
}
