module.exports = {
  normalize: (branchName) => {
    return branchName
      .split("_")
      .map(require("./token").normalize)
      .filter((token) => {
        return token !== "withinfra"
      })
      .join("-")
  },
}
