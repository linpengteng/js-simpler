export const isNonEmptyArray = (arr: unknown): arr is any[] => {
  return isArray(arr) && arr.length > 0
}

export const isEmptyArray = (arr: unknown): arr is any[] => {
  return isArray(arr) && arr.length === 0
}

export const isArray = (arr: unknown): arr is any[] => {
  return Array.isArray(arr)
}

export const toArray = (...rest: unknown[]): any[] => {
  if (isArray(rest[0]) && rest.length === 1) {
    return rest[0]
  }

  try {
    // @ts-ignore
    return Array.from(...rest)
  } catch /* istanbul ignore next */ {
    return []
  }
}

export const newArray = (...rest: unknown[]): any[] => {
  try {
    // @ts-ignore
    return Array.from(...rest)
  } catch /* istanbul ignore next */ {
    return []
  }
}


export default {
  isNonEmptyArray,
  isEmptyArray,
  isArray,
  toArray,
  newArray
}
