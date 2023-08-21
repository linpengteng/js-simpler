import js from '../src/-Function'


describe('Test Function', () => {
  /**
   * Test isGeneratorFunction
   * Test isGeneralFunction
   * Test isAsyncFunction
   */
  test('Test isGeneratorFunction when accept function* test() {}', () => {
    expect(js.isGeneratorFunction(function* test() {})).toBeTruthy()
  })

  test('Test isGeneralFunction when accept function test() {}', () => {
    expect(js.isGeneralFunction(function test() {})).toBeTruthy()
  })

  test('Test isAsyncFunction when accept async function test() {}', () => {
    expect(js.isAsyncFunction(async function test() {})).toBeTruthy()
  })


  /**
   * Test isFunction
   */
  test('Test isFunction when accept function* test() {}', () => {
    expect(js.isFunction(function* test() {})).toBeTruthy()
  })

  test('Test isFunction when accept function test() {}', () => {
    expect(js.isFunction(function test() {})).toBeTruthy()
  })

  test('Test isFunction when accept async function test() {}', () => {
    expect(js.isFunction(async function test() {})).toBeTruthy()
  })


  /**
   * Test toFunction
   */
  test('Test toFunction when accept function test() {}', () => {
    const test = function() {}
    expect(js.toFunction(test)).toBe(test)
  })

  test('Test toFunction when accept "return value"', () => {
    expect(js.toFunction('x', 'y', 'return x + y')(10, 20)).toBe(30)
  })

  test('Test toFunction when accept Symbol()', () => {
    expect(js.toFunction(Symbol())).toBeInstanceOf(Function)
  })
})
