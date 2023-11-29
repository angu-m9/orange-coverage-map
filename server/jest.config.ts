import type {Config} from 'jest';


const config: Config = {
  transform: {"^.+\\.ts?$": "ts-jest"},
  roots: ['<rootDir>/tests'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts?|js?)$',
  modulePathIgnorePatterns: ['<rootDir>/node_modules'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'html'],
  watchPathIgnorePatterns: ['node_modules',],
  preset: 'ts-jest',
  
  
}

export default config; 