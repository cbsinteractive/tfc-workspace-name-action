module.exports = {
  normalize: (branchName) => {
    // Remove "ref/heads/" if it was given
    branchName = branchName.replace("refs/heads/", "")
    const branchToken = branchName
      .replace(/^with[-_]?infra[-_]?/i, "")
      .replace(/[-_]?with[-_]?infra$/i, "")
      .replace(/\//, "")
      .split("_")
      .map(require("./token").normalize)
      .filter((token) => {
        return token !== "withinfra"
      })
      .join("-")
    return { branchName, branchToken }
  },
}
