import { isFunction } from './-Function'
import { isInteger } from './-Number'

export interface Curry {
  <T1, R>(func: (this: any, t1: T1) => R, length?: number): CurryFn1<T1, R>;
  <T1, T2, R>(func: (this: any, t1: T1, t2: T2) => R, length?: number): CurryFn2<T1, T2, R>;
  <T1, T2, T3, R>(func: (this: any, t1: T1, t2: T2, t3: T3) => R, length?: number): CurryFn3<T1, T2, T3, R>;
  <T1, T2, T3, T4, R>(func: (this: any, t1: T1, t2: T2, t3: T3, t4: T4) => R, length?: number): CurryFn4<T1, T2, T3, T4, R>;
  <T1, T2, T3, T4, T5, R>(func: (this: any, t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R, length?: number): CurryFn5<T1, T2, T3, T4, T5, R>;
  (func: (this: any, ...args: any[]) => any, length?: number): (this: any, ...args: any[]) => any;
}

export interface CurryFn1<T1, R> {
  (this: any): CurryFn1<T1, R>;
  (this: any, t1: T1): R;
}

export interface CurryFn2<T1, T2, R> {
  (this: any): CurryFn2<T1, T2, R>;
  (this: any, t1: T1): CurryFn1<T2, R>;
  (this: any, t1: Curry, t2: T2): CurryFn1<T1, R>;
  (this: any, t1: T1, t2: T2): R;
}

export interface CurryFn3<T1, T2, T3, R> {
  (this: any): CurryFn3<T1, T2, T3, R>;
  (this: any, t1: T1): CurryFn2<T2, T3, R>;
  (this: any, t1: Curry, t2: T2): CurryFn2<T1, T3, R>;
  (this: any, t1: T1, t2: T2): CurryFn1<T3, R>;
  (this: any, t1: Curry, t2: Curry, t3: T3): CurryFn2<T1, T2, R>;
  (this: any, t1: T1, t2: Curry, t3: T3): CurryFn1<T2, R>;
  (this: any, t1: Curry, t2: T2, t3: T3): CurryFn1<T1, R>;
  (this: any, t1: T1, t2: T2, t3: T3): R;
}

export interface CurryFn4<T1, T2, T3, T4, R> {
  (this: any): CurryFn4<T1, T2, T3, T4, R>;
  (this: any, t1: T1): CurryFn3<T2, T3, T4, R>;
  (this: any, t1: Curry, t2: T2): CurryFn3<T1, T3, T4, R>;
  (this: any, t1: T1, t2: T2): CurryFn2<T3, T4, R>;
  (this: any, t1: Curry, t2: Curry, t3: T3): CurryFn3<T1, T2, T4, R>;
  (this: any, t1: Curry, t2: Curry, t3: T3): CurryFn2<T2, T4, R>;
  (this: any, t1: Curry, t2: T2, t3: T3): CurryFn2<T1, T4, R>;
  (this: any, t1: T1, t2: T2, t3: T3): CurryFn1<T4, R>;
  (this: any, t1: Curry, t2: Curry, t3: Curry, t4: T4): CurryFn3<T1, T2, T3, R>;
  (this: any, t1: T1, t2: Curry, t3: Curry, t4: T4): CurryFn2<T2, T3, R>;
  (this: any, t1: Curry, t2: T2, t3: Curry, t4: T4): CurryFn2<T1, T3, R>;
  (this: any, t1: Curry, t2: Curry, t3: T3, t4: T4): CurryFn2<T1, T2, R>;
  (this: any, t1: T1, t2: T2, t3: Curry, t4: T4): CurryFn1<T3, R>;
  (this: any, t1: T1, t2: Curry, t3: T3, t4: T4): CurryFn1<T2, R>;
  (this: any, t1: Curry, t2: T2, t3: T3, t4: T4): CurryFn1<T1, R>;
  (this: any, t1: T1, t2: T2, t3: T3, t4: T4): R;
}

export interface CurryFn5<T1, T2, T3, T4, T5, R> {
  (this: any): CurryFn5<T1, T2, T3, T4, T5, R>;
  (this: any, t1: T1): CurryFn4<T2, T3, T4, T5, R>;
  (this: any, t1: Curry, t2: T2): CurryFn4<T1, T3, T4, T5, R>;
  (this: any, t1: T1, t2: T2): CurryFn3<T3, T4, T5, R>;
  (this: any, t1: Curry, t2: Curry, t3: T3): CurryFn4<T1, T2, T4, T5, R>;
  (this: any, t1: T1, t2: Curry, t3: T3): CurryFn3<T2, T4, T5, R>;
  (this: any, t1: Curry, t2: T2, t3: T3): CurryFn3<T1, T4, T5, R>;
  (this: any, t1: T1, t2: T2, t3: T3): CurryFn2<T4, T5, R>;
  (this: any, t1: Curry, t2: Curry, t3: Curry, t4: T4): CurryFn4<T1, T2, T3, T5, R>;
  (this: any, t1: T1, t2: Curry, t3: Curry, t4: T4): CurryFn3<T2, T3, T5, R>;
  (this: any, t1: Curry, t2: T2, t3: Curry, t4: T4): CurryFn3<T1, T3, T5, R>;
  (this: any, t1: Curry, t2: Curry, t3: T3, t4: T4): CurryFn3<T1, T2, T5, R>;
  (this: any, t1: T1, t2: T2, t3: Curry, t4: T4): CurryFn2<T3, T5, R>;
  (this: any, t1: T1, t2: Curry, t3: T3, t4: T4): CurryFn2<T2, T5, R>;
  (this: any, t1: Curry, t2: T2, t3: T3, t4: T4): CurryFn2<T1, T5, R>;
  (this: any, t1: T1, t2: T2, t3: T3, t4: T4): CurryFn1<T5, R>;
  (this: any, t1: Curry, t2: Curry, t3: Curry, t4: Curry, t5: T5): CurryFn4<T1, T2, T3, T4, R>;
  (this: any, t1: T1, t2: Curry, t3: Curry, t4: Curry, t5: T5): CurryFn3<T2, T3, T4, R>;
  (this: any, t1: Curry, t2: T2, t3: Curry, t4: Curry, t5: T5): CurryFn3<T1, T3, T4, R>;
  (this: any, t1: Curry, t2: Curry, t3: T3, t4: Curry, t5: T5): CurryFn3<T1, T2, T4, R>;
  (this: any, t1: Curry, t2: Curry, t3: Curry, t4: T4, t5: T5): CurryFn3<T1, T2, T3, R>;
  (this: any, t1: T1, t2: T2, t3: Curry, t4: Curry, t5: T5): CurryFn2<T3, T4, R>;
  (this: any, t1: T1, t2: Curry, t3: T3, t4: Curry, t5: T5): CurryFn2<T2, T4, R>;
  (this: any, t1: T1, t2: Curry, t3: Curry, t4: T4, t5: T5): CurryFn2<T2, T3, R>;
  (this: any, t1: Curry, t2: T2, t3: T3, t4: Curry, t5: T5): CurryFn2<T1, T4, R>;
  (this: any, t1: Curry, t2: T2, t3: Curry, t4: T4, t5: T5): CurryFn2<T1, T3, R>;
  (this: any, t1: Curry, t2: Curry, t3: T3, t4: T4, t5: T5): CurryFn2<T1, T2, R>;
  (this: any, t1: T1, t2: T2, t3: T3, t4: Curry, t5: T5): CurryFn1<T4, R>;
  (this: any, t1: T1, t2: T2, t3: Curry, t4: T4, t5: T5): CurryFn1<T3, R>;
  (this: any, t1: T1, t2: Curry, t3: T3, t4: T4, t5: T5): CurryFn1<T2, R>;
  (this: any, t1: Curry, t2: T2, t3: T3, t4: T4, t5: T5): CurryFn1<T1, R>;
  (this: any, t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): R;
}

export const curry: Curry = function(this: any, fn: (...rest: any[]) => any, length?: number) {
  if (!isFunction(fn)) {
    throw new TypeError('#<fn> is not a function')
  }

  const currying = (fn: (...rest: any[]) => any, length: number, holder: any, params: any[], holders: any[]) => {
    const wrapper = (...rest: any[]) => {
      const _params = params.slice()
      const _holders = holders.slice()

      rest.forEach(arg => {
        if (!holders.length && arg === holder) {
          _params.push(arg)
          _holders.push(_params.length - 1)
          return
        }

        if (!holders.length && arg !== holder) {
          _params.push(arg)
          return
        }

        if (holders.length && arg !== holder) {
          const index = holders.shift()
          _holders.splice(_holders.indexOf(index), 1)
          _params[index] = arg
          return
        }

        holders.shift()
      })

      const isPass = (
        _params.length >= length &&
        _params.slice(0, length).every(v => v !== holder)
      )

      return !isPass ? currying(fn, length, holder, _params, _holders) : fn.apply(this, _params)
    }

    return wrapper
  }

  return currying(fn, isInteger(length) && length >= 0 ? length : fn.length, curry, [], [])
}

export default {
  curry,
}
