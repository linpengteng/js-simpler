/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  transform: {
    '.(ts|tsx)': 'ts-jest'
  },
  testEnvironment: 'node',
  testRegex: '/test/.*\\.(test|spec)\\.(ts)$',
  moduleFileExtensions: ['js', 'ts'],
  coverageThreshold: {
    global: {
      lines: 95,
      branches: 90,
      functions: 90,
      statements: 95
    }
  },
  collectCoverageFrom: ['src/**/*.ts', '!src/**/~Animation.ts', '!src/**/~Generalize.ts', '!src/**/~Tween.ts', '!src/**/browser.ts', '!src/**/simpler.ts'],
  coverageReporters: ['html', 'json', 'text'],
  coverageDirectory: '.coverage',
  coverageProvider: 'babel',
  collectCoverage: true
}
