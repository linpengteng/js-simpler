import { itType } from './*Customize'


export const isSymbol = (val: unknown): val is Symbol => {
  return itType(val) === 'Symbol'
}


export default {
  isSymbol
}
