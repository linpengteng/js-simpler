import { type } from './*Customize'


export const isNull = (val: unknown): val is null => {
  return type(val) === 'Null'
}

export const isUndef = (val: unknown): val is undefined => {
  return type(val) === 'Undefined'
}

export const isNullable = (val: unknown): val is null | undefined => {
  return isNull(val) || isUndef(val)
}


export default {
  isNull,
  isUndef,
  isNullable
}
