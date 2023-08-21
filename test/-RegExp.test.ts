import js from '../src/-RegExp'


describe('Test RegExp', () => {
  /**
   * Test isRegExp
   */
  test('Test isRegExp when accept "RegExp"', () => {
    expect(js.isRegExp('RegExp')).toBeFalsy()
  })

  test('Test isRegExp when accept /^[\\s\\S]+$/', () => {
    expect(js.isRegExp(/^[\s\S]+$/)).toBeTruthy()
  })

  test('Test isRegExp when accept /^[\\s\\S]+$/', () => {
    expect(js.isRegExp(new RegExp(''))).toBeTruthy()
  })


  /**
   * Test toRegExp
   */
  test('Test toRegExp when accept /\\w+/', () => {
    const regex = /\w+/
    expect(js.toRegExp(regex)).toBe(regex)
  })

  test('Test toRegExp when accept /\\w+/, "i"', () => {
    const regex = /\w+/
    expect(js.toRegExp(regex, 'i')).not.toBe(regex)
    expect(js.toRegExp(regex, 'i')).toEqual(/\w+/i)
  })

  test('Test toRegExp when accept "\\d"', () => {
    expect(js.toRegExp('\\d').test('123456')).toBeTruthy()
  })

  test('Test toRegExp when accept 123456', () => {
    expect(js.toRegExp(123456).test('123456')).toBeTruthy()
  })

  test('Test toRegExp when accept "\\d", "i"', () => {
    expect(js.toRegExp('\\d', 'i').test('123456')).toBeTruthy()
  })

  test('Test toRegExp when accept "\\d", true', () => {
    expect(js.toRegExp('\\d', true).test('123456')).not.toBeTruthy()
    expect(js.toRegExp('\\d', true).test('\\d')).toBeTruthy()
  })

  test('Test toRegExp when accept "\\d", "i", true', () => {
    expect(js.toRegExp('\\d', 'i', true).test('\\d')).toBeTruthy()
  })

  test('Test toRegExp when accept "\\d", true, "i"', () => {
    expect(js.toRegExp('\\d', true, 'i').test('\\d')).toBeTruthy()
  })

  test('Test toRegExp when accept empty', () => {
    expect(js.toRegExp()).toEqual(/(?:)/)
  })


  /**
   * Test newRegExp
   */
  test('Test newRegExp when accept /\\w+/', () => {
    const regex = /\w+/
    expect(js.newRegExp(regex)).not.toBe(regex)
    expect(js.newRegExp(regex)).toEqual(regex)
  })

  test('Test newRegExp when accept /\\w+/, "i"', () => {
    expect(js.newRegExp(/\w+/, 'i')).toEqual(/\w+/i)
  })

  test('Test newRegExp when accept "\\d"', () => {
    expect(js.newRegExp('\\d').test('123456')).toBeTruthy()
  })

  test('Test newRegExp when accept 123456', () => {
    expect(js.newRegExp(123456).test('123456')).toBeTruthy()
  })

  test('Test newRegExp when accept "\\d", "i"', () => {
    expect(js.newRegExp('\\d', 'i').test('123456')).toBeTruthy()
  })

  test('Test newRegExp when accept "\\d", true', () => {
    expect(js.newRegExp('\\d', true).test('123456')).not.toBeTruthy()
    expect(js.newRegExp('\\d', true).test('\\d')).toBeTruthy()
  })

  test('Test newRegExp when accept "\\d", "i", true', () => {
    expect(js.newRegExp('\\d', 'i', true).test('\\d')).toBeTruthy()
  })

  test('Test newRegExp when accept "\\d", true, "i"', () => {
    expect(js.newRegExp('\\d', true, 'i').test('\\d')).toBeTruthy()
  })

  test('Test newRegExp when accept empty', () => {
    expect(js.newRegExp()).toEqual(/(?:)/)
  })
})
