export const isGeneratorFunction = (func: unknown): func is (...rest: any[]) => void => {
  return Object.prototype.toString.call(func) === '[object GeneratorFunction]'
}

export const isGeneralFunction = (func: unknown): func is (...rest: any[]) => void => {
  return Object.prototype.toString.call(func) === '[object Function]'
}

export const isAsyncFunction = (func: unknown): func is (...rest: any[]) => void => {
  return Object.prototype.toString.call(func) === '[object AsyncFunction]'
}

export const isFunction = (func: unknown): func is (...rest: any[]) => void => {
  return isAsyncFunction(func) || isGeneralFunction(func) || isGeneratorFunction(func)
}

export const toFunction = (...rest: unknown[]): (...rest: any[]) => void => {
  if (isFunction(rest[0])) {
    return rest[0]
  }

  try {
    // @ts-ignore
    return new Function(...rest)
  } catch /* istanbul ignore next */ {
    return () => {}
  }
}

export default {
  isGeneratorFunction,
  isGeneralFunction,
  isAsyncFunction,
  isFunction,
  toFunction,
}
