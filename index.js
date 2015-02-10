module.exports = function (opts) {
    opts = opts || {};

    // Work with options here

    return function (css) {

        // Transform CSS AST here

    };
};
module.exports.postcss = function (css) {
    return module.exports()(css);
};
