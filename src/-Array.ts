export const isNonEmptyArray = (arr: unknown): arr is any[] => {
  return isArray(arr) && arr.length > 0
}

export const isEmptyArray = (arr: unknown): arr is any[] => {
  return isArray(arr) && arr.length === 0
}

export const isArray = (arr: unknown): arr is any[] => {
  return Array.isArray(arr)
}

export const toArray = (arr: unknown): any[] => {
  if (isArray(arr)) {
    return arr
  }

  try { return Array.from(arr as any) } catch {}

  return []
}


export default {
  isNonEmptyArray,
  isEmptyArray,
  isArray,
  toArray
}
