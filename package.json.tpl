{
  "name": "PLUGIN_NAME",
  "version": "0.0.0",
  "description": "PostCSS plugin PLUGIN_DESC",
  "keywords": [
    "postcss",
    "css",
    "postcss-plugin"KEYWORDS
  ],
  "scripts": {
    "test": "jest-ci --coverage && eslint-ci ."
  },
  "author": "AUTHOR_NAME <AUTHOR_EMAIL>",
  "license": "MIT",
  "repository": "GITHUB_NAME/PLUGIN_NAME",
  "engines": {
    "node": ">=10.0.0"
  },
  "peerDependencies": {
    "postcss": "^8.2.8"
  },
  "devDependencies": {
    "clean-publish": "^2.1.0",
    "eslint": "^7.21.0",
    "eslint-plugin-jest": "^24.2.1",
    "jest": "^26.6.3",
    "lint-staged": "^10.5.4",
    "postcss": "^8.2.8",
    "simple-git-hooks": "^2.0.2"
  },
  "simple-git-hooks": {
    "pre-commit": "npx lint-staged"
  },
  "lint-staged": {
    "*.js": "eslint --fix"
  },
  "eslintConfig": {
    "parserOptions": {
      "ecmaVersion": 2017
    },
    "env": {
      "node": true,
      "es6": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:jest/recommended"
    ],
    "rules": {
      "jest/expect-expect": "off"
    }
  },
  "jest": {
    "testEnvironment": "node",
    "coverageThreshold": {
      "global": {
        "statements": 100
      }
    }
  }
}
