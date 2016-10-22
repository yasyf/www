module.exports = {
  "extends": "airbnb",
  "installedESLint": true,
  "parser": "babel-eslint",
  "rules": {
    "class-methods-use-this": "off",
    "import/no-unresolved": "off",
    "sort-imports": "warn",
    "no-trailing-spaces": "warn",
    "consistent-return": "error",
    "no-param-reassign": [
      "error",
      {
        "props": false,
      },
    ],
    "no-underscore-dangle": [
      "error",
      {
        "allowAfterThis": true,
      },
    ],
    "no-unused-vars": [
      "warn",
      {
        "argsIgnorePattern": "^_",
      },
    ],
    "new-cap": "off",
    "default-case": "off",
  },
};
