// module.exports = {
//   roots: ["<rootDir>/src/basic"],
//   testMatch: ["**/__tests__/**/*.+(ts|tsx|js)", "**/?(*.)+(spec|test).+(ts|tsx|js)"],
//   transform: {
//     "^.+\\.(ts|tsx)$": "ts-jest",
//   },
//   clearMocks: true,
//   collectCoverage: false,
//   coverageDirectory: "coverage",
//   coverageProvider: "v8",
// };

module.exports = {
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "json"],
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
  },
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src/"],

  testMatch: ["**/__tests__/**/*.+(ts|tsx|js)", "**/?(*.)+(spec|test).+(ts|tsx|js)"],
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
};
