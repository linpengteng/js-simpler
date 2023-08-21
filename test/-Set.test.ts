import js from '../src/-Set'


describe('Test Set', () => {
  /**
   * Test isNonEmptySet
   */
  test('Test isNonEmptySet when accept "Set"', () => {
    expect(js.isNonEmptySet('Set')).toBeFalsy()
  })

  test('Test isNonEmptySet when accept new Set()', () => {
    expect(js.isNonEmptySet(new Set())).toBeFalsy()
  })

  test('Test isNonEmptySet when accept new Set(["value"])', () => {
    expect(js.isNonEmptySet(new Set(['value']))).toBeTruthy()
  })


  /**
   * Test isEmptySet
   */
  test('Test isEmptySet when accept "Set"', () => {
    expect(js.isEmptySet('Set')).toBeFalsy()
  })

  test('Test isEmptySet when accept new Set()', () => {
    expect(js.isEmptySet(new Set())).toBeTruthy()
  })

  test('Test isEmptySet when accept new Set(["value"])', () => {
    expect(js.isEmptySet(new Set(['value']))).toBeFalsy()
  })


  /**
   * Test isSet
   */
  test('Test isSet when accept "Set"', () => {
    expect(js.isSet('Set')).toBeFalsy()
  })

  test('Test isSet when accept new Set()', () => {
    expect(js.isSet(new Set())).toBeTruthy()
  })

  test('Test isSet when accept new Set(["value"])', () => {
    expect(js.isSet(new Set(['value']))).toBeTruthy()
  })


  /**
   * Test toSet
   */
  test('Test toSet when accept new Set(["set"])', () => {
    const set = new Set(['set'])
    expect(js.toSet(set)).toBe(set)
  })

  test('Test toSet when accept { key: "value" }', () => {
    const obj = { key: 'value' }
    expect(js.toSet(obj)).toEqual(new Set([['key', 'value']]))
  })

  test('Test toSet when accept ["value"]', () => {
    const arr = ['value']
    expect(js.toSet(arr)).toEqual(new Set(['value']))
  })

  test('Test toSet when accept new Map([["key", "value"]])', () => {
    const map = new Map([['key', 'value']])
    expect(js.toSet(map)).toEqual(new Set([['key', 'value']]))
  })

  test('Test toSet when accept undefined', () => {
    expect(js.toSet(undefined)).toEqual(new Set())
  })


  /**
   * Test newSet
   */
  test('Test newSet when accept new Set(["set"])', () => {
    const set = new Set(['set'])
    expect(js.newSet(set)).not.toBe(set)
    expect(js.newSet(set)).toEqual(set)
  })

  test('Test newSet when accept { key: "value" }', () => {
    const obj = { key: 'value' }
    expect(js.newSet(obj)).toEqual(new Set([['key', 'value']]))
  })

  test('Test newSet when accept ["value"]', () => {
    const arr = ['value']
    expect(js.newSet(arr)).toEqual(new Set(['value']))
  })

  test('Test newSet when accept new Map([["key", "value"]])', () => {
    const map = new Map([['key', 'value']])
    expect(js.newSet(map)).toEqual(new Set([['key', 'value']]))
  })

  test('Test newSet when accept undefined', () => {
    expect(js.newSet(undefined)).toEqual(new Set())
  })
})
