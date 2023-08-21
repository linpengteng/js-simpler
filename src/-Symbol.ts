import { isUndef } from './~Nullable'
import { isString } from './-String'


export const isSymbol = (val: unknown): val is symbol => {
  return Object.prototype.toString.call(val) === '[object Symbol]'
}

export const toSymbol = (val?: unknown): symbol => {
  try {
    return !isSymbol(val)
      ? Symbol(val as any)
      : val
  } catch /* istanbul ignore next */ {
    return Symbol()
  }
}

export const newSymbol = (val?: unknown): symbol => {
  try {
    return Symbol(val as any)
  } catch /* istanbul ignore next */ {
    return Symbol()
  }
}

export const toSymbolFor = (val?: unknown): symbol => {
  return !isSymbol(val) || isUndef(Symbol.keyFor(val))
    ? Symbol.for(isString(val) ? val : '')
    : val
}

export const newSymbolFor = (val?: unknown): symbol => {
  return !isSymbol(val) || isUndef(Symbol.keyFor(val))
    ? Symbol.for(isString(val) ? val : '')
    : val
}


export default {
  isSymbol,
  toSymbol,
  newSymbol,
  toSymbolFor,
  newSymbolFor
}
