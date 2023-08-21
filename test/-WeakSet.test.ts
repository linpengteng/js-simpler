import js from '../src/-WeakSet'


describe('Test WeakSet', () => {
  /**
   * Test isWeakSet
   */
  test('Test isWeakSet when accept "WeakSet"', () => {
    expect(js.isWeakSet('WeakSet')).toBeFalsy()
  })

  test('Test isWeakSet when accept new Set()', () => {
    expect(js.isWeakSet(new WeakSet())).toBeTruthy()
  })

  test('Test isWeakSet when accept new Set([["value"]])', () => {
    expect(js.isWeakSet(new WeakSet([['value']]))).toBeTruthy()
  })


  /**
   * Test toWeakSet
   */
  test('Test toWeakSet when accept new WeakSet([])', () => {
    const set = new WeakSet([])
    expect(js.toWeakSet(set)).toBe(set)
  })

  test('Test toWeakSet when accept new WeakSet([["WeakSet"]])', () => {
    const set = new WeakSet([['WeakSet']])
    expect(js.toWeakSet(set)).toBe(set)
  })

  test('Test toWeakSet when accept { key: "value" }', () => {
    const obj = { key: 'value' }
    expect(js.toWeakSet(obj)).toBeInstanceOf(WeakSet)
  })

  test('Test toWeakSet when accept [new Set()]', () => {
    const arr = [new Set()]
    expect(js.toWeakSet(arr).has(arr[0])).toBeTruthy()
  })

  test('Test toWeakSet when accept new Map([["key", "value"]])', () => {
    const map = new Map([['key', 'value']])
    expect(js.toWeakSet(map)).toBeInstanceOf(WeakSet)
  })

  test('Test toWeakSet when accept new Set([new Set([])])', () => {
    const arr = new Set([])
    const set = new Set([arr])
    expect(js.toWeakSet(set).has(arr)).toBeTruthy()
  })

  test('Test toWeakSet when accept undefined', () => {
    expect(js.toWeakSet(undefined)).toBeInstanceOf(WeakSet)
  })


  /**
   * Test newWeakSet
   */
  test('Test newWeakSet when accept new WeakSet([])', () => {
    const set = new WeakSet([])
    expect(js.newWeakSet(set)).not.toBe(set)
  })

  test('Test newWeakSet when accept new WeakSet([["WeakSet"]])', () => {
    const set = new WeakSet([['WeakSet']])
    expect(js.newWeakSet(set)).not.toBe(set)
  })

  test('Test newWeakSet when accept { key: "value" }', () => {
    const obj = { key: 'value' }
    expect(js.newWeakSet(obj)).toBeInstanceOf(WeakSet)
  })

  test('Test newWeakSet when accept [new Set()]', () => {
    const arr = [new Set()]
    expect(js.newWeakSet(arr).has(arr[0])).toBeTruthy()
  })

  test('Test newWeakSet when accept new Map([["key", "value"]])', () => {
    const map = new Map([['key', 'value']])
    expect(js.newWeakSet(map)).toBeInstanceOf(WeakSet)
  })

  test('Test newWeakSet when accept new Set([new Set([])])', () => {
    const arr = new Set([])
    const set = new Set([arr])
    expect(js.newWeakSet(set).has(arr)).toBeTruthy()
  })

  test('Test newWeakSet when accept undefined', () => {
    expect(js.newWeakSet(undefined)).toBeInstanceOf(WeakSet)
  })
})
