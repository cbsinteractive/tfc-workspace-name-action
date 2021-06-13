module.exports = {
  normalize: (repoName, suffix) => {
    return `${require("./token").normalize(repoName)}${suffix}`
  },
}
