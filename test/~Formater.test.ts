import js from '../src/~Formater'


describe('Test Formater', () => {
  /**
   * Test lowerCase
   */
  test('Test lowerCase when accept undefined', () => {
    expect(js.lowerCase(undefined)).toBe(undefined)
  })

  test('Test lowerCase when accept "Text_Content"', () => {
    expect(js.lowerCase('Text_Content')).toBe('text_content')
  })

  test('Test lowerCase when accept "text_content"', () => {
    expect(js.lowerCase('text_content')).toBe('text_content')
  })


  /**
   * Test upperCase
   */
  test('Test upperCase when accept undefined', () => {
    expect(js.upperCase(undefined)).toBe(undefined)
  })

  test('Test upperCase when accept "Text_Content"', () => {
    expect(js.upperCase('Text_Content')).toBe('TEXT_CONTENT')
  })

  test('Test upperCase when accept "text_content"', () => {
    expect(js.upperCase('text_content')).toBe('TEXT_CONTENT')
  })


  /**
   * Test camelCase
   */
  test('Test camelCase when accept undefined', () => {
    expect(js.camelCase(undefined)).toBe(undefined)
  })

  test('Test camelCase when accept undefined, true', () => {
    expect(js.camelCase(undefined, true)).toBe(undefined)
  })

  test('Test camelCase when accept "text_content"', () => {
    expect(js.camelCase('text_content')).toBe('textContent')
  })

  test('Test camelCase when accept "text_content", true', () => {
    expect(js.camelCase('text_content', true)).toBe('TextContent')
  })

  test('Test camelCase when accept "_text_content"', () => {
    expect(js.camelCase('_text_content')).toBe('TextContent')
  })

  test('Test camelCase when accept "-text-content"', () => {
    expect(js.camelCase('-text-content')).toBe('TextContent')
  })


  /**
   * Test underCase
   */
  test('Test underCase when accept undefined', () => {
    expect(js.underCase(undefined)).toBe(undefined)
  })

  test('Test underCase when accept undefined, true', () => {
    expect(js.underCase(undefined, true)).toBe(undefined)
  })

  test('Test underCase when accept "TextContent"', () => {
    expect(js.underCase('TextContent')).toBe('_text_content')
  })

  test('Test underCase when accept "TextContent", true', () => {
    expect(js.underCase('TextContent', true)).toBe('text_content')
  })

  test('Test underCase when accept "_text_content"', () => {
    expect(js.underCase('_text_content')).toBe('_text_content')
  })

  test('Test underCase when accept "_text_content", true', () => {
    expect(js.underCase('_text_content', true)).toBe('text_content')
  })

  test('Test underCase when accept "-text-content"', () => {
    expect(js.underCase('-text-content')).toBe('_text_content')
  })

  test('Test underCase when accept "-text-content", true', () => {
    expect(js.underCase('-text-content', true)).toBe('text_content')
  })


  /**
   * Test hyphenCase
   */
  test('Test hyphenCase when accept undefined', () => {
    expect(js.hyphenCase(undefined)).toBe(undefined)
  })

  test('Test hyphenCase when accept undefined, true', () => {
    expect(js.hyphenCase(undefined, true)).toBe(undefined)
  })

  test('Test hyphenCase when accept "TextContent"', () => {
    expect(js.hyphenCase('TextContent')).toBe('-text-content')
  })

  test('Test hyphenCase when accept "TextContent", true', () => {
    expect(js.hyphenCase('TextContent', true)).toBe('text-content')
  })

  test('Test hyphenCase when accept "_text_content"', () => {
    expect(js.hyphenCase('_text_content')).toBe('-text-content')
  })

  test('Test hyphenCase when accept "_text_content", true', () => {
    expect(js.hyphenCase('_text_content', true)).toBe('text-content')
  })

  test('Test hyphenCase when accept "-text-content"', () => {
    expect(js.hyphenCase('-text-content')).toBe('-text-content')
  })

  test('Test hyphenCase when accept "-text-content", true', () => {
    expect(js.hyphenCase('-text-content', true)).toBe('text-content')
  })
})
