module.exports = {
    "env": {
      "es6": true,
      "node": true,
      "mocha": true
    },
    "parserOptions": {
      "ecmaVersion": 2017
    },
    "extends": "eslint:recommended",
    "rules": {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      "indent": [
        "error",
        2
      ],
      "linebreak-style": [
        "error",
        "windows"
      ],
      "quotes": [
        "error",
        "single"
      ],
      "semi": [
        "error",
        "always"
      ]
    }
  }
  