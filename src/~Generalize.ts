import { isFiniteNumber, isNumber, isNaN } from './-Number'
import { isWeakMap } from './-WeakMap'
import { isUndef } from './~Nullable'
import { isRegExp } from './-RegExp'
import { isObject } from './-Object'
import { isString } from './-String'
import { isArray } from './-Array'
import { isDate } from './-Date'
import { isMap } from './-Map'
import { isSet } from './-Set'


export type DeepType = boolean | number
export type FilterType = string | number | RegExp
export type FilterTypes = Array<string | number | RegExp>
export type CloneOptionsType = { omits?: FilterTypes; picks?: FilterTypes; cache?: WeakMap<object, unknown>; deep?: DeepType; }
export type EqualOptionsType = { strict?: FilterTypes; include?:FilterTypes; exclude?: FilterTypes; deep?: DeepType; }


export const omit = <T = unknown>(val: T, arr?: FilterTypes | FilterType, deep: DeepType = false): T => {
  return clone(val, { omits: isArray(arr) ? arr : !isUndef(arr) ? [arr] : [], deep })
}

export const pick = <T = unknown>(val: T, arr?: FilterTypes | FilterType, deep: DeepType = false): T => {
  return clone(val, { picks: isArray(arr) ? arr : !isUndef(arr) ? [arr] : [], deep })
}

