let { mock } = require('gogen')
let { emitter } = require('./.gogenrc.js')

let mockAnswers = {
  description: 'for test',
  gitHubName: ':name',
}

let injectAnswers = (answers) => {
  // https://github.com/enquirer/enquirer/blob/master/lib/prompts/snippet.js
  emitter.on('prompt:run', async (prompt) => {
    await prompt.keypress(answers.description)
    await prompt.down()
    await prompt.keypress(answers.ghname)
    await prompt.submit()
    // it seems buggy in jest
    await prompt.submit()
  })
}

afterEach(() => {
  emitter.removeAllListeners()
})

test('basic', async () => {
  injectAnswers(mockAnswers)
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
    description: `PostCSS plugin ${mockAnswers.description}`,
    repository: `${mockAnswers.gitHubName}/postcss-foo`,
    author: ':name <:email>',
  })
})

test('add prefix', async () => {
  injectAnswers(mockAnswers)
  let { readFile } = await mock(__dirname, 'foo', {
    answers: mockAnswers,
  })
  expect(JSON.parse(readFile('package.json'))).toMatchObject({
    name: 'postcss-foo',
  })
})
