import { itType } from './*Customize'
import { isNonEmptyString } from './-String'


export function isGeneratorFunction(func: unknown): func is Function {
  return itType(func) === 'GeneratorFunction'
}

export function isGeneralFunction(func: unknown): func is Function {
  return itType(func) === 'Function'
}

export function isAsyncFunction(func: unknown): func is Function {
  return itType(func) === 'AsyncFunction'
}

export function isFunction(func: unknown): func is Function {
  return isAsyncFunction(func) || isGeneralFunction(func) || isGeneratorFunction(func)
}

export function toFunction(func: unknown): Function {
  if (isFunction(func)) {
    return func
  }

  if (isNonEmptyString(func)) {
    return new Function(func)
  }

  return () => {}
}


export default {
  isGeneratorFunction,
  isGeneralFunction,
  isAsyncFunction,
  isFunction,
  toFunction
}