export const equal = (one: unknown, two: unknown, opts: EqualOptionsType | DeepType = false): boolean => {
  if (one === two) {
    return true
  }

  if (Object.is(one, two)) {
    return true
  }

  if (isFiniteNumber(one) && isFiniteNumber(two)) {
    return Math.abs(one - two) < Number.EPSILON
  }

  if (isRegExp(one) && isRegExp(two)) {
    return one.source === two.source && one.flags === two.flags && one.lastIndex === two.lastIndex
  }

  if (isObject(one) && isObject(two)) {
    if (Object.keys(one).length !== Object.keys(two).length) {
      return false
    }

    const deep = isObject(opts) && !isUndef(opts.deep) ? opts.deep : opts
    const strict = isObject(opts) && isArray(opts.strict) ? opts.strict.filter(key => isRegExp(key) || isFiniteNumber(key) || isString(key)) : []
    const exclude = isObject(opts) && isArray(opts.exclude) ? opts.exclude.filter(key => isRegExp(key) || isFiniteNumber(key) || isString(key)) : []
    const include = isObject(opts) && isArray(opts.include) ? opts.include.filter(key => isRegExp(key) || isFiniteNumber(key) || isString(key)) : [/(?:)/]

    for (const key of Object.keys(one)) {
      const val1 = one[key]
      const val2 = two[key]
      const level = isNumber(deep) ? deep : deep === true ? Infinity : 0
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

  if (isArray(one) && isArray(two)) {
    if (one.length !== two.length) {
      return false
    }

    const deep = isObject(opts) && !isUndef(opts.deep) ? opts.deep : opts
    const strict = isObject(opts) && isArray(opts.strict) ? opts.strict.filter(key => isRegExp(key) || isFiniteNumber(key) || isString(key)) : []
    const exclude = isObject(opts) && isArray(opts.exclude) ? opts.exclude.filter(key => isRegExp(key) || isFiniteNumber(key) || isString(key)) : []
    const include = isObject(opts) && isArray(opts.include) ? opts.include.filter(key => isRegExp(key) || isFiniteNumber(key) || isString(key)) : [/(?:)/]

    for (const key of one.keys()) {
      const val1 = one[key]
      const val2 = two[key]
      const level = isNumber(deep) ? deep : deep === true ? Infinity : 0
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
  const omits = isObject(opts) && isArray(opts.omits) ? opts.omits.filter(key => isRegExp(key) || isString(key) || isFiniteNumber(key)) : []
  const picks = isObject(opts) && isArray(opts.picks) ? opts.picks.filter(key => isRegExp(key) || isString(key) || isFiniteNumber(key)) : []
  const cache = isObject(opts) && isWeakMap(opts.cache) ? opts.cache : new WeakMap()
  const level = isNumber(deep) ? deep : deep === true ? Infinity : 1

  const taking = (val: any): any[] => {
    return isObject(val) ? Object.entries(val) : val.entries()
  }

  const cloning = (val: T, level: number): T => {
    const value: any = isArray(val) ? [] : {}

    for (const [key, source] of taking(val)) {
      if (picks.length > 0 && !picks.some(k => isRegExp(k) ? k.test(String(key)) : String(k) === String(key))) {
        continue
      }

      if (omits.length > 0 && omits.some(k => isRegExp(k) ? k.test(String(key)) : String(k) === String(key))) {
        continue
      }

      let record = source

      const isCopySet = isSet(source)
      const isCopyMap = isMap(source)
      const isCopyDate = isDate(source)
      const isCopyArray = isArray(source)
      const isCopyObject = isObject(source)
      const isCopyRegExp = isRegExp(source)

      if (!isCopySet && !isCopyMap && !isCopyDate && !isCopyArray && !isCopyObject && !isCopyRegExp) {
        isArray(value) ? value.push(record) : value[key] = record
        continue
      }

      if (level > 1 && !cache.has(source)) {
        cache.set(source, clone(source, { omits, picks, cache, deep: level - 1 }))
      }

      if (level > 1 && cache.has(source)) {
        record = cache.get(source)
      }

      isArray(value) ? value.push(record) : value[key] = record
    }

    return value as T
  }

  if (isNaN(level) || level < 1) {
    return val
  }

  if (isRegExp(val)) {
    const flags = val.flags
    const source = val.source
    const regexp = new RegExp(source, flags)
    regexp.lastIndex = val.lastIndex
    return regexp as T
  }

  if (isObject(val)) {
    return cloning(val, level)
  }

  if (isArray(val)) {
    return cloning(val, level)
  }

  if (isDate(val)) {
    return new Date(+val) as T
  }

  if (isMap(val)) {
    const maps = Array.from(val.entries()) as any
    return new Map(cloning(maps, level) as any) as T
  }

  if (isSet(val)) {
    const sets = Array.from(val.values()) as any
    return new Set(cloning(sets, level) as any) as T
  }

  return val
}

export const assign = <T = unknown>(val: T, ...rest: any[]) => {
  const empty = {}
  const cache = new WeakMap()
  const state = rest.slice(-1)[0]
  const level = isNumber(state) ? state : state === true ? Infinity : 1

  const taking = (val: any) => {
    return isObject(val) ? Object.entries(val) : val.entries()
  }

  const merging = (val: T, obj: T, level: number) => {
    const refly: any = isMap(val) ? Array.from(val.entries()) : isSet(val) ? Array.from(val.values()) : val
    const newly: any = isMap(obj) ? Array.from(obj.entries()) : isSet(obj) ? Array.from(obj.values()) : obj

    for (const [key, source] of taking(newly)) {
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
      const isNotSameType = empty.toString.call(refly[key]) !== empty.toString.call(source)

      if (!isCopySet && !isCopyMap && !isCopyDate && !isCopyArray && !isCopyObject && !isCopyRegExp) {
        refly[key] = source
        continue
      }

      if (!cache.has(source)) {
        cache.set(source, clone(source, { deep: level, cache }))
      }

      if (isNotSameType) {
        refly[key] = cache.get(source)
        continue
      }

      merging(refly[key], newly[key], level - 1)
    }

    if (isMap(val) || isSet(val)) {
      val.clear()
    }

    if (isMap(val)) {
      for (const [key, source] of refly) {
        val.set(key, source)
      }
    }

    if (isSet(val)) {
      for (const source of refly) {
        val.add(source)
      }
    }
  }

  if (isObject(val) || isArray(val) || isMap(val) || isSet(val)) {
    for (const obj of rest) {
      if (empty.toString.call(val) !== empty.toString.call(obj)) {
        continue
      }
      merging(val, obj, level - 1)
    }
  }

  return val
}

export const deepAssign = <T = unknown>(val: T, ...rest: any[]): T => {
  return assign<T>(val, ...rest, true)
}

export const deepClone = <T = unknown>(val: T, opts: CloneOptionsType = {}): T => {
  return clone<T>(val, { ...opts, deep: true })
}

export const deepEqual = (one: unknown, two: unknown, opts: EqualOptionsType = {}): boolean => {
  return equal(one, two, { ...opts, deep: true })
}


export default {
  omit,
  pick,
  equal,
  clone,
  assign,
  deepAssign,
  deepClone,
  deepEqual
}
