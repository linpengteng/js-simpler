import { isFunction } from './-Function'
import { isArray } from './-Array'
import { isSet } from './-Set'


export type UniquerOptions = {
  radix?: 2 | 8 | 10 | 16 | 26 | 36;
  format?: string | null;
  random?: '?' | '*' | '#';
  usedUniques?: Array<string> | Set<string> | null;
  listenCacherHandler?: ListenCacherHandler | null;
  reduplicateHandler?: ReduplicateHandler | null;
  reduplicateExit?: boolean | null;
  onlyUpdate?: boolean | null;
}

export type RandomizeOptions = {
  bytes: string[];
  max: number;
  min: number;
}

export type CacherOptions = Set<string>
export type ListenCacherHandler = (options: CacherOptions) => void;
export type ReduplicateHandler = (options: UniquerOptions) => UniquerOptions;
export type Randomize = (options: RandomizeOptions) => string;
export type Uniquer = (options?: UniquerOptions) => string;


/**
 * Cacher
 */
const Cacher: CacherOptions = new Set([''])


/**
 * Uniquer
 */
export const uniquer: Uniquer = (options = {}) => {
  const onlyUpdate = options.onlyUpdate === true
  const usedUniques = isArray(options.usedUniques) || isSet(options.usedUniques) ? options.usedUniques : []
  const isExitOnRegenerate = options.reduplicateExit !== false || !isFunction(options.reduplicateHandler)
  const listenCacherHandler = isFunction(options.listenCacherHandler) ? options.listenCacherHandler : (_: CacherOptions) => {}
  const reduplicateHandler = isFunction(options.reduplicateHandler) ? options.reduplicateHandler : undefined

  const radix = options.radix !== undefined ? options.radix : 16
  const random = options.random !== undefined ? options.random : '?'
  const format = options.format !== undefined ? options.format : ('????????-????-[1-5]???-[8-b]???-????????????').replace(/\?/g, random)

  if (![2, 8, 10, 16, 26, 36].includes(radix)) {
    throw new Error('#<Options.radix> is not in [2, 8, 10, 16, 26, 36]')
  }

  if (!['?', '*', '#'].includes(random)) {
    throw new Error('#<Options.random> is not in ["?", "*", "#"]')
  }

  if (String(format) !== format) {
    throw new Error('#<Options.format> is not string')
  }

  if (usedUniques instanceof Array) {
    usedUniques.forEach(key => typeof key === 'string' && Cacher.add(key.trim()))
    listenCacherHandler(new Set(Cacher))
  }

  if (usedUniques instanceof Set) {
    usedUniques.forEach(key => typeof key === 'string' && Cacher.add(key.trim()))
    listenCacherHandler(new Set(Cacher))
  }

  if (onlyUpdate === true) {
    return ''
  }

  let unique = ''
  let tryCount = 10
  let regenerate = true
  const byteOffset = radix === 26 ? 10 : 0
  const characters = Array.from({ length: 36 }, (_, key) => key.toString(36))
  const appendCacher = Cacher.add.bind(Cacher)

  const randomizer: Randomize = opt => {
    const min = opt.min
    const max = opt.max
    const bytes = opt.bytes
    return bytes[Math.random() * (max - min + 1) + min | 0]
  }

  while (regenerate && tryCount-- > 0) {
    const template = format.replace(/\[([^\]]+?)\]/g, (_, group: string) => {
      const caches: Set<string> = new Set()
      const append = caches.add.bind(caches)
      const splits = group.toLowerCase().split(/\s*,\s*/g)
      const filters = splits.filter(str => /^[a-zA-Z0-9\s/|\-*?#=:;]+$/ui.test(str))
      const isRange = (str: string) => /^\s*[a-zA-Z0-9]\s*-\s*[a-zA-Z0-9]\s*$/.test(str)

      const collects = filters.reduce((caches, string) => {
        if (isRange(string.trim())) {
          const str1 = string.trim().split(/\s*-\s*/)[0]
          const str2 = string.trim().split(/\s*-\s*/)[1]
          const key1 = characters.indexOf(str1.trim())
          const key2 = characters.indexOf(str2.trim())
          const first = Math.min(key1, key2)
          const second = Math.max(key1, key2) + 1
          characters.slice(first, second).forEach(append)
        }

        if (!isRange(string.trim())) {
          append(string.trim())
        }

        return caches
      }, caches)


      const temp = Array.from(collects)
      const bytes = temp.filter(every => !!every)

      return randomizer({
        bytes,
        max: bytes.length - 1,
        min: 0
      })
    })

    const min = 0
    const max = radix - 1
    const bytes = characters.slice(byteOffset)

    unique = [...template.toLowerCase()]
      .filter(str => /^[a-zA-Z0-9\s/|\-*?#=:;]+$/ui.test(str))
      .map(v => v === random ? randomizer({ bytes, max, min }) : v)
      .join('')
      .trim()

    if (!Cacher.has(unique)) {
      regenerate = false
      appendCacher(unique)
      listenCacherHandler(new Set(Cacher))
    }
  }

  if (regenerate && isExitOnRegenerate) {
    throw new Error('[Uniquer generate unique] is Reduplicated')
  }

  if (regenerate && !isExitOnRegenerate) {
    const newOptions = reduplicateHandler!(options)
    const overOptions = { reduplicateExit: true }

    return uniquer({
      ...options,
      ...newOptions,
      ...overOptions
    })
  }

  return unique
}


export default {
  uniquer
}
