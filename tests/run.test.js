const { expect, test } = require("@jest/globals")
const run = require("../src/run")
// const core = require("@actions/core")
// const { expect, beforeEach, jest } = require("@jest/globals")
// const { describe } = require("yargs")

// const mockCore = jest.mock("@actions/core")

describe("feature branch", () => {
  const testTable = [
    {
      description: "foo",
      getInput: {
        variableName: "some-variable",
        type: "feature",
      },
      expectedOutput: [
        "some-variable",
        "temporary feature branch workspace value",
      ],
    },
    {
      description: "bar",
      getInput: {
        variableName: "some-variable",
        type: "repo",
      },
      expectedOutput: ["some-variable", "temporary repo workspace value"],
    },
  ]
  let core
  beforeEach(() => {
    core = jest.fn()
    core.getInput = jest.fn()
    core.setFailed = jest.fn()
    core.setOutput = jest.fn()
  })
  testTable.forEach((testConfig) => {
    test(testConfig.description, async () => {
      core.getInput.mockImplementation((inputVar) => {
        return testConfig.getInput[inputVar]
      })
      await run(core)
      if (!testConfig.errorMessage) {
        expect(core.setFailed).not.toHaveBeenCalled()
      }
      if (testConfig.expectedOutput) {
        expect(core.setOutput).toHaveBeenCalledWith(
          ...testConfig.expectedOutput
        )
      }
    })
  })
  // test("foo", async () => {
  //   const core = jest.fn()
  //   core.getInput = jest.fn(() => "feature")
  //   core.setFailed = jest.fn()
  //   core.setOutput = jest.fn()
  //   await run(core)
  //   expect(core.getInput.mock.calls[0]).toEqual(["variableName"])
  //   expect(core.setFailed).not.toHaveBeenCalled()
  //   expect(core.setOutput).toHaveBeenCalledWith("foo", "bar")
  // })
})
