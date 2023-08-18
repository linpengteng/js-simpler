import { type } from './*Generalize'
import { isUndef } from './*Nullable'


export const isSymbol = (val: unknown): val is symbol => {
  return type(val) === 'Symbol'
}

export const toSymbol = (val: unknown): symbol => {
  try {
    return !isSymbol(val)
      ? Symbol(val as any)
      : val
  } catch {
    return Symbol()
  }
}

export const newSymbol = (val: unknown): symbol => {
  try { return Symbol(val as any) } catch { return Symbol() }
}

export const toSymbolFor = (val: unknown): symbol => {
  try {
    return !isSymbol(val) || isUndef(Symbol.keyFor(val))
      ? Symbol.for(val as any)
      : val
  } catch {
    return Symbol()
  }
}

export const newSymbolFor = (val: unknown): symbol => {
  try {
    return isSymbol(val) && !isUndef(Symbol.keyFor(val))
      ? Symbol.for(Symbol.keyFor(val)!)
      : Symbol.for(val as any)
  } catch {
    return Symbol()
  }
}


export default {
  isSymbol,
  toSymbol,
  newSymbol,
  toSymbolFor,
  newSymbolFor
}
