module.exports = {
  root: true,
  ignorePatterns: ['**/*'],
  plugins: ['@nx', 'import'],
  extends: ['plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': ['error', require('./.prettierrc.js')]
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        '@nx/enforce-module-boundaries': [
          'error',
          {
            enforceBuildableLibDependency: true,
            allow: [],
            depConstraints: [
              {
                sourceTag: '*',
                onlyDependOnLibsWithTags: ['*']
              }
            ]
          }
        ],
        'import/no-duplicates': 'error',
        'import/no-unused-modules': 'error',
        'import/order': [
          'error',
          {
            alphabetize: {
              order: 'asc',
              caseInsensitive: false
            },
            'newlines-between': 'always',
            groups: ['external', 'builtin', 'internal'],
            pathGroups: [
              {
                pattern: '{next,react,react-dom}',
                group: 'external',
                position: 'before'
              }
            ],
            pathGroupsExcludedImportTypes: []
          }
        ]
      }
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:@nx/typescript'],
      rules: {}
    },
    {
      files: ['*.js', '*.jsx'],
      extends: ['plugin:@nx/javascript'],
      rules: {}
    },
    {
      files: ['*.spec.ts', '*.spec.tsx', '*.spec.js', '*.spec.jsx'],
      env: {
        jest: true
      },
      rules: {}
    }
  ]
};
