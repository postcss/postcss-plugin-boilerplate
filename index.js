var postcss = require('postcss');

module.exports = postcss.plugin('PLUGIN_NAME', function (opts) {
    opts = opts || {};

    // Work with options here

    return function (css, result) {

        // Transform CSS AST here

    };
});
