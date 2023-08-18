import { isObject } from './-Object'
import { isNonEmptyString, isString } from './-String'

class DefineCustomError extends Error {
  recorder: {
    type: string;
    name: string;
    message: string;
    [key: string]: any;
  }

  constructor(messager?: string | Record<string, any>) {
    super(
      isObject(messager) && isString(messager.message)
        ? messager.message
        : isString(messager)
          ? messager
          : undefined
    )

    if (isObject(messager)) {
      this.recorder = {
        ...messager,
        type: isNonEmptyString(messager.type) ? messager.type : 'CustomizeError',
        name: isNonEmptyString(messager.name) ? messager.name : 'CustomizeError',
        message: isNonEmptyString(messager.message) ? messager.message : ''
      }
    }

    if (isString(messager)) {
      this.recorder = {
        type: 'CustomizeError',
        name: 'CustomizeError',
        message: messager.trim()
      }
    }

    this.recorder = {
      type: 'CustomizeError',
      name: 'CustomizeError',
      message: ''
    }
  }
}

export const isError = (err: unknown): err is Error => {
  try { return err instanceof Error } catch { return false }
}

export const isURIError = (err: unknown): err is URIError => {
  try { return err instanceof URIError } catch { return false }
}

export const isTypeError = (err: unknown): err is TypeError => {
  try { return err instanceof TypeError } catch { return false }
}

export const isEvalError = (err: unknown): err is EvalError => {
  try { return err instanceof EvalError } catch { return false }
}

export const isRangeError = (err: unknown): err is RangeError => {
  try { return err instanceof RangeError } catch { return false }
}

export const isSyntaxError = (err: unknown): err is SyntaxError => {
  try { return err instanceof SyntaxError } catch { return false }
}

export const isReferenceError = (err: unknown): err is ReferenceError => {
  try { return err instanceof ReferenceError } catch { return false }
}

export const isCustomizeError = (err: unknown): err is DefineCustomError => {
  try { return err instanceof DefineCustomError } catch { return false }
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

export const newCustomizeError = (messager?: string | Record<string, any>): DefineCustomError => {
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
  isCustomizeError,

  newError,
  newURIError,
  newTypeError,
  newEvalError,
  newRangeError,
  newSyntaxError,
  newReferenceError,
  newCustomizeError
}
