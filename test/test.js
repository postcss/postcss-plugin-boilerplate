var postcss = require('postcss');
var expect  = require('chai').expect;

var plugin = require('../');

var test = function (input, output, opts) {
    expect(postcss([plugin(opts)]).process(input).css).to.eql(output);
};

describe('PLUGIN_NAME', function () {

    /* Write tests here

    it('does something', function () {
        test('a{ }', 'a{ }');
    });*/

});
