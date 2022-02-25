const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = {
  pageExtensions: ['js', 'jsx', 'mdx'],
  reactStrictMode: true,
  target: 'serverless',
};
