// eslint-disable-next-line @typescript-eslint/no-var-requires
import { pathsToModuleNameMapper } from 'ts-jest';
// eslint-disable-next-line @typescript-eslint/no-var-requires, import/extensions
import { compilerOptions } from './tsconfig.json';

const moduleNameMapper = pathsToModuleNameMapper(compilerOptions.paths, {
  prefix: '<rootDir>',
});
console.log(`moduleNameMapper: `, moduleNameMapper);

module.exports = {
  // [...]
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '', // 这里如果是src
  testRegex: '.*\\.(t|j)s$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: './coverage',
  testEnvironment: 'node',

  roots: ['<rootDir>'],
  modulePaths: [compilerOptions.baseUrl], // <-- This will be set to 'baseUrl' value
  moduleNameMapper,
  globals: {
    'ts-jest': {
      // isolatedModules: true 能优化test从200s减到10秒
      // https://huafu.github.io/ts-jest/user/config/isolatedModules
      isolatedModules: true,
    },
  },
};
