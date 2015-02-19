# PostCSS Plugin Boilerplate

<img align="right" width="135" height="95" src="http://postcss.github.io/postcss/logo-leftp.png" title="Philosopher’s stone, logo of PostCSS">

Boilerplate repoitory to start PostCSS plugin by few steps.

1. Clone this reposity:

   ```sh
  git clone https://github.com/postcss/postcss-plugin-boilerplate.git
   ```

2. Execute wizard script. it will ask you a few question and will fill all
   files with your data.

    ```sh
   ./postcss-plugin-boilerplate/start
    ```

3. Now it is repository of your plugin with clean Git history.
   Create GitHub repositpory and push your project there.

4. Add your project to [Travis CI](https://travis-ci.org).

5. Install npm packages:

    ```sh
   npm install
    ```

6. Write some code to `index.js` and tests to `test/test.js`.

7. Check your code:

    ```sh
   npm test
    ```

8. Add input and output CSS examples to `README.md`. Add options descriptions
   if your plugin has them.

9. Fork [PostCSS](https://github.com/postcss/postcss), add your plugin to
   [Plugins section](https://github.com/postcss/postcss#plugins) in `README.md`
   and send a pull request.

10. Follow [@PostCSS](https://twitter.com/postcss) to get latest updates.
