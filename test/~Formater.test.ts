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
   * Test hyphenate
   */
  test('Test hyphenate when accept undefined', () => {
    expect(js.hyphenate(undefined)).toBe(undefined)
  })

  test('Test hyphenate when accept undefined, true', () => {
    expect(js.hyphenate(undefined, true)).toBe(undefined)
  })

  test('Test hyphenate when accept "TextContent"', () => {
    expect(js.hyphenate('TextContent')).toBe('-text-content')
  })

  test('Test hyphenate when accept "TextContent", true', () => {
    expect(js.hyphenate('TextContent', true)).toBe('text-content')
  })

  test('Test hyphenate when accept "_text_content"', () => {
    expect(js.hyphenate('_text_content')).toBe('-text-content')
  })

  test('Test hyphenate when accept "_text_content", true', () => {
    expect(js.hyphenate('_text_content', true)).toBe('text-content')
  })

  test('Test hyphenate when accept "-text-content"', () => {
    expect(js.hyphenate('-text-content')).toBe('-text-content')
  })

  test('Test hyphenate when accept "-text-content", true', () => {
    expect(js.hyphenate('-text-content', true)).toBe('text-content')
  })


  /**
   * Test underline
   */
  test('Test underline when accept undefined', () => {
    expect(js.underline(undefined)).toBe(undefined)
  })

  test('Test underline when accept undefined, true', () => {
    expect(js.underline(undefined, true)).toBe(undefined)
  })

  test('Test underline when accept "TextContent"', () => {
    expect(js.underline('TextContent')).toBe('_text_content')
  })

  test('Test underline when accept "TextContent", true', () => {
    expect(js.underline('TextContent', true)).toBe('text_content')
  })

  test('Test underline when accept "_text_content"', () => {
    expect(js.underline('_text_content')).toBe('_text_content')
  })

  test('Test underline when accept "_text_content", true', () => {
    expect(js.underline('_text_content', true)).toBe('text_content')
  })

  test('Test underline when accept "-text-content"', () => {
    expect(js.underline('-text-content')).toBe('_text_content')
  })

  test('Test underline when accept "-text-content", true', () => {
    expect(js.underline('-text-content', true)).toBe('text_content')
  })
})
