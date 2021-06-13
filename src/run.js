module.exports = async (core) => {
  try {
    const workspaceType = core.getInput("type")
    let result
    if (workspaceType === "feature") {
      result = require("./featurebranch").normalize(
        core.getInput("featureBranchName")
      )
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
  } catch (error) {
    core.setFailed(error.message)
  }
}
