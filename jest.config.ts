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
      branches: 85,
      functions: 85,
      statements: 95
    }
  },
  collectCoverageFrom: ['src/**/*.ts'],
  coverageReporters: ['html', 'json', 'text'],
  coverageDirectory: '.coverage',
  coverageProvider: 'babel',
  collectCoverage: true
}
