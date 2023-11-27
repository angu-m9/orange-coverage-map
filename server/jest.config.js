module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/testing/**/*.test.ts'],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
};