import js from '../src/~Currylize'


describe('Test Currylize', () => {
  /**
   * Test curry
   */
  test('Test curry has throw error', () => {
    expect(js.curry).toThrow('#<fn> is not a function')
  })

  test('Test curry when accept (x, y, z) => x * y - y * m - n', () => {
    const fn = (x: number, y: number, m: number, n: number) => x * y - y * m - n
    expect(js.curry(fn)(js.curry, 20)(js.curry, js.curry, 5)(30, 10)).toBe(395)
    expect(js.curry(fn)(js.curry, js.curry, 10)(js.curry, 20)(30, 5)).toBe(395)
    expect(js.curry(fn)(js.curry, js.curry, 10)(30, 20)(5)).toBe(395)
  })

  test('Test curry when accept (x, y, z) => x * y - y * m - n, 4', () => {
    const fn = (x: number, y: number, m: number, n: number) => x * y - y * m - n
    expect(js.curry(fn, 4)(30, 20, 10, 5)).toBe(395)
  })
})
