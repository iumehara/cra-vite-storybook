const config = {
  "preset": "ts-jest/presets/js-with-ts",
  "testEnvironment": "jest-environment-jsdom",
  "moduleNameMapper": {
    "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/jest/__mocks__/fileMock.js",
    "\\.(css|scss)$": "<rootDir>/jest/__mocks__/styleMock.js"
  },
  "modulePaths": [
    "<rootDir>/src"
  ],
  "setupFilesAfterEnv": [
    "<rootDir>/jest/setup.js"
  ]
};

module.exports = config
