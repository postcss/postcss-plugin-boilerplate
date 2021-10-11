let { execSync } = require('child_process')

let isTest = process.env.CI || process.env.NODE_ENV === 'test'
let command = (cmd) => execSync(cmd).toString().trim()

/**
 * @type {import('gogen').Generator}
 */
module.exports = async (
  { src, dest, pipeline, template, prompts, install, gitInit },
  { name, argv }
) => {
  let pluginPrefix = 'postcss-'
  let pluginName = name.startsWith(pluginPrefix) ? name : pluginPrefix + name
  let autodetects = {
    authorName: isTest ? ':name' : command('git config user.name'),
    authorEmail: isTest ? ':email' : command('git config user.email'),
  }
  let { description, gitHubName } = await prompts(
    [
      {
        type: 'text',
        name: 'description',
        message: 'Package description',
        initial: 'Awesome PostCSS plugin',
      },
      {
        type: 'text',
        name: 'gitHubName',
        message: 'GitHub username',
        initial: autodetects.authorName,
      },
    ],
    {
      onCancel: process.exit,
    }
  )
  await pipeline(
    src('template/**'),
    template({
      ...autodetects,
      pluginName,
      description,
      gitHubName,
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
