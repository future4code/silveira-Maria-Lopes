module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'import'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 'off',
    'react/prop-types': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'unknown',
          'parent',
          'sibling',
          'index',
          'object',
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@assets/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@constants/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@context/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@hooks/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@services/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@utils/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@components/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@views/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@pages/public/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@pages/private/**',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
      },
    ],
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
  },
};
