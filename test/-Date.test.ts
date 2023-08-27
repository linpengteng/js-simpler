import js from '../src/-Date'


describe('Test Date', () => {
  /**
   * Test isValidDate
   */
  test('Test isValidDate when accept new Date()', () => {
    expect(js.isValidDate(new Date())).toBeTruthy()
  })

  test('Test isValidDate when accept new Date(NaN)', () => {
    expect(js.isValidDate(new Date(NaN))).toBeFalsy()
  })

  test('Test isValidDate when accept null', () => {
    expect(js.isValidDate(null)).toBeFalsy()
  })


  /**
   * Test isDate
   */
  test('Test isDate when accept new Date()', () => {
    expect(js.isDate(new Date())).toBeTruthy()
  })

  test('Test isDate when accept new Date(NaN)', () => {
    expect(js.isDate(new Date(NaN))).toBeTruthy()
  })

  test('Test isDate when accept null', () => {
    expect(js.isDate(null)).toBeFalsy()
  })


  /**
   * Test toDate
   */
  test('Test toDate when accept empty', () => {
    expect(js.toDate()).toBeInstanceOf(Date)
  })

  test('Test toDate when accept new Date()', () => {
    const date = new Date()
    expect(js.toDate(date)).toBe(date)
  })

  test('Test toDate when accept 2023, 7, 18', () => {
    expect(js.toDate(2023, 7, 18)).toEqual(new Date(1692288000000))
  })

  test('Test toDate when accept 1692288000000', () => {
    expect(js.toDate(1692288000000)).toEqual(new Date(1692288000000))
  })

  test('Test toDate when accept "2023/01/18 12:12:30.660"', () => {
    expect(js.toDate('2023/01/18 12:12:30.660')).toEqual(js.toDate('2023-01-18 12:12:30.660'))
  })

  test('Test toDate when accept "07/18 12:12:30.660"', () => {
    expect(js.toDate('07/18 12:12:30.660')).toEqual(js.toDate('07-18 12:12:30.660'))
  })

  test('Test toDate when accept "01/18 12:12:30.660"', () => {
    expect(js.toDate('01/18 12:12:30.660')).toEqual(js.toDate('01-18 12:12:30.660'))
  })

  test('Test toDate when accept "YYYY-MM-01 12:12:30.660"', () => {
    expect(js.toDate('YYYY-MM-01 12:12:30.660')).toEqual(js.toDate('YYYY-MM-01 12:12:30.660'))
  })

  test('Test toDate when accept "NaN"', () => {
    expect(js.toDate('NaN')).toBeInstanceOf(Date)
  })

  test('Test toDate when accept ""', () => {
    expect(js.toDate('')).toBeInstanceOf(Date)
  })


  /**
   * Test newDate
   */
  test('Test newDate when accept empty', () => {
    expect(js.newDate()).toBeInstanceOf(Date)
  })

  test('Test newDate when accept new Date()', () => {
    const oldDate = new Date()
    const newDate = new Date()
    expect(js.newDate(oldDate)).not.toBe(oldDate)
    expect(js.newDate(oldDate)).toEqual(newDate)
  })

  test('Test newDate when accept 2023, 7, 18', () => {
    expect(js.newDate(2023, 7, 18)).toEqual(new Date(1692288000000))
  })

  test('Test newDate when accept 1692288000000', () => {
    expect(js.newDate(1692288000000)).toEqual(new Date(1692288000000))
  })

  test('Test newDate when accept "2023/01/18 12:12:30.660"', () => {
    expect(js.newDate('2023/01/18 12:12:30.660')).toEqual(js.newDate('2023-01-18 12:12:30.660'))
  })

  test('Test newDate when accept "07/18 12:12:30.660"', () => {
    expect(js.newDate('07/18 12:12:30.660')).toEqual(js.newDate('07-18 12:12:30.660'))
  })

  test('Test newDate when accept "01/18 12:12:30.660"', () => {
    expect(js.newDate('01/18 12:12:30.660')).toEqual(js.newDate('01-18 12:12:30.660'))
  })

  test('Test newDate when accept "YYYY-MM-01 12:12:30.660"', () => {
    expect(js.newDate('YYYY-MM-01 12:12:30.660')).toEqual(js.toDate('YYYY-MM-01 12:12:30.660'))
  })

  test('Test newDate when accept "NaN"', () => {
    expect(js.newDate('NaN')).toBeInstanceOf(Date)
  })

  test('Test newDate when accept ""', () => {
    expect(js.newDate('')).toBeInstanceOf(Date)
  })


  /**
   * Test showDate
   */
  test('Test showDate when accept undefined, ""', () => {
    expect(js.showDate(undefined, '')).toMatch('')
  })

  test('Test showDate when accept new Date("2023")', () => {
    expect(js.showDate(new Date('2023'))).toMatch(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/)
  })

  test('Test showDate when accept new Date(), "YYYY-MM-DD"', () => {
    const date = new Date()
    const format = 'YYYY-MM-DD'

    date.setDate(8)
    date.setMonth(8)
    expect(js.showDate(date, format)).toMatch(/^\d{4}-\d{2}-\d{2}$/)

    date.setDate(10)
    date.setMonth(10)
    expect(js.showDate(date, format)).toMatch(/^\d{4}-\d{2}-\d{2}$/)
  })

  test('Test showDate when accept new Date(), "yyyy-mm-dd"', () => {
    const date = new Date()
    const format = 'YYYY-mm-dd'

    date.setDate(8)
    date.setMonth(8)
    expect(js.showDate(date, format)).toMatch(/^\d{4}-\d{2}-\d{2}$/)

    date.setDate(10)
    date.setMonth(10)
    expect(js.showDate(date, format)).toMatch(/^\d{4}-\d{2}-\d{2}$/)
  })

  test('Test showDate when accept new Date(), "YYYY-M-D"', () => {
    expect(js.showDate(new Date(), 'YYYY-M-D')).toMatch(/^\d{4}-\d{1,2}-\d{1,2}$/)
  })

  test('Test showDate when accept new Date(), "yyyy-m-d"', () => {
    expect(js.showDate(new Date(), 'yyyy-m-d')).toMatch(/^\d{4}-\d{1,2}-\d{1,2}$/)
  })

  test('Test showDate when accept new Date(), "HH:mm:ss"', () => {
    const date = new Date()
    const format = 'HH:mm:ss'

    date.setHours(8)
    date.setMinutes(8)
    date.setSeconds(8)
    expect(js.showDate(date, format)).toMatch(/^\d{2}:\d{2}:\d{2}$/)

    date.setHours(10)
    date.setMinutes(10)
    date.setSeconds(10)
    expect(js.showDate(date, format)).toMatch(/^\d{2}:\d{2}:\d{2}$/)
  })

  test('Test showDate when accept new Date(), "hh:mm:ss"', () => {
    const date = new Date()
    const format = 'hh:mm:ss'

    date.setHours(8)
    date.setMinutes(8)
    date.setSeconds(8)
    expect(js.showDate(date, format)).toMatch(/^\d{2}:\d{2}:\d{2}$/)

    date.setHours(10)
    date.setMinutes(10)
    date.setSeconds(10)
    expect(js.showDate(date, format)).toMatch(/^\d{2}:\d{2}:\d{2}$/)
  })

  test('Test showDate when accept new Date(), "H:m:s"', () => {
    expect(js.showDate(new Date(), 'H:m:s')).toMatch(/^\d{1,2}:\d{1,2}:\d{1,2}$/)
  })

  test('Test showDate when accept new Date(), "h:m:s"', () => {
    expect(js.showDate(new Date(), 'h:m:s')).toMatch(/^\d{1,2}:\d{1,2}:\d{1,2}$/)
  })

  test('Test showDate when accept new Date(), "HH:mm:ss.sss"', () => {
    const date = new Date()
    const format = 'HH:mm:ss.sss'

    date.setMilliseconds(8)
    expect(js.showDate(date, format)).toMatch(/^\d{2}:\d{2}:\d{2}\.\d{3}$/)

    date.setMilliseconds(80)
    expect(js.showDate(date, format)).toMatch(/^\d{2}:\d{2}:\d{2}\.\d{3}$/)

    date.setMilliseconds(800)
    expect(js.showDate(date, format)).toMatch(/^\d{2}:\d{2}:\d{2}\.\d{3}$/)
  })

  test('Test showDate when accept new Date(), "HH:mm:ss.iii"', () => {
    const date = new Date()
    const format = 'HH:mm:ss.iii'

    date.setMilliseconds(8)
    expect(js.showDate(date, format)).toMatch(/^\d{2}:\d{2}:\d{2}\.\d{3}$/)

    date.setMilliseconds(80)
    expect(js.showDate(date, format)).toMatch(/^\d{2}:\d{2}:\d{2}\.\d{3}$/)

    date.setMilliseconds(800)
    expect(js.showDate(date, format)).toMatch(/^\d{2}:\d{2}:\d{2}.\d{3}$/)
  })

  test('Test showDate when accept new Date(), "HH:mm:ss.ii"', () => {
    const date = new Date()
    const format = 'HH:mm:ss.ii'

    date.setMilliseconds(8)
    expect(js.showDate(date, format)).toMatch(/^\d{2}:\d{2}:\d{2}.\d{2}$/)

    date.setMilliseconds(80)
    expect(js.showDate(date, format)).toMatch(/^\d{2}:\d{2}:\d{2}.\d{2}$/)

    date.setMilliseconds(800)
    expect(js.showDate(date, format)).toMatch(/^\d{2}:\d{2}:\d{2}.\d{3}$/)
  })

  test('Test showDate when accept new Date(), "HH:mm:ss.i"', () => {
    const date = new Date()
    const format = 'HH:mm:ss.i'

    date.setMilliseconds(8)
    expect(js.showDate(date, format)).toMatch(/^\d{2}:\d{2}:\d{2}.\d{1}$/)

    date.setMilliseconds(80)
    expect(js.showDate(date, format)).toMatch(/^\d{2}:\d{2}:\d{2}.\d{2}$/)

    date.setMilliseconds(800)
    expect(js.showDate(date, format)).toMatch(/^\d{2}:\d{2}:\d{2}.\d{3}$/)
  })

  test('Test showDate when accept new Date(), "III: YYYY年MM月DD日"', () => {
    expect(js.showDate(new Date(), 'III: YYYY年MM月DD日')).toMatch(/^III: \d{4}年\d{2}月\d{2}日$/)
  })

  test('Test showDate when accept new Date(NaN), "YYYY年MM月DD日"', () => {
    expect(js.showDate(new Date(NaN), 'YYYY年MM月DD日')).toBe('')
  })


  /**
   * Test yesterday
   */
  test('Test yesterday when accept empty', () => {
    expect(js.showDate(js.yesterday(), 'YYYY-MM-DD')).toEqual(js.showDate(js.yesterday(), 'YYYY-MM-DD'))
  })


  /**
   * Test tomorrow
   */
  test('Test tomorrow when accept empty', () => {
    expect(js.showDate(js.tomorrow(), 'YYYY-MM-DD')).toEqual(js.showDate(js.tomorrow(), 'YYYY-MM-DD'))
  })


  /**
   * Test today
   */
  test('Test today when accept empty', () => {
    expect(js.showDate(js.today(), 'YYYY-MM-DD')).toEqual(js.showDate(js.today(), 'YYYY-MM-DD'))
  })
})
