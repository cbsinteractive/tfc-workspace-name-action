const { test, expect } = require("@jest/globals")

test("some test", () => {
  const a = 1 + 2
  expect(a).toBe(3)
})
