import js from '../src/-Error'


describe('Test Error', () => {
  /**
   * Test isError
   * Test isURIError
   * Test isTypeError
   * Test isEvalError
   * Test isRangeError
   * Test isSyntaxError
   * Test isReferenceError
   * Test isCustomizeError
   */
  test('Test isError when accept new Error()', () => {
    expect(js.isError(new Error())).toBeTruthy()
  })

  test('Test isURIError when accept new URIError()', () => {
    expect(js.isURIError(new URIError())).toBeTruthy()
  })

  test('Test isTypeError when accept new TypeError()', () => {
    expect(js.isTypeError(new TypeError())).toBeTruthy()
  })

  test('Test isEvalError when accept new EvalError()', () => {
    expect(js.isEvalError(new EvalError())).toBeTruthy()
  })

  test('Test isRangeError when accept new RangeError()', () => {
    expect(js.isRangeError(new RangeError())).toBeTruthy()
  })

  test('Test isSyntaxError when accept new SyntaxError()', () => {
    expect(js.isSyntaxError(new SyntaxError())).toBeTruthy()
  })

  test('Test isReferenceError when accept new ReferenceError()', () => {
    expect(js.isReferenceError(new ReferenceError())).toBeTruthy()
  })

  test('Test isCustomizeError when accept newCustomizeError()', () => {
    expect(js.isCustomizeError(js.newCustomizeError())).toBeTruthy()
  })

  test('Test isCustomizeError when accept newCustomizeError(), Symbol()', () => {
    expect(js.isCustomizeError(js.newCustomizeError(), Symbol())).toBeFalsy()
  })


  /**
   * Test newError
   * Test newURIError
   * Test newTypeError
   * Test newEvalError
   * Test newRangeError
   * Test newSyntaxError
   * Test newReferenceError
   * Test newCustomizeError
   */
  test('Test newError when accept empty', () => {
    expect(js.newError()).toBeInstanceOf(Error)
  })

  test('Test newURIError when accept empty', () => {
    expect(js.newURIError()).toBeInstanceOf(URIError)
  })

  test('Test newTypeError when accept empty', () => {
    expect(js.newTypeError()).toBeInstanceOf(TypeError)
  })

  test('Test newEvalError when accept empty', () => {
    expect(js.newEvalError()).toBeInstanceOf(EvalError)
  })

  test('Test newRangeError when accept empty', () => {
    expect(js.newRangeError()).toBeInstanceOf(RangeError)
  })

  test('Test newSyntaxError when accept empty', () => {
    expect(js.newSyntaxError()).toBeInstanceOf(SyntaxError)
  })

  test('Test newReferenceError when accept empty', () => {
    expect(js.newReferenceError()).toBeInstanceOf(ReferenceError)
  })

  test('Test newCustomizeError when accept empty', () => {
    expect(js.isCustomizeError(js.newCustomizeError())).toBeTruthy()
  })

  test('Test newCustomizeError when accept "message"', () => {
    expect(js.isCustomizeError(js.newCustomizeError('message'))).toBeTruthy()
  })

  test('Test newCustomizeError when accept { name: "Test", type: Symbol("Test Message") }', () => {
    const messager = { name: 'Test', type: Symbol('Test Message') }
    expect(js.isCustomizeError(js.newCustomizeError(messager))).toBeTruthy()
  })

  test('Test newCustomizeError when accept { message: "Test Message", stack: "", options: {} }', () => {
    const messager = { message: 'Test Message', stack: '', options: {} }
    expect(js.isCustomizeError(js.newCustomizeError(messager))).toBeTruthy()
  })
})
