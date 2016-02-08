var config = {
  plugins: [
    'stylelint-selector-bem-pattern'
  ],
  rules: {
    'block-closing-brace-newline-after': 'always-single-line',
    'block-closing-brace-newline-before': 'always-multi-line',
    'block-closing-brace-space-before': 'always-single-line',
    'block-opening-brace-newline-after': 'always-multi-line',
    'color-no-invalid-hex': true,
    'custom-property-no-outside-root': true,
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-block-semicolon-newline-after': 'always-multi-line',
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    'declaration-block-semicolon-space-after': 'always-single-line',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'function-calc-no-unspaced-operator': true,
    'function-comma-space-before': 'never',
    'function-comma-space-after': 'always',
    'function-url-quotes': 'single',
    'indentation': [2, 2, { hierarchicalSelectors: true }],
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'no-missing-eof-newline': true,
    'number-no-trailing-zeros': true,
    'number-zero-length-no-unit': true,
    'rule-no-duplicate-properties': true,
    'rule-non-nested-empty-line-before': ['always-multi-line', {
      ignore: ['after-comment']
    }],
    'rule-trailing-semicolon': 'always',
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-list-comma-newline-after': 'always-multi-line',
    'selector-list-comma-newline-before': 'never-multi-line',
    'selector-list-comma-space-after': 'always-single-line',
    'selector-list-comma-space-before': 'never',
    'selector-no-id': true,
    'string-quotes': 'single',
    'value-list-comma-newline-before': 'never-multi-line',
    'value-list-comma-space-after': 'always',
    'value-list-comma-space-before': 'never'
  }
};

module.exports = config;
