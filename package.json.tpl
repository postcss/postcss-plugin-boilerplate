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
    "postcss": "^8.0.2"
  },
  "devDependencies": {
    "clean-publish": "^1.1.8",
    "eslint": "^7.9.0",
    "eslint-ci": "^1.0.0",
    "eslint-plugin-jest": "^24.0.1",
    "husky": "^4.3.0",
    "jest": "^26.4.2",
    "jest-ci": "^0.1.1",
    "jest-cli": "^26.4.2",
    "lint-staged": "^10.3.0",
    "postcss": "^8.0.2"
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
