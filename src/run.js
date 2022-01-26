module.exports = async (core) => {
  try {
    const workspaceType = core.getInput("type")
    const workspacePrefix = core.getInput("workspacePrefix", {
      required: false,
    })
    let result
    let branchToken
    let branchName
    if (workspaceType === "feature") {
      ;({ branchToken, branchName } = require("./featurebranch").normalize(
        core.getInput("featureBranchName")
      ))
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
    if (branchName) {
      core.setOutput("branchName", branchName)
    }
  } catch (error) {
    core.setFailed(error.message)
  }
}
