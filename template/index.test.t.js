const postcss = require('postcss')
const { equal } = require('uvu/assert')
const { test } = require('uvu')

const plugin = require('./')

async function run(input, output, opts = {}) {
  let result = await postcss([plugin(opts)]).process(input, { from: undefined })
  equal(result.css, output)
  equal(result.warnings().length, 0)
}

/* Write tests here

test('does something', async () => {
  await run('a{ }', 'a{ }', { })
})

*/

test.run()
