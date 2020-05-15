module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'import/extensions': 'off',
  },
  overrides: [
    {
      files: ['databases/**/*.{js,cjs}'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
