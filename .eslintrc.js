module.exports = {
  root: true,
  extends: [
    'eslint-config-deloitte',
    'plugin:react/recommended'
  ],
  env: {
    browser: true,
    node: true
  },
  plugins: [
    'react'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    indent: ['error', 2]
  }
}
