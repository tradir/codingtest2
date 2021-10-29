module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['airbnb', 'airbnb/hooks'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['js', 'jsx'] }],
    'arrow-parens': ['warn', 'as-needed'],
    'no-unused-vars': ['off'],
    'no-console': ['off'],
    'import/prefer-default-export': ['off'],
    'react-hooks/exhaustive-deps': ['warn'],
    'react/jsx-props-no-spreading': ['warn'],
    'react/prop-types': ['off'],
    'no-underscore-dangle': ['off'],

  },
  settings: {
    'import/resolver': {
      node: true,
      // moduleDirectory: ["node_modules", "."],
    },
  },
};
