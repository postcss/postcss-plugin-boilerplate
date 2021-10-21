# PostCSS Plugin Boilerplate

<img align="right" width="135" height="95"
     title="Philosopher’s stone, logo of PostCSS"
     src="https://postcss.org/logo-leftp.svg">

Сreate new PostCSS plugins in a few steps:

1. Execute the wizard script. It will ask you a few questions
   and fill all files with your data.

   ```sh
   npx postcss-plugin-boilerplate <directory>
   ```

   Call it with `--npm` argument, if you have [yarn](https://yarnpkg.com/) installed, but prefer to use npm as the package manager
   (by default, it will automatically decide whether to use yarn or npm):

   ```sh
   node postcss-plugin-boilerplate --npm <directory>
   ```

   Or use `--no-install` if you want to skip dependencies installation.

2. Your plugin repository will now have a clean Git history.
   [Create the GitHub repository](https://github.com/new)
   and push your project there.

3. Add your project to [Travis CI](https://travis-ci.org).

4. Write some code to `index.js` and tests to `index.test.js`.

5. Execute `npm test` command

6. Add input and output CSS examples to `README.md`.

7. Add options descriptions if your plugin has them.

8. Fill `CHANGELOG.md` with initial version.

9. Release by calling `npx clean-publish`
   (this tool will remove development configs from `package.json`).

10. Fork [PostCSS](https://github.com/postcss/postcss), add your plugin to the
    [Plugins list](https://github.com/postcss/postcss/blob/main/docs/plugins.md)
    and send a pull request.

11. Follow [@PostCSS](https://twitter.com/postcss) to get the latest updates.
