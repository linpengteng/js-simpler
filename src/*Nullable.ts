import { itType } from './*Customize'


export const isNull = (val: unknown): val is null => {
  return itType(val) === 'Null'
}

export const isUndef = (val: unknown): val is undefined => {
  return itType(val) === 'Undefined'
}

export const isNullable = (val: unknown): val is null | undefined => {
  return isNull(val) || isUndef(val)
}


export default {
  isNull,
  isUndef,
  isNullable
}
