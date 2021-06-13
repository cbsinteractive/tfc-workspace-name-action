const core = require("@actions/core")

module.exports = async () => {
  try {
    core.info("Hello, World!")
    core.setOutput("foo", "bar")
  } catch (error) {
    core.setFailed(error.message)
  }
}
