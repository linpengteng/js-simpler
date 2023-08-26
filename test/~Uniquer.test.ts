import js from '../src/~Uniquer'


describe('Test Uniquer', () => {
  /**
   * Test Uniquer
   */
  test('Test uniquer when accept empty', () => {
    expect(js.uniquer()).toMatch(/[a-z0-9]{8}-[a-z0-9]{4}-[1-5][a-z0-9]{3}-[8-b][a-z0-9]{3}-[a-z0-9]{12}/)
  })

  test('Test uniquer when accept empty Object', () => {
    expect(js.uniquer({})).toMatch(/[a-z0-9]{8}-[a-z0-9]{4}-[1-5][a-z0-9]{3}-[8-b][a-z0-9]{3}-[a-z0-9]{12}/)
  })

  test('Test uniquer when accept { radix: 4 }', () => {
    try {
      js.uniquer({ radix: 4 } as any)
    } catch (err) {
      expect(err).toEqual(new Error('#<Options.radix> is not in [2, 8, 10, 16, 26, 36]'))
    }
  })

  test('Test uniquer when accept { radix: 8 }', () => {
    expect(js.uniquer({ radix: 8 })).toMatch(/[0-8]{8}-[0-8]{4}-[1-5][0-8]{3}-[8-b][0-8]{3}-[0-8]{12}/)
  })

  test('Test uniquer when accept { radix: 26 }', () => {
    const options = { radix: 26 } as any
    expect(js.uniquer(options)).toMatch(/[a-z0-9]{8}-[a-z0-9]{4}-[1-5][a-z0-9]{3}-[8-b][a-z0-9]{3}-[a-z0-9]{12}/)
  })

  test('Test uniquer when accept { radix: 36 }', () => {
    const options = { radix: 36 } as any
    expect(js.uniquer(options)).toMatch(/[a-z0-9]{8}-[a-z0-9]{4}-[1-5][a-z0-9]{3}-[8-b][a-z0-9]{3}-[a-z0-9]{12}/)
  })

  test('Test uniquer when accept { random: "#" }', () => {
    const options = { random: '#' } as any
    expect(js.uniquer(options)).toMatch(/[a-z0-9]{8}-[a-z0-9]{4}-[1-5][a-z0-9]{3}-[8-b][a-z0-9]{3}-[a-z0-9]{12}/)
  })

  test('Test uniquer when accept { random: "-" }', () => {
    try {
      js.uniquer({ random: '-' } as any)
    } catch (err) {
      expect(err).toEqual(new Error('#<Options.random> is not in ["?", "*", "#"]'))
    }
  })

  test('Test uniquer when accept { format: "??-??" }', () => {
    const options = { format: '???-??' } as any
    expect(js.uniquer(options)).toMatch(/[a-z0-9]{2}-[a-z0-9]{2}/)
  })

  test('Test uniquer when accept { format: 123456789 }', () => {
    try {
      js.uniquer({ format: 123456789 } as any)
    } catch (err) {
      expect(err).toEqual(new Error('#<Options.format> is not string'))
    }
  })

  test('Test uniquer when accept { format: "???-[1,5,6]??-[a-b]??" }', () => {
    const options = { format: '???-[1,5,6]??-[a-b]??' } as any
    expect(js.uniquer(options)).toMatch(/[a-z0-9]{3}-[1,5,6][a-z0-9]{2}-[a,b][a-z0-9]{2}/)
  })

  test('Test uniquer when accept { usedUniques: [] }', () => {
    const options: any = { usedUniques: [] }
    expect(js.uniquer(options)).toMatch(/[a-z0-9]{8}-[a-z0-9]{4}-[1-5][a-z0-9]{3}-[8-b][a-z0-9]{3}-[a-z0-9]{12}/)
  })

  test('Test uniquer when accept { usedUniques: new Set() }', () => {
    const options: any = { usedUniques: new Set() }
    expect(js.uniquer(options)).toMatch(/[a-z0-9]{8}-[a-z0-9]{4}-[1-5][a-z0-9]{3}-[8-b][a-z0-9]{3}-[a-z0-9]{12}/)
  })

  test('Test uniquer when accept { usedUniques: ["Set-xxxxxxx"] }', () => {
    const options: any = { usedUniques: new Set(['Set-xxxxxxx']) }
    expect(js.uniquer(options)).toMatch(/[a-z0-9]{8}-[a-z0-9]{4}-[1-5][a-z0-9]{3}-[8-b][a-z0-9]{3}-[a-z0-9]{12}/)
  })

  test('Test uniquer when accept { usedUniques: ["Array-xxxxxxx"] }', () => {
    const options: any = { usedUniques: ['Array-xxxxxxx'] }
    expect(js.uniquer(options)).toMatch(/[a-z0-9]{8}-[a-z0-9]{4}-[1-5][a-z0-9]{3}-[8-b][a-z0-9]{3}-[a-z0-9]{12}/)
  })

  test('Test uniquer when accept { onlyUpdate: true, usedUniques: ["Set-xxxxxxx"] }', () => {
    const options: any = { onlyUpdate: true, usedUniques: new Set(['Set-xxxxxxx']) }
    expect(js.uniquer(options)).toBe('')
  })

  test('Test uniquer when accept { onlyUpdate: true, usedUniques: ["Array-xxxxxxx"] }', () => {
    const options: any = { onlyUpdate: true, usedUniques: ['Array-xxxxxxx'] }
    expect(js.uniquer(options)).toBe('')
  })

  test('Test uniquer when accept { onlyUpdate: false, usedUniques: ["Set-xxxxxxx"] }', () => {
    const options: any = { onlyUpdate: false, usedUniques: new Set(['Set-xxxxxxx']) }
    expect(js.uniquer(options)).toMatch(/[a-z0-9]{8}-[a-z0-9]{4}-[1-5][a-z0-9]{3}-[8-b][a-z0-9]{3}-[a-z0-9]{12}/)
  })

  test('Test uniquer when accept { onlyUpdate: false, usedUniques: ["Array-xxxxxxx"] }', () => {
    const options: any = { onlyUpdate: false, usedUniques: ['Array-xxxxxxx'] }
    expect(js.uniquer(options)).toMatch(/[a-z0-9]{8}-[a-z0-9]{4}-[1-5][a-z0-9]{3}-[8-b][a-z0-9]{3}-[a-z0-9]{12}/)
  })

  test('Test uniquer when accept { listenCacherHandler: Function }', () => {
    const options: any = { usedUniques: ['Array-xxxxxxx'], listenCacherHandler: jest.fn() }
    expect(js.uniquer(options)).toMatch(/[a-z0-9]{8}-[a-z0-9]{4}-[1-5][a-z0-9]{3}-[8-b][a-z0-9]{3}-[a-z0-9]{12}/)
  })

  test('Test uniquer when accept { reduplicateHandler: Function }', () => {
    try {
      const options: any = {
        format: '[1-2]',
        reduplicateExit: false,
        reduplicateHandler: jest.fn()
      }
      js.uniquer(options)
      js.uniquer(options)
      js.uniquer(options)
      js.uniquer(options)
    } catch (err) {
      expect(err).toEqual(new Error('[Uniquer generate unique] is Reduplicated'))
    }
  })

  test('Test uniquer when accept { reduplicateExit: true }', () => {
    try {
      const options: any = {
        format: '[2-3]',
        reduplicateExit: true
      }
      js.uniquer(options)
      js.uniquer(options)
      js.uniquer(options)
      js.uniquer(options)
    } catch (err) {
      expect(err).toEqual(new Error('[Uniquer generate unique] is Reduplicated'))
    }
  })
})
