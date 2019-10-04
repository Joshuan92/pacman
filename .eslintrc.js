module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  plugins: [
    'html',
  ]
  parserOptions: {
    sourceType: 'script',
    ecmaVersion: 2018,
  },
  rules: {
    'no-console': 'off',
    'no-alert': 'off',
  },
};
