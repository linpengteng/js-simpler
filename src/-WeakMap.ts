import { itType } from './*Customize'


export const isWeakMap = (map: unknown): map is WeakMap<any, unknown> => {
  return itType(map) === 'WeakMap'
}


export default {
  isWeakMap
}
