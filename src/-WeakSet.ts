import { itType } from './*Customize'


export const isWeakSet = (set: unknown): set is WeakSet<any> => {
  return itType(set) === 'WeakSet'
}


export default {
  isWeakSet
}
