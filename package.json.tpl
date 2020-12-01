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
    "postcss": "^8.1.5"
  },
  "devDependencies": {
    "clean-publish": "^1.1.8",
    "eslint": "^7.14.0",
    "eslint-plugin-jest": "^24.1.3",
    "husky": "^4.3.0",
    "jest": "^26.4.2",
    "lint-staged": "^10.5.2",
    "lint-staged": "^10.4.0",
    "postcss": "^8.1.5"
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
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
