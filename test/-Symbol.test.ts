import js from '../src/-Symbol'


describe('Test Symbol', () => {
  /**
   * Test isSymbol
   */
  test('Test isSymbol when accept "symbol"', () => {
    expect(js.isSymbol('symbol')).toBeFalsy()
  })

  test('Test isSymbol when accept "123456"', () => {
    expect(js.isSymbol('123456')).toBeFalsy()
  })

  test('Test isSymbol when accept Symbol()', () => {
    expect(js.isSymbol(Symbol())).toBeTruthy()
  })

  test('Test isSymbol when accept Symbol.for("symbol")', () => {
    expect(js.isSymbol(Symbol.for('symbol'))).toBeTruthy()
  })


  /**
   * Test toSymbol
   */
  test('Test toSymbol when accept Symbol()', () => {
    const symbol = Symbol()
    expect(js.toSymbol(symbol)).toBe(symbol)
  })

  test('Test toSymbol when accept "123456"', () => {
    expect(js.toSymbol('123456')).not.toBe(Symbol('123456'))
  })

  test('Test toSymbol when accept undefined', () => {
    expect(js.toSymbol(undefined)).not.toBe(Symbol(undefined))
  })


  /**
   * Test newSymbol
   */
  test('Test newSymbol when accept Symbol()', () => {
    const symbol = Symbol()
    expect(js.newSymbol(symbol)).not.toBe(symbol)
  })

  test('Test newSymbol when accept "123456"', () => {
    expect(js.newSymbol('123456')).not.toBe(Symbol('123456'))
  })

  test('Test newSymbol when accept undefined', () => {
    expect(js.newSymbol(undefined)).not.toBe(Symbol(undefined))
  })


  /**
   * Test toSymbolFor
   */
  test('Test toSymbolFor when accept Symbol()', () => {
    const symbol = Symbol()
    expect(js.toSymbolFor(symbol)).not.toBe(symbol)
  })

  test('Test toSymbolFor when accept Symbol.for("undefined")', () => {
    const symbol = Symbol.for('undefined')
    expect(js.toSymbolFor(symbol)).toBe(symbol)
  })

  test('Test toSymbolFor when accept Symbol.for("123456")', () => {
    expect(js.toSymbolFor(Symbol.for('123456'))).toBe(Symbol.for('123456'))
  })

  test('Test toSymbolFor when accept undefined', () => {
    expect(js.toSymbolFor(undefined)).toBe(Symbol.for(''))
  })

  test('Test toSymbolFor when accept "undefined"', () => {
    expect(js.toSymbolFor('undefined')).toBe(Symbol.for('undefined'))
  })


  /**
   * Test newSymbolFor
   */
  test('Test newSymbolFor when accept Symbol()', () => {
    const symbol = Symbol()
    expect(js.newSymbolFor(symbol)).not.toBe(symbol)
  })

  test('Test newSymbolFor when accept Symbol.for("undefined")', () => {
    const symbol = Symbol.for('undefined')
    expect(js.newSymbolFor(symbol)).toBe(symbol)
  })

  test('Test newSymbolFor when accept Symbol.for("123456")', () => {
    expect(js.newSymbolFor(Symbol.for('123456'))).toBe(Symbol.for('123456'))
  })

  test('Test newSymbolFor when accept undefined', () => {
    expect(js.newSymbolFor(undefined)).toBe(Symbol.for(''))
  })

  test('Test newSymbolFor when accept "undefined"', () => {
    expect(js.newSymbolFor('undefined')).toBe(Symbol.for('undefined'))
  })
})
