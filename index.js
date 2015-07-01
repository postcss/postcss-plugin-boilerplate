var postcss = require('postcss');

module.exports = postcss.plugin('PLUGIN_NAME', function (opts) {
    opts = opts || {};

    // Work with options here

    return function (css) {

        // Transform CSS AST here

    };
});

module.exports.process = function (css, opts) {
    var processed = postcss([module.exports(opts)]).process(css, opts);

    return opts && opts.map && !opts.map.inline ? processed : processed.css;
};
