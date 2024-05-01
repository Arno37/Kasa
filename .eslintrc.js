const path = require('path');

module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [

    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  // ESlint default behavior ignores file/folders starting with "." - https://github.com/eslint/eslint/issues/10341
  ignorePatterns: ['!.*'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: [
    'prettier',
  ],
  root: true,

  settings: {
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname, 'src')],
      }
    },
  },
};