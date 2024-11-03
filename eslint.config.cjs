module.exports = [
  {
    ...require('eslint-config-love'),
    files: [
      '**/*.js',
      '**/*.jsx',
      '**/*.ts',
      '**/*.tsx'
    ],
    parserOptions: {
      "project": "./tsconfig.json"
    },
    rules: {
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/strict-boolean-expressions": "off",
    }
  }
]