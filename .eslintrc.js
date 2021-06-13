module.exports = {
  plugins: ["jest"],
  extends: ["plugin:github/recommended"],
  parserOptions: {
    ecmaVersion: 9,
  },
  rules: {
    "no-console": "off",
  },
  env: {
    node: true,
    es6: true,
    "jest/globals": true,
  },
}
