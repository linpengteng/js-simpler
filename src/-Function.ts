import { type } from './*Generalize'
import { isNonEmptyString } from './-String'


export const isGeneratorFunction = (func: unknown): func is Function => {
  return type(func) === 'GeneratorFunction'
}

export const isGeneralFunction = (func: unknown): func is Function => {
  return type(func) === 'Function'
}

export const isAsyncFunction = (func: unknown): func is Function => {
  return type(func) === 'AsyncFunction'
}

export const isFunction = (func: unknown): func is Function => {
  return isAsyncFunction(func) || isGeneralFunction(func) || isGeneratorFunction(func)
}

export const toFunction = (func: unknown): Function => {
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
