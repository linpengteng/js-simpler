export const isTrue = (bool: unknown): bool is true => {
  return bool === true
}

export const isFalse = (bool: unknown): bool is false => {
  return bool === false
}

export const isBoolean = (bool: unknown): bool is boolean => {
  return bool === true || bool === false
}

export default {
  isTrue,
  isFalse,
  isBoolean,
}
