// .eslintrc.js
module.exports = {
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  rules: {
    // Your custom rules here
    'no-unused-vars': 'warn',
    'no-undef': 'warn',
    'prettier/prettier': ['error', { singleQuote: true }],
  },
};
