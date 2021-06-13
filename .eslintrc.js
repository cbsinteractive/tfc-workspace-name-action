module.exports = {
  plugins: ["jest"],
  extends: ["plugin:github/recommended"],
  parserOptions: {
    ecmaVersion: 9,
  },
  rules: {},
  env: {
    node: true,
    es6: true,
    "jest/globals": true,
  },
}
