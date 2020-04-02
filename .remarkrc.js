module.exports = {
  'plugins': {
    'remark-frontmatter': null,
    'remark-lint-no-dead-urls': null,
    'remark-preset-lint-consistent': null,
    'remark-preset-lint-markdown-style-guide': null,
    'remark-preset-lint-recommended': null,

    // custom configurations

    // INFO: "space" for the spacing between a list item's bullet and its
    // content to simplify editing process.
    'remark-lint-list-item-indent': 'space',

    // INFO: no maximum amount of characters per line to simplify editing process.
    'remark-lint-maximum-line-length': false,
  },
};
