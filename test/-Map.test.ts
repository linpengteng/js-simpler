import js from '../src/-Map'


describe('Test Map', () => {
  /**
   * Test isNonEmptyMap
   */
  test('Test isNonEmptyMap when accept new Map([["TestKey", "TestValue"]])', () => {
    expect(js.isNonEmptyMap(new Map([['TestKey', 'TestValue']]))).toBeTruthy()
  })

  test('Test isNonEmptyMap when accept new Map()', () => {
    expect(js.isNonEmptyMap(new Map())).toBeFalsy()
  })

  test('Test isNonEmptyMap when accept {}', () => {
    expect(js.isNonEmptyMap({})).toBeFalsy()
  })


  /**
   * Test isEmptyMap
   */
  test('Test isEmptyMap when accept new Map([["TestKey", "TestValue"]])', () => {
    expect(js.isEmptyMap(new Map([['TestKey', 'TestValue']]))).toBeFalsy()
  })

  test('Test isEmptyMap when accept new Map()', () => {
    expect(js.isEmptyMap(new Map())).toBeTruthy()
  })

  test('Test isEmptyMap when accept {}', () => {
    expect(js.isEmptyMap({})).toBeFalsy()
  })


  /**
   * Test isMap
   */
  test('Test isMap when accept new Map([["TestKey", "TestValue"]])', () => {
    expect(js.isMap(new Map([['TestKey', 'TestValue']]))).toBeTruthy()
  })

  test('Test isMap when accept new Map()', () => {
    expect(js.isMap(new Map())).toBeTruthy()
  })

  test('Test isMap when accept {}', () => {
    expect(js.isMap({})).toBeFalsy()
  })


  /**
   * Test toMap
   */
  test('Test toMap when accept new Map([["TestKey", "TestValue"]])', () => {
    const map = new Map([['TestKey', 'TestValue']])
    expect(js.toMap(map)).toBe(map)
  })

  test('Test toMap when accept new Map()', () => {
    const map = new Map([])
    expect(js.toMap(map)).toBe(map)
  })

  test('Test toMap when accept { key: { field: {} } }', () => {
    const obj = { key: { field: {} } }
    expect(js.toMap(obj).get('key')).toBe(obj.key)
  })

  test('Test toMap when accept [["key"], [{ field: {} }]]', () => {
    const arr = [['key'], [{ field: {} }]]
    expect(js.toMap(arr).get('key')).toBe(arr[0][1])
  })

  test('Test toMap when accept new Set([{ field: {} }])', () => {
    const arr = [{ field: {} }]
    expect(js.toMap(new Set(arr)).get(0)).toBe(arr[0])
  })


  /**
   * Test newMap
   */
  test('Test newMap when accept new Map([["TestKey", "TestValue"]])', () => {
    const map = new Map([['TestKey', 'TestValue']])
    expect(js.newMap(map)).not.toBe(map)
    expect(js.newMap(map)).toEqual(map)
  })

  test('Test newMap when accept new Map()', () => {
    const map = new Map([])
    expect(js.newMap(map)).not.toBe(map)
    expect(js.newMap(map)).toEqual(map)
  })

  test('Test newMap when accept { key: { field: {} } }', () => {
    const obj = { key: { field: {} } }
    expect(js.newMap(obj).get('key')).toBe(obj.key)
  })

  test('Test newMap when accept [["key"], [{ field: {} }]]', () => {
    const arr = [['key'], [{ field: {} }]]
    expect(js.newMap(arr).get('key')).toBe(arr[0][1])
  })

  test('Test newMap when accept new Set([{ field: {} }])', () => {
    const arr = [{ field: {} }]
    expect(js.newMap(new Set(arr)).get(0)).toBe(arr[0])
  })
})
