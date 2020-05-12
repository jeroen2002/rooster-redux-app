module.exports = {
  'extends': 'airbnb',
  'env': {
    'browser': true,
  },
  'rules': {
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'react/destructuring-assignment': 'off',
    'react/forbid-prop-types': [1, { 'forbid': ['any'] }],
  },
};
