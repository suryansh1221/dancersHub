module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'parser': 'babel-eslint',
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'require-jsdoc': 0,
    'no-invalid-this': 0,
  },
};
