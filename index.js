let postcss = require('postcss')

module.exports = postcss.plugin('PLUGIN_NAME', (opts = { }) => {

  // Work with options here

  return (root, result) => {

    // Transform CSS AST here

  }
})
