import { type } from './*Customize'
import { isFiniteNumber } from './-Number'


export const isPromise = (val: unknown): val is Promise<unknown> => {
  return type(val) === 'Promise'
}

export const waitPromise = <T = unknown>(wait: any) => {
  if (isFiniteNumber(wait) && wait >= 0) {
    return new Promise<T>(resolve => { setTimeout(resolve, wait) })
  }

  return Promise.resolve(wait)
}

export const newPromise = <T = unknown>() => {
  const State = {
    promise: null! as Promise<T>,
    resolve: null! as (value: T | PromiseLike<T>) => void,
    reject: null! as (reason?: any) => void
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
  newPromise,
  waitPromise
}
