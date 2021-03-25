import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  setupFiles: ["./jest.setup.ts"],
  testEnvironment: "node",
  testPathIgnorePatterns: ["<rootDir>/node_modules", "<rootDir>/build"],
  verbose: true,

  moduleNameMapper: {
    "^types/(.+)": ["src/types/$1", "src/types/__generated__/$1"],
    "^lib/(.+)": ["src/lib/$1"],
    "^(.+)": ["src/$1", "$1"],
  },

  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  coveragePathIgnorePatterns: ["__generated__"],

  watchPathIgnorePatterns: ["<rootDir>/node_modules", "<rootDir>/build"],
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
};

export default config;
