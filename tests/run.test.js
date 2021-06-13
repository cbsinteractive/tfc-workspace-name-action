const { expect, test } = require("@jest/globals")
const run = require("../src/run")

describe("feature branch", () => {
  const testTable = [
    {
      description: "foo",
      getInput: {
        variableName: "some-variable",
        type: "feature",
        featureBranchName: "JIRA-12345_some-feature_with-infra",
      },
      expectedOutput: ["some-variable", "jira12345-somefeature"],
    },
    {
      description: "bar",
      getInput: {
        variableName: "some-variable",
        type: "repo",
        repoName: "some-repo",
        suffix: "-some-suffix",
      },
      expectedOutput: ["some-variable", "somerepo-some-suffix"],
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
})
