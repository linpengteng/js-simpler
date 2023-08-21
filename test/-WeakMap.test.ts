import js from '../src/-WeakMap'


describe('Test WeakMap', () => {
  /**
   * Test isWeakMap
   */
  test('Test isWeakMap when accept new WeakMap([[["TestKey"], ["TestValue"]]])', () => {
    expect(js.isWeakMap(new WeakMap([[['TestKey'], ['TestValue']]]))).toBeTruthy()
  })

  test('Test isWeakMap when accept new WeakMap()', () => {
    expect(js.isWeakMap(new WeakMap())).toBeTruthy()
  })

  test('Test isNonEmptyMap when accept {}', () => {
    expect(js.isWeakMap({})).toBeFalsy()
  })


  /**
   * Test toWeakMap
   */
  test('Test toWeakMap when accept new WeakMap([[["TestKey"], ["TestValue"]]])', () => {
    const map = new WeakMap([[['TestKey'], ['TestValue']]])
    expect(js.toWeakMap(map)).toBe(map)
  })

  test('Test toWeakMap when accept new WeakMap()', () => {
    const map = new WeakMap([])
    expect(js.toWeakMap(map)).toBe(map)
  })

  test('Test toWeakMap when accept [[new Set(["TestKey"]), ["TestValue"]]]', () => {
    const key = new Set(['TestKey'])
    const obj = ['TestValue']
    const arr = [[key, obj]]
    expect(js.toWeakMap(arr).get(key)).toBe(obj)
  })

  test('Test toWeakMap when accept new Map([[new Set(["TestKey"]), ["TestValue"]]])', () => {
    const key = new Set(['TestKey'])
    const obj = ['TestValue']
    const map = new Map([[key, obj]])
    expect(js.toWeakMap(map).get(key)).toBe(obj)
  })

  test('Test toWeakMap when accept undefined', () => {
    expect(js.toWeakMap(undefined)).toBeInstanceOf(WeakMap)
  })


  /**
   * Test newWeakMap
   */
  test('Test newWeakMap when accept new WeakMap([[["TestKey"], ["TestValue"]]])', () => {
    const map = new WeakMap([[['TestKey'], ['TestValue']]])
    expect(js.newWeakMap(map)).not.toBe(map)
  })

  test('Test newWeakMap when accept new WeakMap()', () => {
    const map = new WeakMap([])
    expect(js.newWeakMap(map)).not.toBe(map)
  })

  test('Test newWeakMap when accept [[new Set(["TestKey"]), ["TestValue"]]]', () => {
    const key = new Set(['TestKey'])
    const obj = ['TestValue']
    const arr = [[key, obj]]
    expect(js.newWeakMap(arr).get(key)).toBe(obj)
  })

  test('Test newWeakMap when accept new Map([[new Set(["TestKey"]), ["TestValue"]]])', () => {
    const key = new Set(['TestKey'])
    const obj = ['TestValue']
    const map = new Map([[key, obj]])
    expect(js.newWeakMap(map).get(key)).toBe(obj)
  })

  test('Test newWeakMap when accept undefined', () => {
    expect(js.newWeakMap(undefined)).toBeInstanceOf(WeakMap)
  })
})
