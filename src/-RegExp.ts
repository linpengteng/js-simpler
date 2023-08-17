import { type } from './*Customize'
import { isString } from './-String'
import { isBoolean } from './-Boolean'


export const isRegExp = (reg: unknown): reg is RegExp => {
  return type(reg) === 'RegExp'
}

export const toRegExp = (...rest: unknown[]): RegExp => {
  const regex = isRegExp(rest[0]) ? rest[0] : /(?:)/
  const flags = isString(rest[1]) ? rest[1] : regex.flags
  const isEscape = isBoolean(rest[2]) ? rest[2] : false
  const isRegexp = isRegExp(rest[0])

  if (isRegExp(rest[0]) && rest.length === 1) {
    return regex
  }

  return !isRegexp && isEscape
    ? new RegExp(regex.source.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'), flags)
    : new RegExp(regex.source, flags)
}

export const newRegExp = (...rest: unknown[]): RegExp => {
  const regex = isRegExp(rest[0]) ? rest[0] : /(?:)/
  const flags = isString(rest[1]) ? rest[1] : regex.flags
  const isEscape = isBoolean(rest[2]) ? rest[2] : false
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
