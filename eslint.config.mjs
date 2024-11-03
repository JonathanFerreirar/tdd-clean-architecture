import love from 'eslint-config-love'

export default [
  {
    ...love,
    files: ['**/*.js', '**/*.ts'],
    parserOptions: {
      "project": "./tsconfig.json"
    },
    rules: {
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/strict-boolean-expressions": "off",
    },
    ignore: [
      'node_modules',
      '.vscode'
    ]
  },
]

