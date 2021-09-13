const { expect, test } = require("@jest/globals")
const run = require("../src/run")

describe("Derives the expected feature workspace names", () => {
  const testTable = [
    {
      description:
        "Feature branch; removes dashes; converts undescores to dashes",
      getInput: {
        type: "feature",
        featureBranchName: "JIRA-12345_some-feature_with-infra",
      },
      expectedOutput: [["workspaceName", "jira12345-somefeature"]],
    },
    {
      description: "Feature branch; removes -with-infra suffix",
      getInput: {
        type: "feature",
        featureBranchName: "some-feature-with-infra",
      },
      expectedOutput: [["workspaceName", "somefeature"]],
    },
    {
      description: "Feature branch; removes with-infra- prefix",
      getInput: {
        type: "feature",
        featureBranchName: "with-infra-some-feature",
      },
      expectedOutput: [["workspaceName", "somefeature"]],
    },
    {
      description: "Feature branch; leaves embedded -with-infra- alone",
      getInput: {
        type: "feature",
        featureBranchName: "foo-with-infra-bar",
      },
      expectedOutput: [["workspaceName", "foowithinfrabar"]],
    },
    {
      description: "Feature branch; removes embedded _with-infra_ token",
      getInput: {
        type: "feature",
        featureBranchName: "foo_with-infra_bar",
      },
      expectedOutput: [["workspaceName", "foo-bar"]],
    },
    {
      description: "Feature branch prefix is supported",
      getInput: {
        type: "feature",
        featureBranchName: "this-is-a-test",
        workspacePrefix: "foo-",
      },
      expectedOutput: [["workspaceName", "foo-thisisatest"]],
    },
    {
      description: "Branch token is supported",
      getInput: {
        type: "feature",
        featureBranchName: "this-is-a-test",
        workspacePrefix: "foo-",
      },
      expectedOutput: [
        ["workspaceName", "foo-thisisatest"],
        ["branchToken", "thisisatest"],
      ],
    },
    {
      description:
        "Repo-level workspace; removes dashses from repo name; adds suffix",
      getInput: {
        type: "repo",
        repoName: "some-repo",
        suffix: "-some-suffix",
      },
      expectedOutput: [["workspaceName", "somerepo-some-suffix"]],
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
        return testConfig.getInput[inputVar] || ""
      })
      await run(core)
      if (!testConfig.errorMessage) {
        expect(core.setFailed).not.toHaveBeenCalled()
      }
      if (testConfig.expectedOutput) {
        for (let i = 0; i < testConfig.expectedOutput.length; i++) {
          expect(core.setOutput).toHaveBeenNthCalledWith(
            i + 1,
            ...testConfig.expectedOutput[i]
          )
        }
      }
    })
  })
})
