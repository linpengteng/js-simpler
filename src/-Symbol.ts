import { isUndef } from './~Nullable'
import { isString } from './-String'


export const isSymbol = (val: unknown): val is symbol => {
  return Object.prototype.toString.call(val) === '[object Symbol]'
}

export const toSymbol = (val?: unknown): symbol => {
  return !isSymbol(val)
    ? isString(val) ? Symbol(val) : Symbol()
    : val
}

export const newSymbol = (val?: unknown): symbol => {
  return isString(val) ? Symbol(val) : Symbol()
}

export const toSymbolFor = (val?: unknown): symbol => {
  return !isSymbol(val) || isUndef(Symbol.keyFor(val))
    ? Symbol.for(isString(val) ? val : 'undefined')
    : val
}

export const newSymbolFor = (val?: unknown): symbol => {
  return !isSymbol(val) || isUndef(Symbol.keyFor(val))
    ? Symbol.for(isString(val) ? val : 'undefined')
    : val
}


export default {
  isSymbol,
  toSymbol,
  newSymbol,
  toSymbolFor,
  newSymbolFor
}
