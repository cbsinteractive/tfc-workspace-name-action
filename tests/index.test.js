const run = require("../src/run")
const core = require("@actions/core")
const { expect } = require("@jest/globals")

jest.mock("@actions/core")

test("some test", async () => {
  await run()
  expect(core.info).toHaveBeenCalledWith("Hello, World!")
  expect(core.setOutput).toHaveBeenCalledWith("foo", "bar")
})
