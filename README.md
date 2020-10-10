# PostCSS Plugin Boilerplate

<img align="right" width="135" height="95"
     title="Philosopher’s stone, logo of PostCSS"
     src="https://postcss.org/logo-leftp.svg">

Сreate new PostCSS plugins in a few steps:

1. Clone this repository:

    ```sh
    git clone https://github.com/postcss/postcss-plugin-boilerplate.git
    ```

2. Execute the wizard script. It will ask you a few questions
   and fill all files with your data.

    ```sh
    node ./postcss-plugin-boilerplate/start
    ```

    Call it with `--yarn` argument, if you prefer [yarn](https://yarnpkg.com/)
    package manager:

    ```sh
    node ./postcss-plugin-boilerplate/start --yarn
    ```

    Or use `--no-install` if you want to skip dependencies installation.
    
    > ⚠️ **Note on resolutions**
    >
    > If you plan on using `yarn`, you don't need to do this.
    >
    > Otherwise use following steps to resolve.
    > 1. To the `scripts` section in your `package.json` add the line `"preinstall" : "npx npm-force-resolutions"`.
    > 2. Remove `node-modules`. In Linux based systems, you can do so by using `rm -rf node-modules`.
    > 3. Use `npm i` to install the dependencies again.


3. Your plugin repository will now have a clean Git history.
[Create the GitHub repository](https://github.com/new)
and push your project there.

4. Add your project to [Travis CI](https://travis-ci.org).

5. Write some code to `index.js` and tests to `index.test.js`.

6. Execute `npm test` command

7. Add input and output CSS examples to `README.md`.

8. Add options descriptions if your plugin has them.

9. Fill `CHANGELOG.md` with initial version.

10. Release by calling `npx clean-publish`
    (this tool will remove development configs from `package.json`).

11. Fork [PostCSS](https://github.com/postcss/postcss), add your plugin to the
[Plugins list](https://github.com/postcss/postcss/blob/master/docs/plugins.md)
and send a pull request.

11. Follow [@PostCSS](https://twitter.com/postcss) to get the latest updates.
