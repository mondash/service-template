import { Config } from "@jest/types";
import { pathsToModuleNameMapper } from "ts-jest/utils";
import { compilerOptions } from "./tsconfig.json";

const moduleNameMapper = pathsToModuleNameMapper(compilerOptions.paths, {
  prefix: "<rootDir>/src/",
});

console.log({ moduleNameMapper });

const config: Config.InitialOptions = {
  preset: "ts-jest",
  setupFiles: ["./jest.setup.ts"],
  testEnvironment: "node",
  testPathIgnorePatterns: ["<rootDir>/node_modules", "<rootDir>/build"],
  verbose: true,

  moduleNameMapper,
  modulePaths: ["<rootDir>/src/"],

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
