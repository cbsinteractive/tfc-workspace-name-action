module.exports = {
  normalize: (branchName) => {
    return branchName
      .replace(/^with[-_]?infra[-_]?/i, "")
      .replace(/[-_]?with[-_]?infra$/i, "")
      .split("_")
      .map(require("./token").normalize)
      .filter((token) => {
        return token !== "withinfra"
      })
      .join("-")
  },
}
