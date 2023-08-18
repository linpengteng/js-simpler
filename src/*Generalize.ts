import { isFiniteNumber } from './-Number'
import { isWeakMap } from './-WeakMap'
import { isBoolean } from './-Boolean'
import { isUndef } from './*Nullable'
import { isRegExp } from './-RegExp'
import { isString } from './-String'
import { isObject } from './-Object'
import { isArray } from './-Array'
import { isDate } from './-Date'
import { isSet } from './-Set'
import { isMap } from './-Map'


export type DeepType = boolean | number
export type FilterType = string | number | RegExp
export type FilterTypes = Array<string | number | RegExp>
export type CloneOptionsType = { omit?: FilterTypes; pick?: FilterTypes; copy?: FilterTypes; deep?: DeepType; cache?: WeakMap<object, unknown>; }
export type EqualOptionsType = { strict?: FilterTypes; include?:FilterTypes; exclude?: FilterTypes; deep?: DeepType; }


export const type = (val: any) => {
  return Object.prototype.toString.call(val).replace(/^\[[^\s\]]+\s*([^\]]+)]$/, '$1')
}

export const size = (val: any) => {
  if (isDate(val)) {
    return +val || 0
  }

  if (isString(val)) {
    return [...val.trim()].length
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

  if (isFiniteNumber(val)) {
    return val || 0
  }

  if (isMap(val) || isSet(val)) {
    return val.size
  }

  return 0
}

export const omit = <T = unknown>(val: T, arr: FilterTypes | FilterType, deep: DeepType = false): T => {
  return clone(val, { omit: isArray(arr) ? arr : [arr], deep })
}

export const pick = <T = unknown>(val: T, arr: FilterTypes | FilterType, deep: DeepType = false): T => {
  return clone(val, { pick: isArray(arr) ? arr : [arr], deep })
}

export const equal = (one: unknown, two: unknown, opts: EqualOptionsType | DeepType = false): boolean => {
  if (one === two) {
    return true
  }

  if (Object.is(one, two)) {
    return true
  }

  if (type(one) !== type(two)) {
    return false
  }

  if (isArray(one) && isArray(two)) {
    if (one.length !== two.length) {
      return false
    }

    const deep = isObject(opts) && !isUndef(opts.deep) ? opts.deep : opts
    const strict = isObject(opts) && isArray(opts.strict) ? opts.strict.filter(key => isRegExp(key) || isString(key) || isFiniteNumber(key)) : []
    const exclude = isObject(opts) && isArray(opts.exclude) ? opts.exclude.filter(key => isRegExp(key) || isString(key) || isFiniteNumber(key)) : []
    const include = isObject(opts) && isArray(opts.include) ? opts.include.filter(key => isRegExp(key) || isString(key) || isFiniteNumber(key)) : [/(?:)/]

    for (const key of one.keys()) {
      const val1 = one[key]
      const val2 = two[key]
      const level = deep === true ? Infinity : +deep >= 1 ? +deep : 1
      const stricted = strict.length > 0 && strict.some(k => isRegExp(k) ? k.test(String(key)) : String(k) === String(key))
      const excluded = exclude.length > 0 && exclude.some(k => isRegExp(k) ? k.test(String(key)) : String(k) === String(key))
      const included = include.length === 0 || include.some(k => isRegExp(k) ? k.test(String(key)) : String(k) === String(key))

      if (excluded || !included) {
        continue
      }

      if (val1 === val2) {
        continue
      }

      if (stricted) {
        return false
      }

      const reuslt = level >= 1
        ? equal(val1, val2, level - 1)
        : false

      if (!reuslt) {
        return false
      }
    }

    return true
  }

  if (isObject(one) && isObject(two)) {
    if (Object.keys(one).length !== Object.keys(two).length) {
      return false
    }

    const deep = isObject(opts) && !isUndef(opts.deep) ? opts.deep : opts
    const strict = isObject(opts) && isArray(opts.strict) ? opts.strict.filter(key => isRegExp(key) || isString(key) || isFiniteNumber(key)) : []
    const exclude = isObject(opts) && isArray(opts.exclude) ? opts.exclude.filter(key => isRegExp(key) || isString(key) || isFiniteNumber(key)) : []
    const include = isObject(opts) && isArray(opts.include) ? opts.include.filter(key => isRegExp(key) || isString(key) || isFiniteNumber(key)) : [/(?:)/]

    for (const key of Object.keys(one)) {
      const val1 = one[key]
      const val2 = two[key]
      const level = deep === true ? Infinity : +deep >= 1 ? +deep : 1
      const stricted = strict.length > 0 && strict.some(k => isRegExp(k) ? k.test(String(key)) : String(k) === String(key))
      const excluded = exclude.length > 0 && exclude.some(k => isRegExp(k) ? k.test(String(key)) : String(k) === String(key))
      const included = include.length === 0 || include.some(k => isRegExp(k) ? k.test(String(key)) : String(k) === String(key))

      if (excluded || !included) {
        continue
      }

      if (val1 === val2) {
        continue
      }

      if (stricted) {
        return false
      }

      const reuslt = level >= 1
        ? equal(val1, val2, level - 1)
        : false

      if (!reuslt) {
        return false
      }
    }

    return true
  }

  if (isRegExp(one) && isRegExp(two)) {
    return one.source === two.source && one.flags === two.flags && one.lastIndex === two.lastIndex
  }

  if (isDate(one) && isDate(two)) {
    return +one === +two
  }

  if (isMap(one) && isMap(two)) {
    return one.size === two.size && equal([...one.entries()], [...two.entries()], opts)
  }

  if (isSet(one) && isSet(two)) {
    return one.size === two.size && equal([...one.values()], [...two.values()], opts)
  }

  return false
}

export const clone = <T = unknown>(val: T, opts: CloneOptionsType | DeepType = false) : T => {
  const deep = isObject(opts) && !isUndef(opts.deep) ? opts.deep : opts
  const omits = isObject(opts) && isArray(opts.omit) ? opts.omit.filter(key => isRegExp(key) || isString(key) || isFiniteNumber(key)) : []
  const picks = isObject(opts) && isArray(opts.pick) ? opts.pick.filter(key => isRegExp(key) || isString(key) || isFiniteNumber(key)) : []
  const copys = isObject(opts) && isArray(opts.copy) ? opts.copy.filter(key => isRegExp(key) || isString(key) || isFiniteNumber(key)) : []
  const cache = isObject(opts) && isWeakMap(opts.cache) ? opts.cache : new WeakMap()

  const taking = (val: any) => {
    return isObject(val) ? Object.entries(val) : isArray(val) ? val.entries() : []
  }

  const cloning = (val: T, level: number): T => {
    const value: any = isArray(val)
      ? []
      : {}

    for (const [key, source] of taking(val)) {
      if (!picks.every(k => isRegExp(k) ? k.test(String(key)) : String(k) === String(key))) {
        continue
      }

      if (omits.some(k => isRegExp(k) ? k.test(String(key)) : String(k) === String(key))) {
        continue
      }

      if (copys.every(k => isRegExp(k) ? k.test(String(key)) : String(k) === String(key))) {
        value[key] = source
        continue
      }

      if (level < 1) {
        value[key] = source
        continue
      }

      const isCopySet = isSet(source)
      const isCopyMap = isMap(source)
      const isCopyDate = isDate(source)
      const isCopyArray = isArray(source)
      const isCopyObject = isObject(source)
      const isCopyRegExp = isRegExp(source)

      if (!isCopySet && !isCopyMap && !isCopyDate && !isCopyArray && !isCopyObject && !isCopyRegExp) {
        value[key] = source
        continue
      }

      if (!cache.has(source)) {
        cache.set(source, clone(source, level - 1))
      }

      value[key] = cache.get(source)
    }

    return value as T
  }

  if (isRegExp(val)) {
    const flags = val.flags
    const source = val.source
    const regexp = new RegExp(source, flags)
    regexp.lastIndex = val.lastIndex
    return regexp as T
  }

  if (isObject(val)) {
    const level = deep === true ? Infinity : isFiniteNumber(deep) ? deep : 1
    return level >= 1 ? cloning(val, level) : val
  }

  if (isArray(val)) {
    const level = deep === true ? Infinity : isFiniteNumber(deep) ? deep : 1
    return level >= 1 ? cloning(val, level) : val
  }

  if (isDate(val)) {
    return new Date(+val) as T
  }

  if (isMap(val)) {
    const maps = Array.from(val.entries()) as any
    const level = deep === true ? Infinity : isFiniteNumber(deep) ? deep : 1
    return new Map(cloning(maps, level) as any) as T
  }

  if (isSet(val)) {
    const sets = Array.from(val.values()) as any
    const level = deep === true ? Infinity : isFiniteNumber(deep) ? deep : 1
    return new Set(cloning(sets, level) as any) as T
  }

  return val
}

export const assign = <T = unknown>(val: T, ...rest: any[]) => {
  const cache = new WeakMap()
  const state = rest.slice(-1)[0]
  const level = state === true ? Infinity : isFiniteNumber(state) ? state : 1

  const taking = (val: any) => {
    return isObject(val) ? Object.entries(val) : isArray(val) ? val.entries() : []
  }

  const merging = (val: T, obj: T, level: number) => {
    const refly: any = isMap(val) ? Array.from(val.entries()) : isSet(val) ? Array.from(val.values()) : val
    const newly: any = isMap(obj) ? Array.from(obj.entries()) : isSet(obj) ? Array.from(obj.values()) : val

    for (const [key, source] of taking(newly)) {
      if (isUndef(source)) {
        continue
      }

      if (level < 1) {
        refly[key] = source
        continue
      }

      const isCopySet = isSet(source)
      const isCopyMap = isMap(source)
      const isCopyDate = isDate(source)
      const isCopyArray = isArray(source)
      const isCopyObject = isObject(source)
      const isCopyRegExp = isRegExp(source)

      if (!isCopySet && !isCopyMap && !isCopyDate && !isCopyArray && !isCopyObject && !isCopyRegExp) {
        refly[key] = source
        continue
      }

      if (!cache.has(source)) {
        cache.set(source, clone(source, { deep: true, cache }))
      }

      if (type(refly[key]) !== type(source)) {
        refly[key] = cache.get(source)
        continue
      }

      merging(refly[key], newly[key], level - 1)
    }
  }

  if (isObject(val) || isArray(val) || isMap(val) || isSet(val)) {
    for (const obj of rest) {
      if (type(val) !== type(obj)) {
        break
      }
      merging(val, obj, level)
    }
  }

  return val
}

export const deepClone = <T = unknown>(val: T): T => {
  return clone<T>(val, { deep: true, cache: new WeakMap() })
}

export const deepEqual = (one: unknown, two: unknown): boolean => {
  return equal(one, two, true)
}

export const deepAssign = <T = unknown>(val: T, ...rest: any[]): T => {
  return assign<T>(val, ...rest, true)
}


export default {
  type,
  size,
  omit,
  pick,
  equal,
  clone,
  assign,
  deepClone,
  deepEqual,
  deepAssign
}
