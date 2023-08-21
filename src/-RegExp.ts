import { isString } from './-String'
import { isBoolean } from './-Boolean'
import { isFiniteNumber } from './-Number'


export const isRegExp = (reg: unknown): reg is RegExp => {
  return Object.prototype.toString.call(reg) === '[object RegExp]'
}

export const toRegExp = (...rest: unknown[]): RegExp => {
  if (isRegExp(rest[0]) && rest.length === 1) {
    return rest[0]
  }

  const regex = isRegExp(rest[0]) ? rest[0] : isString(rest[0]) || isFiniteNumber(rest[0]) ? RegExp(`${rest[0]}`) : /(?:)/
  const flags = isString(rest[1]) ? rest[1] : isString(rest[2]) ? rest[2] : regex.flags
  const isEscape = isBoolean(rest[1]) ? rest[1] : isBoolean(rest[2]) ? rest[2] : false
  const isRegexp = isRegExp(rest[0])

  return !isRegexp && isEscape
    ? new RegExp(regex.source.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'), flags)
    : new RegExp(regex.source, flags)
}

export const newRegExp = (...rest: unknown[]): RegExp => {
  const regex = isRegExp(rest[0]) ? rest[0] : isString(rest[0]) || isFiniteNumber(rest[0]) ? RegExp(`${rest[0]}`) : /(?:)/
  const flags = isString(rest[1]) ? rest[1] : isString(rest[2]) ? rest[2] : regex.flags
  const isEscape = isBoolean(rest[1]) ? rest[1] : isBoolean(rest[2]) ? rest[2] : false
  const isRegexp = isRegExp(rest[0])

  return !isRegexp && isEscape
    ? new RegExp(regex.source.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'), flags)
    : new RegExp(regex.source, flags)
}

export default {
  isRegExp,
  toRegExp,
  newRegExp
}
