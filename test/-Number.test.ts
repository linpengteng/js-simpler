import js from '../src/-Number'


describe('Test Number', () => {
  /**
   * Test isNaN
   */
  test('Test isNaN when accept NaN', () => {
    expect(js.isNaN(NaN)).toBeTruthy()
  })

  test('Test isNaN when accept "any"', () => {
    expect(js.isNaN('any')).toBeFalsy()
  })

  test('Test isNaN when accept 123456', () => {
    expect(js.isNaN(123456)).toBeFalsy()
  })


  /**
   * Test isNumber
   */
  test('Test isNumber when accept NaN', () => {
    expect(js.isNumber(NaN)).toBeTruthy()
  })

  test('Test isNumber when accept 123456', () => {
    expect(js.isNumber(123456)).toBeTruthy()
  })

  test('Test isNumber when accept 123456.789', () => {
    expect(js.isNumber(123456.789)).toBeTruthy()
  })

  test('Test isNumber when accept Infinity', () => {
    expect(js.isNumber(Infinity)).toBeTruthy()
  })

  test('Test isNumber when accept "123456"', () => {
    expect(js.isNumber('123456')).toBeFalsy()
  })


  /**
   * Test isInteger
   */
  test('Test isInteger when accept NaN', () => {
    expect(js.isInteger(NaN)).toBeFalsy()
  })

  test('Test isInteger when accept 123456', () => {
    expect(js.isInteger(123456)).toBeTruthy()
  })

  test('Test isInteger when accept 123456.789', () => {
    expect(js.isInteger(123456.789)).toBeFalsy()
  })

  test('Test isInteger when accept Infinity', () => {
    expect(js.isInteger(Infinity)).toBeFalsy()
  })

  test('Test isInteger when accept "123456"', () => {
    expect(js.isInteger('123456')).toBeFalsy()
  })


  /**
   * Test isDecimal
   */
  test('Test isDecimal when accept NaN', () => {
    expect(js.isDecimal(NaN)).toBeFalsy()
  })

  test('Test isDecimal when accept 123456', () => {
    expect(js.isDecimal(123456)).toBeTruthy()
  })

  test('Test isDecimal when accept 123456.789', () => {
    expect(js.isDecimal(123456.789)).toBeTruthy()
  })

  test('Test isDecimal when accept Infinity', () => {
    expect(js.isDecimal(Infinity)).toBeFalsy()
  })

  test('Test isDecimal when accept "123456"', () => {
    expect(js.isDecimal('123456')).toBeFalsy()
  })


  /**
   * Test isInfinity
   */
  test('Test isInfinity when accept NaN', () => {
    expect(js.isInfinity(NaN)).toBeFalsy()
  })


  test('Test isInfinity when accept 123456', () => {
    expect(js.isInfinity(123456)).toBeFalsy()
  })

  test('Test isInfinity when accept Infinity', () => {
    expect(js.isInfinity(Infinity)).toBeTruthy()
  })

  test('Test isInfinity when accept -Infinity', () => {
    expect(js.isInfinity(-Infinity)).toBeTruthy()
  })


  /**
   * Test isFiniteNumber
   */
  test('Test isFiniteNumber when accept NaN', () => {
    expect(js.isFiniteNumber(NaN)).toBeFalsy()
  })

  test('Test isFiniteNumber when accept 123456', () => {
    expect(js.isFiniteNumber(123456)).toBeTruthy()
  })

  test('Test isFiniteNumber when accept 123456.789', () => {
    expect(js.isFiniteNumber(123456.789)).toBeTruthy()
  })

  test('Test isFiniteNumber when accept Infinity', () => {
    expect(js.isFiniteNumber(Infinity)).toBeFalsy()
  })

  test('Test isFiniteNumber when accept "123456"', () => {
    expect(js.isFiniteNumber('123456')).toBeFalsy()
  })


  /**
   * Test toFiniteNumber
   */
  test('Test toFiniteNumber when accept NaN', () => {
    expect(js.toFiniteNumber(NaN)).toBe(0)
  })

  test('Test toFiniteNumber when accept 123456', () => {
    expect(js.toFiniteNumber(123456)).toBe(123456)
  })

  test('Test toFiniteNumber when accept 123456.789, 2', () => {
    expect(js.toFiniteNumber(123456.789, 2)).toBe(123456.79)
  })

  test('Test toFiniteNumber when accept Infinity', () => {
    expect(js.toFiniteNumber(Infinity)).toBe(Number.MAX_SAFE_INTEGER)
  })

  test('Test toFiniteNumber when accept -Infinity', () => {
    expect(js.toFiniteNumber(-Infinity)).toBe(-Number.MAX_SAFE_INTEGER)
  })

  test('Test toFiniteNumber when accept "123456"', () => {
    expect(js.toFiniteNumber('123456')).toBe(123456)
  })

  test('Test toFiniteNumber when accept "number"', () => {
    expect(js.toFiniteNumber('number')).toBe(0)
  })


  /**
   * Test toDecimal
   */
  test('Test toDecimal when accept NaN', () => {
    expect(js.toDecimal(NaN)).toBe(0)
  })

  test('Test toDecimal when accept 123456', () => {
    expect(js.toDecimal(123456)).toBe(123456)
  })

  test('Test toDecimal when accept 123456.789, 2', () => {
    expect(js.toDecimal(123456.789, 2)).toBe(123456.79)
  })

  test('Test toDecimal when accept Infinity', () => {
    expect(js.toDecimal(Infinity)).toBe(Number.MAX_SAFE_INTEGER)
  })

  test('Test toDecimal when accept -Infinity', () => {
    expect(js.toDecimal(-Infinity)).toBe(-Number.MAX_SAFE_INTEGER)
  })

  test('Test toDecimal when accept "123456"', () => {
    expect(js.toDecimal('123456')).toBe(123456)
  })

  test('Test toDecimal when accept "number"', () => {
    expect(js.toDecimal('number')).toBe(0)
  })


  /**
   * Test toInteger
   */
  test('Test toInteger when accept NaN', () => {
    expect(js.toInteger(NaN)).toBe(0)
  })

  test('Test toInteger when accept 123456', () => {
    expect(js.toInteger(123456)).toBe(123456)
  })

  test('Test toInteger when accept 123456.789', () => {
    expect(js.toInteger(123456.789)).toBe(123456)
  })

  test('Test toInteger when accept Infinity', () => {
    expect(js.toInteger(Infinity)).toBe(Number.MAX_SAFE_INTEGER)
  })

  test('Test toInteger when accept -Infinity', () => {
    expect(js.toInteger(-Infinity)).toBe(-Number.MAX_SAFE_INTEGER)
  })

  test('Test toInteger when accept "123456"', () => {
    expect(js.toInteger('123456')).toBe(123456)
  })

  test('Test toInteger when accept "number"', () => {
    expect(js.toInteger('number')).toBe(0)
  })


  /**
   * Test toNumber
   */
  test('Test toNumber when accept NaN', () => {
    expect(js.toNumber(NaN)).toBe(NaN)
  })

  test('Test toNumber when accept 123456', () => {
    expect(js.toNumber(123456)).toBe(123456)
  })

  test('Test toNumber when accept 123456.789, 2', () => {
    expect(js.toNumber(123456.789, 2)).toBe(123456.79)
  })

  test('Test toNumber when accept Infinity', () => {
    expect(js.toNumber(Infinity)).toBe(Infinity)
  })

  test('Test toNumber when accept "123456"', () => {
    expect(js.toNumber('123456')).toBe(123456)
  })

  test('Test toNumber when accept "number"', () => {
    expect(js.toNumber('number')).toBe(NaN)
  })


  /**
   * Test toFixed
   */
  test('Test toFixed when accept NaN', () => {
    expect(js.toFixed(NaN)).toBe('')
  })

  test('Test toFixed when accept 123456', () => {
    expect(js.toFixed(123456)).toBe('123456')
  })

  test('Test toFixed when accept 123456, 3', () => {
    expect(js.toFixed(123456, 3)).toBe('123456.000')
  })

  test('Test toFixed when accept 123456.789, 2', () => {
    expect(js.toFixed(123456.789, 2)).toBe('123456.79')
  })

  test('Test toFixed when accept 123456.789, 4', () => {
    expect(js.toFixed(123456.789, 4)).toBe('123456.7890')
  })

  test('Test toFixed when accept Infinity', () => {
    expect(js.toFixed(Infinity)).toBe('Infinity')
  })

  test('Test toFixed when accept -Infinity', () => {
    expect(js.toFixed(-Infinity)).toBe('-Infinity')
  })

  test('Test toFixed when accept "123456"', () => {
    expect(js.toFixed('123456')).toBe('123456')
  })

  test('Test toFixed when accept "number"', () => {
    expect(js.toFixed('number')).toBe('')
  })
})
