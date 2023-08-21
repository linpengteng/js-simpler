import js from '../src/-String'


describe('Test String', () => {
  /**
   * Test isNonEmptyString
   */
  test('Test isNonEmptyString when accept 123456', () => {
    expect(js.isNonEmptyString(123456)).toBeFalsy()
  })

  test('Test isNonEmptyString when accept "123456"', () => {
    expect(js.isNonEmptyString('123456')).toBeTruthy()
  })

  test('Test isNonEmptyString when accept ""', () => {
    expect(js.isNonEmptyString('')).toBeFalsy()
  })


  /**
   * Test isEmptyString
   */
  test('Test isEmptyString when accept 123456', () => {
    expect(js.isEmptyString(123456)).toBeFalsy()
  })

  test('Test isEmptyString when accept "123456"', () => {
    expect(js.isEmptyString('123456')).toBeFalsy()
  })

  test('Test isEmptyString when accept ""', () => {
    expect(js.isEmptyString('')).toBeTruthy()
  })


  /**
   * Test isString
   */
  test('Test isString when accept 123456', () => {
    expect(js.isString(123456)).toBeFalsy()
  })

  test('Test isString when accept "123456"', () => {
    expect(js.isString('123456')).toBeTruthy()
  })

  test('Test isString when accept ""', () => {
    expect(js.isString('')).toBeTruthy()
  })
})
