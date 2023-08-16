import { itType } from './*Customize'
import { isString } from './-String'
import { isBoolean } from './-Boolean'


export const isRegExp = (reg: unknown): reg is RegExp => {
  return itType(reg) === 'RegExp'
}

export const toRegExp = (...rest: unknown[]): RegExp => {
  const regex = isRegExp(rest[0]) ? rest[0] : /(?:)/
  const flags = isString(rest[1]) ? rest[1] : regex.flags
  const escape = isBoolean(rest[2]) ? rest[2] : false

  if (isRegExp(rest[0]) && flags === rest[0].flags) {
    return regex
  }

  return !isRegExp(rest[0])
    ? new RegExp(escape ? regex.source.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&') : regex.source, flags)
    : new RegExp(regex.source, flags)
}


export default {
  isRegExp,
  toRegExp
}
