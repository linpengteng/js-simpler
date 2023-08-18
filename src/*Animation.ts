import { type } from './*Generalize'
import { isUndef } from './*Nullable'
import { isObject } from './-Object'
import { isFunction } from './-Function'
import { isFiniteNumber } from './-Number'
import { toFiniteNumber } from './-Number'


const debounce = (func: Function, wait: number, options: { leading?: boolean; trailing?: boolean; maxWait?: number; } = {}) => {
  let result: any
  let timerId: any
  let lastArgs: any
  let lastThis: any
  let lastCallTime = 0
  let lastInvokeTime = 0

  if (!isFunction(func)) {
    throw new TypeError('#<' + type(func) + '> is not a function')
  }

  if (!isObject(options)) {
    options = {}
  }

  wait = toFiniteNumber(wait)

  const leading = options.leading === true
  const trailing = options.trailing !== false
  const useFrame = wait < 20 && typeof window.requestAnimationFrame === 'function'
  const maxWait = isFiniteNumber(options.maxWait) && Math.max(options.maxWait, wait)


  function timerExpired() {
    const time = Date.now()

    if (shouldInvoke(time)) {
      return trailingEdge(time)
    }

    useFrame
      ? timerId = window.requestAnimationFrame(timerExpired)
      : timerId = setTimeout(timerExpired, remainingWait(time))
  }

  function remainingWait(time: number) {
    const timeSinceLastCall = time - lastCallTime
    const timeSinceLastInvoke = time - lastInvokeTime
    const remainingCallTime = Math.max(wait - timeSinceLastCall, 0)
    const remainingInvokeTime = Math.max(+maxWait! - timeSinceLastInvoke, 0)
    return maxWait === false ? remainingCallTime : Math.min(remainingCallTime, remainingInvokeTime)
  }

  function shouldInvoke(time: number) {
    const timeSinceLastCall = time - lastCallTime
    const timeSinceLastInvoke = time - lastInvokeTime
    return (
      lastCallTime === 0 ||
      timeSinceLastCall < 0 ||
      timeSinceLastCall >= wait ||
      (maxWait !== false && timeSinceLastInvoke >= maxWait)
    )
  }

  function leadingEdge(time: number) {
    if (leading) {
      return invokeFunc(time)
    }

    lastInvokeTime = time

    useFrame
      ? timerId = window.requestAnimationFrame(timerExpired)
      : timerId = setTimeout(timerExpired, wait)

    return result
  }

  function trailingEdge(time: number) {
    timerId = undefined

    if (trailing && lastArgs) {
      return invokeFunc(time)
    }

    lastArgs = lastThis = undefined

    return result
  }

  function invokeFunc(time: number) {
    const args = lastArgs
    const context = lastThis
    lastInvokeTime = time
    lastArgs = lastThis = undefined
    result = func.apply(context, args)
    return result
  }

  function cancel() {
    if (!isUndef(timerId)) {
      useFrame
        ? window.cancelAnimationFrame(timerId)
        : clearTimeout(timerId)
    }

    lastArgs = lastThis = timerId = undefined
    lastCallTime = lastInvokeTime = 0
  }

  function flush() {
    return isUndef(timerId) ? result : trailingEdge(Date.now())
  }

  function debounced(this: any, ...rest: any[]) {
    const time = Date.now()
    const isInvoking = shouldInvoke(time)

    lastThis = this
    lastArgs = rest
    lastCallTime = time

    if (isInvoking && isUndef(timerId)) {
      return leadingEdge(lastCallTime)
    }

    if (isInvoking && maxWait !== false) {
      useFrame || clearTimeout(timerId)
      useFrame && window.cancelAnimationFrame(timerId)

      useFrame && (timerId = window.requestAnimationFrame(timerExpired))
      useFrame || (timerId = setTimeout(timerExpired, remainingWait(time)))

      return invokeFunc(lastCallTime)
    }

    if (isUndef(timerId)) {
      useFrame
        ? timerId = window.requestAnimationFrame(timerExpired)
        : timerId = setTimeout(timerExpired, wait)
    }

    return result
  }

  debounced.cancel = cancel
  debounced.flush = flush

  return debounced
}

const throttle = (func: Function, wait: number, options: { leading?: boolean; trailing?: boolean } = {}) => {
  const leading = !isObject(options) || options.leading !== false
  const trailing = !isObject(options) || options.trailing !== false

  if (!isFunction(func)) {
    throw new TypeError('#<' + type(func) + '> is not a function')
  }

  return debounce(func, wait, {
    maxWait: wait,
    leading: leading,
    trailing: trailing
  })
}


export default {
  debounce,
  throttle
}
