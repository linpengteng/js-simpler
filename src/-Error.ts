import { isString } from './-String'
import { isObject } from './-Object'
import { isSymbol } from './-Symbol'


type DefineMessager = {
  type?: symbol
  name?: string
  stack?: string
  message?: string
  [key: string]: any;
}

class DefineCustomError<T extends DefineMessager> extends Error {
  type: symbol
  override name: string
  override stack: string
  override message: string
  options: { [key: string]: any; } & T

  constructor(messager?: string | DefineMessager) {
    super(
      isObject(messager) && isString(messager.message)
        ? messager.message
        : isString(messager)
          ? messager
          : undefined
    )

    if (isObject(messager)) {
      this.name = isString(messager.name) && messager.name.trim() || 'CustomizeError'
      this.type = isSymbol(messager.type) ? messager.type : Symbol.for(this.name)
      this.stack = isString(messager.stack) ? messager.stack.trim() : ''
      this.message = isString(messager.message) ? messager.message.trim() : ''

      const skips = ['name', 'type', 'stack', 'message']
      const temps = this.options = {} as any

      for (const key in messager) {
        if (!skips.includes(key)) {
          temps[key] = messager[key]
        }
      }
    }

    if (isString(messager)) {
      this.name = 'CustomizeError'
      this.type = Symbol.for(this.name)
      this.stack = ''
      this.message = messager.trim()
      this.options = {} as any
    }

    this.name = 'CustomizeError'
    this.type = Symbol.for(this.name)
    this.stack = ''
    this.message = ''
    this.options = {} as any
  }
}


export const isError = (err: unknown): err is Error => {
  try { return err instanceof Error } catch /* istanbul ignore next */ { return false }
}

export const isURIError = (err: unknown): err is URIError => {
  try { return err instanceof URIError } catch /* istanbul ignore next */ { return false }
}

export const isTypeError = (err: unknown): err is TypeError => {
  try { return err instanceof TypeError } catch /* istanbul ignore next */ { return false }
}

export const isEvalError = (err: unknown): err is EvalError => {
  try { return err instanceof EvalError } catch /* istanbul ignore next */ { return false }
}

export const isRangeError = (err: unknown): err is RangeError => {
  try { return err instanceof RangeError } catch /* istanbul ignore next */ { return false }
}

export const isSyntaxError = (err: unknown): err is SyntaxError => {
  try { return err instanceof SyntaxError } catch /* istanbul ignore next */ { return false }
}

export const isReferenceError = (err: unknown): err is ReferenceError => {
  try { return err instanceof ReferenceError } catch /* istanbul ignore next */ { return false }
}


export const newError = (message?: string): Error => {
  return new Error(message)
}

export const newURIError = (message?: string): URIError => {
  return new URIError(message)
}

export const newTypeError = (message?: string):TypeError => {
  return new TypeError(message)
}

export const newEvalError = (message?: string): EvalError => {
  return new EvalError(message)
}

export const newRangeError = (message?: string): RangeError => {
  return new RangeError(message)
}

export const newSyntaxError = (message?: string): SyntaxError => {
  return new SyntaxError(message)
}

export const newReferenceError = (message?: string): ReferenceError => {
  return new ReferenceError(message)
}


export const isCustomizeError = <T extends Record<string, any> = any>(err: unknown, type?: symbol): err is DefineCustomError<T> => {
  try {
    return (
      (err instanceof DefineCustomError) &&
      (type === undefined || err.type === type)
    )
  } catch /* istanbul ignore next */ { return false }
}

export const newCustomizeError = <T extends Record<string, any> = any>(messager?: string | DefineMessager): DefineCustomError<T> => {
  return new DefineCustomError(messager)
}


export default {
  isError,
  isURIError,
  isTypeError,
  isEvalError,
  isRangeError,
  isSyntaxError,
  isReferenceError,

  newError,
  newURIError,
  newTypeError,
  newEvalError,
  newRangeError,
  newSyntaxError,
  newReferenceError,

  isCustomizeError,
  newCustomizeError
}
