import js from '../src/-Object'


describe('Test Object', () => {
  /**
   * Test isNonEmptyObject
   */
  test('Test isNonEmptyObject when accept []', () => {
    expect(js.isNonEmptyObject([])).toBeFalsy()
  })

  test('Test isNonEmptyObject when accept {}', () => {
    expect(js.isNonEmptyObject({})).toBeFalsy()
  })

  test('Test isNonEmptyObject when accept { key: "value" }', () => {
    expect(js.isNonEmptyObject({ key: 'value' })).toBeTruthy()
  })


  /**
   * Test isEmptyObject
   */
  test('Test isEmptyObject when accept []', () => {
    expect(js.isEmptyObject([])).toBeFalsy()
  })

  test('Test isEmptyObject when accept {}', () => {
    expect(js.isEmptyObject({})).toBeTruthy()
  })

  test('Test isEmptyObject when accept { key: "value" }', () => {
    expect(js.isEmptyObject({ key: 'value' })).toBeFalsy()
  })


  /**
   * Test isObject
   */
  test('Test isObject when accept []', () => {
    expect(js.isObject([])).toBeFalsy()
  })

  test('Test isObject when accept {}', () => {
    expect(js.isObject({})).toBeTruthy()
  })

  test('Test isObject when accept { key: "value" }', () => {
    expect(js.isObject({ key: 'value' })).toBeTruthy()
  })


  /**
   * Test toObject
   */
  test('Test toObject when accept []', () => {
    expect(js.toObject([])).toEqual({})
  })

  test('Test toObject when accept { key: "value" }', () => {
    const obj = { key: 'value' }
    expect(js.toObject(obj)).toBe(obj)
  })

  test('Test toObject when accept ["value"]', () => {
    const arr = ['value']
    expect(js.toObject(arr)).toEqual({ 0: 'value' })
  })

  test('Test toObject when accept new Set(["value"])', () => {
    const set = new Set(['value'])
    expect(js.toObject(set)).toEqual({ 0: 'value' })
  })

  test('Test toObject when accept new Map([["key", "value"]])', () => {
    const map = new Map([['key', 'value']])
    expect(js.toObject(map)).toEqual({ key: 'value' })
  })

  test('Test toObject when accept empty', () => {
    expect(js.toObject()).toEqual({})
  })


  /**
   * Test newObject
   */
  test('Test newObject when accept []', () => {
    expect(js.newObject([])).toEqual({})
  })

  test('Test newObject when accept { key: "value" }', () => {
    const obj = { key: 'value' }
    expect(js.newObject(obj)).not.toBe(obj)
    expect(js.newObject(obj)).toEqual({ key: 'value' })
  })

  test('Test newObject when accept ["value"]', () => {
    const arr = ['value']
    expect(js.newObject(arr)).toEqual({ 0: 'value' })
  })

  test('Test newObject when accept new Set(["value"])', () => {
    const set = new Set(['value'])
    expect(js.newObject(set)).toEqual({ 0: 'value' })
  })

  test('Test newObject when accept new Map([["key", "value"]])', () => {
    const map = new Map([['key', 'value']])
    expect(js.newObject(map)).toEqual({ key: 'value' })
  })

  test('Test newObject when accept empty', () => {
    expect(js.newObject()).toEqual({})
  })
})
