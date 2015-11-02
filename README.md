# PostCSS Plugin Boilerplate

<img align="right" width="135" height="95"
     title="Philosopher’s stone, logo of PostCSS"
     src="http://postcss.github.io/postcss/logo-leftp.png">

Сreate new PostCSS plugins in a few steps:

1. Clone this repository:

   ```sh
   git clone https://github.com/postcss/postcss-plugin-boilerplate.git
   ```

2. Execute the wizard script by running npm install. It
   will ask you a few questions and fill all files with
   your data.

   ```sh
   npm install
   ```

3. Your plugin repository will now have a clean Git history.
   [Create the GitHub repository](https://github.com/new)
   and push your project there.

4. Add your project to [Travis CI](https://travis-ci.org).

5. Start gulp watcher:
   ```sh
   gulp watch
   ```
6. Write some code to `index.js` and tests to `test/test.js`.
   You will see the test and lint results in your gulp
   terminal session.

7. Add input and output CSS examples to `README.md`.

8. Add options descriptions if your plugin has them.

9. Fill `CHANGELOG.md` with initial version and release it
   to npm.

10. Fork [PostCSS](https://github.com/postcss/postcss), add
    your plugin to [Plugins section](https://github.com/postcss/postcss#plugins)
    in `README.md`, and send a pull request.

11. Follow [@PostCSS](https://twitter.com/postcss) to get
    the latest updates.
