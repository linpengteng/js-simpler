import js from '../src/-Array'


describe('Test Array', () => {
  /**
   * Test isNonEmptyArray
   */
  test('Test isNonEmptyArray when accept [1,2,3]', () => {
    expect(js.isNonEmptyArray([1, 2, 3])).toBeTruthy()
  })

  test('Test isNonEmptyArray when accept []', () => {
    expect(js.isNonEmptyArray([])).toBeFalsy()
  })

  test('Test isNonEmptyArray when accept {}', () => {
    expect(js.isNonEmptyArray({})).toBeFalsy()
  })


  /**
   * Test isEmptyArray
   */
  test('Test isEmptyArray when accept [1,2,3]', () => {
    expect(js.isEmptyArray([1, 2, 3])).toBeFalsy()
  })

  test('Test isEmptyArray when accept []', () => {
    expect(js.isEmptyArray([])).toBeTruthy()
  })

  test('Test isEmptyArray when accept {}', () => {
    expect(js.isEmptyArray({})).toBeFalsy()
  })


  /**
   * Test isArray
   */
  test('Test isArray when accept []', () => {
    expect(js.isArray([])).toBeTruthy()
  })

  test('Test isArray when accept {}', () => {
    expect(js.isArray({})).toBeFalsy()
  })


  /**
   * Test toArray
   */
  test('Test toArray when accept []', () => {
    const empty: any = []
    expect(js.toArray(empty)).toBe(empty)
  })

  test('Test toArray when accept [1, 2, 3]', () => {
    const exist: any = [1, 2, 3]
    expect(js.toArray(exist)).toBe(exist)
  })

  test('Test toArray when accept { 0: "value", length: 1 }', () => {
    const object: any = { 0: 'value', length: 1 }
    expect(js.toArray(object)).toEqual(['value'])
  })

  test('Test toArray when accept 123456789', () => {
    const number: any = 123456789
    expect(js.toArray(number)).toEqual([])
  })


  /**
   * Test newArray
   */
  test('Test newArray when accept []', () => {
    const empty: any = []
    expect(js.newArray(empty)).not.toBe(empty)
    expect(js.newArray(empty)).toEqual([])
  })

  test('Test newArray when accept [1, 2, 3]', () => {
    const exist: any = [1, 2, 3]
    expect(js.newArray(exist)).not.toBe(exist)
    expect(js.newArray(exist)).toEqual([1, 2, 3])
  })

  test('Test newArray when accept { 0: "value", length: 1 }', () => {
    const object: any = { 0: 'value', length: 1 }
    expect(js.newArray(object)).toEqual(['value'])
  })

  test('Test newArray when accept 123456789', () => {
    const number: any = 123456789
    expect(js.newArray(number)).toEqual([])
  })
})
