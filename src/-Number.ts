import { type } from './*Generalize'


export const isNumber = (num: unknown): num is number => {
  return type(num) === 'Number'
}

export const isInteger = (num: unknown): num is number => {
  return isFiniteNumber(num) && /^\d+$|^\d+\.0*$|^\.0+$/.test(String(num))
}

export const isDecimal = (num: unknown): num is number => {
  return isNumber(num) && Number.isFinite(num)
}

export const isFiniteNumber = (num: unknown): num is number => {
  return isNumber(num) && Number.isFinite(num)
}

export const toFiniteNumber = (num: unknown, lie = NaN): number => {
  if (num === Infinity) {
    return Number.MAX_SAFE_INTEGER
  }

  if (num === -Infinity) {
    return -Number.MAX_SAFE_INTEGER
  }

  if (isFiniteNumber(+num!)) {
    return isFiniteNumber(lie) && lie >= 0 ? +toFixed(+num!, lie) : +num!
  }

  return 0
}

export const toNumber = (num: unknown, lie = NaN): number => {
  return isFiniteNumber(+num!)
    ? isFiniteNumber(lie) && lie >= 0 ? +toFixed(+num!, lie) : +num!
    : +num!
}

export const toFixed = (num: unknown, lie = NaN): string => {
  num = isFiniteNumber(num) ? num : +num!
  lie = isFiniteNumber(lie) ? lie : NaN
  lie = lie >= 0 ? lie : NaN

  if (isFiniteNumber(num)) {
    let number = 0
    let string = ''
    let decimal = false

    number = isFiniteNumber(lie) ? Math.round(Math.pow(10, lie) * +num) / Math.pow(10, lie) : +num
    string = isFiniteNumber(number) ? String(number) : String(number)
    decimal = string.indexOf('.') !== -1

    if (decimal && lie > 0) {
      return string.split('.')[0] + '.' + string.split('.')[1].padEnd(lie, '0')
    }

    if (!decimal && lie > 0) {
      return string + '.' + ''.padEnd(lie, '0')
    }

    return string
  }

  return ''
}


export default {
  isNumber,
  isInteger,
  isDecimal,
  isFiniteNumber,
  toFiniteNumber,
  toNumber,
  toFixed
}
