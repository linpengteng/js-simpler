export const isNull = (val: unknown): val is null => {
  return Object.prototype.toString.call(val) === '[object Null]'
}

export const isUndef = (val: unknown): val is undefined => {
  return Object.prototype.toString.call(val) === '[object Undefined]'
}

export const isNullable = (val: unknown): val is null | undefined => {
  return isNull(val) || isUndef(val)
}


export default {
  isNull,
  isUndef,
  isNullable
}
