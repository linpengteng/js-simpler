/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  transform: {
    '.(ts|tsx)': 'ts-jest',
  },
  testEnvironment: 'jest-environment-jsdom',
  testRegex: '/test/.*\\.(test|spec)\\.(ts)$',
  moduleFileExtensions: ['js', 'ts'],
  coverageThreshold: {
    global: {
      lines: 95,
      branches: 95,
      functions: 95,
      statements: 95,
    },
  },
  collectCoverageFrom: ['src/**/*.ts', '!src/**/~Animater.ts', '!src/**/~Tween.ts', '!src/**/browser.ts', '!src/**/simpler.ts'],
  coverageReporters: ['html', 'json', 'text'],
  coverageDirectory: '.coverage',
  coverageProvider: 'babel',
  collectCoverage: true,
}
