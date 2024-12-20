/* eslint-disable @typescript-eslint/no-unsafe-function-type */
/* eslint-disable @typescript-eslint/no-unused-expressions */

import { isFiniteNumber } from './-Number'
import { isFunction } from './-Function'

export const isPromise = (val: unknown): val is Promise<unknown> => {
  return Object.prototype.toString.call(val) === '[object Promise]'
}

export const toPromise = <T = unknown>(wait?: Function | number | unknown): Promise<T> => {
  if (isPromise(wait)) {
    return wait as Promise<T>
  }

  if (isFunction(wait)) {
    return Promise.resolve<T>(wait() as any)
  }

  if (isFiniteNumber(wait)) {
    return new Promise<T>((resolve, reject) => {
      wait >= 0 && setTimeout(resolve, wait)
      wait < 0 && setTimeout(reject, -wait)
    })
  }

  return Promise.resolve<T>(wait as T)
}

export const newPromise = <T = unknown>() => {
  const State = {
    promise: null! as Promise<T>,
    resolve: null! as (value: T | PromiseLike<T>) => void,
    reject: null! as (reason?: any) => void,
  }

  State.promise = new Promise<T>((resolve, reject) => {
    State.resolve = resolve
    State.reject = reject
  })

  return State as {
    promise: Promise<T>;
    resolve: (value: T | PromiseLike<T>) => void;
    reject: (reason?: any) => void;
  }
}

export default {
  isPromise,
  toPromise,
  newPromise,
}
