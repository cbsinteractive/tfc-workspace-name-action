module.exports = {
  plugins: ["jest"],
  extends: ["plugin:github/recommended"],
  rules: {
    "no-console": "off",
  },
  env: {
    node: true,
    es6: true,
    "jest/globals": true,
  },
}