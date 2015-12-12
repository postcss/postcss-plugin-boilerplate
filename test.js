import postcss from 'postcss';
import test    from 'ava';

import plugin from './';

function run(t, input, output, opts = { }) {
    return postcss([ plugin(opts) ]).process(input)
        .then( result => {
            t.is(result.css, output);
            t.is(result.warnings().length, 0);
        });
}

/* Write tests here

test('does something', t => {
    return run(t, 'a{ }', 'a{ }', { });
});

*/
