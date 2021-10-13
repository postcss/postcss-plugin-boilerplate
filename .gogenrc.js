let { Snippet } = require('enquirer')
let { EventEmitter } = require('events')
let { execSync } = require('child_process')

let isTest = process.env.CI || process.env.NODE_ENV === 'test'
let command = (cmd) => execSync(cmd).toString().trim()
let emitter = new EventEmitter()

/**
 * @type {import('gogen').Generator}
 */
module.exports = async (
  { src, dest, pipeline, template, install, gitInit },
  { name, argv }
) => {
  let pluginPrefix = 'postcss-'
  let pluginName = name.startsWith(pluginPrefix) ? name : pluginPrefix + name
  let autodetects = {
    authorName: isTest ? ':name' : command('git config user.name'),
    authorEmail: isTest ? ':email' : command('git config user.email'),
  }
  let prompt = new Snippet({
    name: 'pkg',
    message: 'Fill out the fields in package.json',
    required: true,
    values: {
      ...autodetects,
    },
    fields: [{ name: 'gitHubName', message: 'GitHub login' }],
    template: `{
  "name": "${pluginName}",
  "description": "PostCSS plugin \${description}",
  "repository": "\${gitHubName}/${pluginName}",
  "author": "\${authorName} <\${authorEmail}>",
}
`,
  })
  prompt.on('run', () => emitter.emit('prompt:run', prompt))
  let { values } = await prompt.run()

  await pipeline(
    src('template/**'),
    template({
      ...values,
      pluginName,
      currentYear: new Date().getFullYear(),
    }),
    dest(pluginName)
  )
  // handle `--no-install`
  if (argv.install !== false) {
    // handle `--npm`
    await install([], { client: argv.npm ? 'npm' : 'auto' })
  }
  await gitInit()
}

module.exports.emitter = emitter
