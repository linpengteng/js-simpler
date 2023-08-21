import js from '../src/-Promise'


describe('Test Promise', () => {
  /**
   * Test isPromise
   */
  test('Test isPromise when accept Promise.resolve()', () => {
    expect(js.isPromise(Promise.resolve())).toBeTruthy()
  })

  test('Test isPromise when accept new Promise(() => {})', () => {
    expect(js.isPromise(new Promise(() => {}))).toBeTruthy()
  })

  test('Test isPromise when accept { key: "value" }', () => {
    expect(js.isPromise({ key: 'value' })).toBeFalsy()
  })


  /**
   * Test toPromise
   */
  test('Test toPromise when accept Promise.resolve()', () => {
    const promise = Promise.resolve()
    expect(js.toPromise(promise)).toBe(promise)
  })

  test('Test toPromise when accept function () { return Promise.resolve("success") }', () => {
    const func = function() { return Promise.resolve('success') }
    expect(js.toPromise(func)).resolves.toBe('success')
  })

  test('Test toPromise when accept function () { return Promise.reject("success") }', () => {
    const err = new Error('fail')
    const func = function() { return Promise.reject(err) }
    expect(js.toPromise(func)).rejects.toBe(err)
  })

  test('Test toPromise when accept 1000', () => {
    jest.useFakeTimers()
    const result = js.toPromise(1000)
    jest.advanceTimersByTime(1000)
    expect(result).resolves.toBe(undefined)
  })

  test('Test toPromise when accept -1000', () => {
    jest.useFakeTimers()
    const result = js.toPromise(-1000)
    jest.advanceTimersByTime(1000)
    expect(result).rejects.toBe(undefined)
  })

  test('Test toPromise when accept {}', () => {
    const obj = {}
    expect(js.toPromise(obj)).resolves.toBe(obj)
  })


  /**
   * Test newPromise
   */
  test('Test newPromise when accept empty', () => {
    expect(js.newPromise().promise).toBeInstanceOf(Promise)
  })
})
