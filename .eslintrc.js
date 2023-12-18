module.exports = {
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:eslint-comments/recommended',
    'prettier',
  ],
  env: { browser: true, node: true, es6: true },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint', 'simple-import-sort', 'import'],
  ignorePatterns: ['node_modules/', '.eslintrc.js'],
  rules: {
    'react/jsx-curly-brace-presence': 'warn',
    'simple-import-sort/imports': 'error', //importとexportのソート
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    '@typescript-eslint/consistent-type-definitions': ['warn', 'type'], //型定義はtypeを使う
    '@typescript-eslint/no-explicit-any': 'error', //any禁止
    '@typescript-eslint/no-unused-vars': 'error', //未使用の変数禁止
    'react/self-closing-comp': ['error', { component: true, html: true }], //<Component />のように自己閉タグを使う
    'no-control-regex': 'off', //正規表現中のASCII制御文字ok
    'react/jsx-boolean-value': 'error', //attribute={true} → attribute
    'react/jsx-pascal-case': 'error', //コンポーネント名はパスカルケース
    'object-shorthand': ['warn', 'properties', { avoidQuotes: true }],
    'eslint-comments/require-description': 'error', //eslint-disable-next-lineのコメントは必ず説明を書く。https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/require-description.html
    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }], //https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/disable-enable-pair.html
    'import/no-default-export': 'error', //default export禁止
    'no-nested-ternary': 'error', //三項演算子のネスト禁止
    'react/function-component-definition': [
      'error', //関数コンポーネントの定義はアロー関数を使う
      { namedComponents: 'arrow-function' },
    ],
    'no-magic-numbers': [
      'error',
      {
        ignore: [-1, 0, 1], //配列検索でindexOf === -1などは許容する
        ignoreDefaultValues: true, //const { tax = 0.1 } = props
        ignoreArrayIndexes: true, //data[100] ok
        enforceConst: true, //マジックナンバーはconstで定義する
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: ['variable', 'method', 'accessor'], //基本的に全てcamelCase
        format: ['camelCase', 'snake_case'],
      },
      {
        selector: ['property'], //APIリクエスト時にPascalCaseとなっている箇所がある
        format: ['camelCase', 'snake_case', 'PascalCase'],
      },
      {
        selector: 'variable', //exportされている定数やコンポーネント
        modifiers: ['exported', 'const'],
        format: ['PascalCase', 'strictCamelCase'],
      },
      {
        selector: 'interface', //interfaceはIをつけない
        format: ['PascalCase'],
        custom: { regex: '^I[A-Z]', match: false },
      },
      { selector: ['class', 'typeAlias', 'enum'], format: ['PascalCase'] },
      {
        selector: ['objectLiteralProperty'], //api requestのheadersの'Content-Type'などが対応するためnullで許容する
        format: null,
        modifiers: ['requiresQuotes'],
      },
    ],
  },
  overrides: [
    {
      files: ['*/app/**/page.tsx', 'layout.tsx', 'tailwind.config.ts'],
      rules: {
        'import/no-default-export': 'off',
        'import/prefer-default-export': 'error',
        '@typescript-eslint/naming-convention': 'off',
      },
    },
  ],
}
