/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from 'jest';

const config: Config = {
 
  // All imported modules in your tests should be mocked automatically
 
  verbose: true,
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,


  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",

 
  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
            decorators: true,
          },
          keepClassNames: true,
          transform: {
            legacyDecorator: true,
            decoratorMetadata: true,
            react: {
              runtime: "automatic",
            },
          },
        },
        module: {
          type: "es6",
          noInterop: false,
        },
      },
    ],
  },
setupFilesAfterEnv: ['@testing-library/jest-dom'],
testEnvironment: 'jsdom',
};

export default config;
