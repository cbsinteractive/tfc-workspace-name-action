module.exports = {
  normalize: (token) => {
    return token.replace(/-/g, "").toLowerCase()
  },
}
