module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended', 'airbnb'],
  plugins: ['eslint-plugin-jsx-a11y'],
  rules: {
    'max-lines': ['warn', { max: 350 }],
    'react/react-in-jsx-scope': 'off',
    'max-statements': ['warn', 14, { ignoreTopLevelFunctions: true }],
    'max-lines-per-function': ['warn', { max: 80, skipComments: true }],
    'react/jsx-fragments': ['warn', 'syntax'],
    'react/jsx-filename-extension': 'off',
  },
  globals: {
    React: 'writable',
  },
};
