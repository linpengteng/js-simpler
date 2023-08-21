import js from '../src/~Nullable'


describe('Test Nullable', () => {
  /**
   * Test isNull
   */
  test('Test isNull when accept true', () => {
    expect(js.isNull(true)).toBeFalsy()
  })

  test('Test isNull when accept undefined', () => {
    expect(js.isNull(undefined)).toBeFalsy()
  })

  test('Test isNull when accept null', () => {
    expect(js.isNull(null)).toBeTruthy()
  })


  /**
   * Test isUndef
   */
  test('Test isUndef when accept true', () => {
    expect(js.isUndef(true)).toBeFalsy()
  })

  test('Test isUndef when accept null', () => {
    expect(js.isUndef(null)).toBeFalsy()
  })

  test('Test isUndef when accept undefined', () => {
    expect(js.isUndef(undefined)).toBeTruthy()
  })


  /**
   * Test isNullable
   */
  test('Test isNullable when accept true', () => {
    expect(js.isNullable(true)).toBeFalsy()
  })

  test('Test isNullable when accept null', () => {
    expect(js.isNullable(null)).toBeTruthy()
  })

  test('Test isNullable when accept undefined', () => {
    expect(js.isNullable(undefined)).toBeTruthy()
  })
})
