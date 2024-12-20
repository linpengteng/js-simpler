import { isNullable } from './~Nullable'
import { isFiniteNumber } from './-Number'
import { isNonEmptyString } from './-String'

export const isValidDate = (date: unknown): date is Date => {
  return isDate(date) && isFiniteNumber(+date)
}

export const isDate = (date: unknown): date is Date => {
  return Object.prototype.toString.call(date) === '[object Date]'
}

export const toDate = (...rest: unknown[]): Date => {
  if (!rest.length) {
    return new Date()
  }

  if (isDate(rest[0])) {
    return rest[0] as Date
  }

  if (isNonEmptyString(rest[0])) {
    let i = 0 as number
    let year = '' as string | number
    let month = '' as string | number
    let date = '' as string | number

    const now = new Date()
    const arr = (rest[0] as string).split(/[/,-]|\s+/)

    for (const [index, number] of arr.entries()) {
      if (index === 0) {
        if (!year && /^\d{4}$/.test(number)) {
          i = index + 1
          year = number
          continue
        }

        if (/^\d{1,2}$/.test(number)) {
          i = index + 1
          month = +number - 1
        }
      }

      if (index === 1) {
        if (!month && month !== 0 && /^\d{1,2}$/.test(number)) {
          i = index + 1
          month = +number - 1
          continue
        }

        if (/^\d{1,2}$/.test(number)) {
          i = index + 1
          date = number
        }
      }

      if (index === 2) {
        if (!date && /^\d{1,2}$/.test(number)) {
          i = index + 1
          date = number
        }
        break
      }
    }

    arr.splice(0, i)

    if (!year) {
      year = now.getFullYear()
    }

    if (!month && month !== 0) {
      month = now.getMonth()
    }

    if (!date) {
      date = now.getDate()
    }

    let hour = '00'
    let minute = '00'
    let seconds = '00'
    let milliseconds = '000'

    const temp = arr.find(time => /^\d{1,2}((:\d{1,2})?(:\d{1,2}([.:]\d{1,3})?)?)?$/.test(time))
    const list = temp?.split(/[:.]/) || []

    for (const [index, number] of list.entries()) {
      if (index === 0) {
        hour = number
      }

      if (index === 1) {
        minute = number
      }

      if (index === 2) {
        seconds = number
      }

      if (index === 3) {
        milliseconds = number
      }
    }

    return new Date(+year, +month, +date, +hour, +minute, +seconds, +milliseconds)
  }

  // @ts-ignore
  return new Date(...rest)
}

export const newDate = (...rest: unknown[]): Date => {
  if (!rest.length) {
    return new Date()
  }

  if (isDate(rest[0])) {
    return new Date(+rest[0]!)
  }

  if (isNonEmptyString(rest[0])) {
    let i = 0 as number
    let year = '' as string | number
    let month = '' as string | number
    let date = '' as string | number

    const now = new Date()
    const arr = (rest[0] as string).split(/[/,-]|\s+/)

    for (const [index, number] of arr.entries()) {
      if (index === 0) {
        if (!year && /^\d{4}$/.test(number)) {
          i = index + 1
          year = number
          continue
        }

        if (/^\d{1,2}$/.test(number)) {
          i = index + 1
          month = +number - 1
        }
      }

      if (index === 1) {
        if (!month && month !== 0 && /^\d{1,2}$/.test(number)) {
          i = index + 1
          month = +number - 1
          continue
        }

        if (/^\d{1,2}$/.test(number)) {
          i = index + 1
          date = number
        }
      }

      if (index === 2) {
        if (!date && /^\d{1,2}$/.test(number)) {
          i = index + 1
          date = number
        }
        break
      }
    }

    arr.splice(0, i)

    if (!year) {
      year = now.getFullYear()
    }

    if (!month && month !== 0) {
      month = now.getMonth()
    }

    if (!date) {
      date = now.getDate()
    }

    let hour = '00'
    let minute = '00'
    let seconds = '00'
    let milliseconds = '000'

    const temp = arr.find(time => /^\d{1,2}((:\d{1,2})?(:\d{1,2}([.:]\d{1,3})?)?)?$/.test(time))
    const list = temp?.split(/[:.]/) || []

    for (const [index, number] of list.entries()) {
      if (index === 0) {
        hour = number
      }

      if (index === 1) {
        minute = number
      }

      if (index === 2) {
        seconds = number
      }

      if (index === 3) {
        milliseconds = number
      }
    }

    return new Date(+year, +month, +date, +hour, +minute, +seconds, +milliseconds)
  }

  // @ts-ignore
  return new Date(...rest)
}

export const showDate = (time: unknown, format?: string): string => {
  const date = !isDate(time)
    ? toDate(time)
    : time

  const template = isNullable(format)
    ? 'YYYY-MM-DD HH:mm:ss'
    : format

  if (isNonEmptyString(template) && isValidDate(date)) {
    return template.replace(/YYYY|MM?|DD?|HH?|mm?|ss?s?|ii?i?/gi, type => {
      switch (type) {
        case 'YYYY': return String(date.getFullYear())
        case 'yyyy': return String(date.getFullYear())
        case 'MM': return String(date.getMonth() >= 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1))
        case 'M': return String(date.getMonth() + 1)
        case 'DD': return String(date.getDate() > 9 ? date.getDate() : '0' + date.getMonth())
        case 'dd': return String(date.getDate() > 9 ? date.getDate() : '0' + date.getMonth())
        case 'D': return String(date.getDate())
        case 'd': return String(date.getDate())
        case 'HH': return String(date.getHours() > 9 ? date.getHours() : '0' + date.getHours())
        case 'hh': return String(date.getHours() > 9 ? date.getHours() : '0' + date.getHours())
        case 'H': return String(date.getHours())
        case 'h': return String(date.getHours())
        case 'mm': return String(date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes())
        case 'm': return String(date.getMinutes())
        case 'ss': return String(date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds())
        case 's': return String(date.getSeconds())
        case 'sss': return String(date.getMilliseconds() > 99 ? date.getMilliseconds() : date.getMilliseconds() > 9 ? '0' + date.getMilliseconds() : '00' + date.getMilliseconds())
        case 'iii': return String(date.getMilliseconds() > 99 ? date.getMilliseconds() : date.getMilliseconds() > 9 ? '0' + date.getMilliseconds() : '00' + date.getMilliseconds())
        case 'ii': return String(date.getMilliseconds() > 9 ? date.getMilliseconds() : '0' + date.getMilliseconds())
        case 'i': return String(date.getMilliseconds())
      }
      return type
    })
  }

  return ''
}

export const yesterday = (): Date => {
  return new Date(Date.now() - 86400000)
}

export const tomorrow = (): Date => {
  return new Date(Date.now() + 86400000)
}

export const today = (): Date => {
  return new Date()
}

export default {
  isValidDate,
  isDate,
  toDate,
  newDate,
  showDate,
  yesterday,
  tomorrow,
  today,
}
