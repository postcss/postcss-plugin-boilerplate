let { mock } = require('gogen')

let mockAnswers = {
  description: 'My plugin',
  gitHubName: ':ghname',
}

test('basic', async () => {
  let { files, readFile } = await mock(__dirname, 'postcss-foo', {
    answers: mockAnswers,
  })
  expect(files).toMatchInlineSnapshot(`
Array [
  ".editorconfig",
  ".github/workflows/test.yml",
  ".gitignore",
  ".npmignore",
  "CHANGELOG.md",
  "LICENSE",
  "README.md",
  "index.js",
  "index.test.js",
  "package.json",
]
`)
  expect(JSON.parse(readFile('package.json'))).toMatchObject({
    name: 'postcss-foo',
    description: 'My plugin',
    repository: ':ghname/postcss-foo',
    author: ':name <:email>',
  })
})

test('add prefix', async () => {
  let { readFile } = await mock(__dirname, 'foo', {
    answers: mockAnswers,
  })
  expect(JSON.parse(readFile('package.json'))).toMatchObject({
    name: 'postcss-foo',
  })
})
