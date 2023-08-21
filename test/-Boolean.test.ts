import js from '../src/-Boolean'


describe('Test Boolean', () => {
  /**
   * Test isTrue
   */
  test('Test isTrue when accept true', () => {
    expect(js.isTrue(true)).toBeTruthy()
  })

  test('Test isTrue when accept false', () => {
    expect(js.isTrue(false)).toBeFalsy()
  })

  test('Test isTrue when accept []', () => {
    expect(js.isTrue([])).toBeFalsy()
  })


  /**
   * Test isFalse
   */
  test('Test isFalse when accept true', () => {
    expect(js.isFalse(false)).toBeTruthy()
  })

  test('Test isFalse when accept false', () => {
    expect(js.isFalse(true)).toBeFalsy()
  })

  test('Test isFalse when accept []', () => {
    expect(js.isFalse([])).toBeFalsy()
  })


  /**
   * Test isBoolean
   */
  test('Test isBoolean when accept true', () => {
    expect(js.isBoolean(true)).toBeTruthy()
  })

  test('Test isBoolean when accept false', () => {
    expect(js.isBoolean(false)).toBeTruthy()
  })

  test('Test isBoolean when accept []', () => {
    expect(js.isBoolean([])).toBeFalsy()
  })
})
