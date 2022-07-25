export default {
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ["/node_modules/"],
  coverageProvider: "v8",
  bail: true,
  preset: "ts-jest",
  testMatch: ["**/*.spec.ts"],
};
