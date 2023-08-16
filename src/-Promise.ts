import { itType } from './*Customize'


export const isPromise = (val: unknown): val is Promise<unknown> => {
  return itType(val) === 'Promise'
}

export const toPromise = (val: unknown): Promise<unknown> => {
  return Promise.resolve(val)
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
  toPromise,
  newPromise
}
