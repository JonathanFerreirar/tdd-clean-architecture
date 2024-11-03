module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}'
  ],
  coverageDirectoy: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$$': 'ts-jest'
  }
}