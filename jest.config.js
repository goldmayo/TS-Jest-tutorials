module.exports = {
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "json"],
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
  },
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src/"],

  testMatch: [
    "<rootDir>/**/*.test.(js|jsx|ts|tsx)",
    "<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))",
  ],
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
};
