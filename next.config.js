const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.node = {
  //       fs: 'empty',
  //     };
  //   }
  //   return config;
  // },
  pageExtensions: ['js', 'jsx', 'mdx'],
  basePath: ghPages ? '/blog/' : '',
  assetPrefix: ghPages ? '/blog/' : '',
  eslint: {
    ignoreDuringBuilds: true,
  },
});
