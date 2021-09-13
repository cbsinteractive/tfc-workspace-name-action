module.exports = async (core) => {
  try {
    const workspaceType = core.getInput("type")
    const workspacePrefix = core.getInput("workspacePrefix", {
      required: false,
    })
    let result
    let branchToken
    if (workspaceType === "feature") {
      branchToken = require("./featurebranch").normalize(
        core.getInput("featureBranchName")
      )
      result = workspacePrefix + branchToken
    } else if (workspaceType === "repo") {
      result = require("./repo").normalize(
        core.getInput("repoName"),
        core.getInput("suffix")
      )
    } else {
      throw new Error(
        `Type should be one of: feature, repo. Got ${workspaceType}`
      )
    }
    core.setOutput("workspaceName", result)
    if (branchToken) {
      core.setOutput("branchToken", branchToken)
    }
  } catch (error) {
    core.setFailed(error.message)
  }
}
