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
    "test": "jest-ci --coverage"
  },
  "author": "AUTHOR_NAME <AUTHOR_EMAIL>",
  "license": "MIT",
  "repository": "GITHUB_NAME/PLUGIN_NAME",
  "engines": {
    "node": ">=10.0.0"
  },
  "devDependencies": {
    "clean-publish": "^1.1.8",
    "eslint": "^7.6.0",
    "eslint-ci": "^1.0.0",
    "eslint-plugin-jest": "^23.20.0",
    "husky": "^4.2.5",
    "jest": "^26.2.2",
    "jest-ci": "^0.1.1",
    "lint-staged": "^10.2.11",
    "postcss": "^8.0.0"
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
    "extends": [
      "eslint:recommended",
      "plugin:jest/recommended"
    ]
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
