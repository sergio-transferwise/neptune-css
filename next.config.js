const rehypePrism = require('@mapbox/rehype-prism');
const withCSS = require('@zeit/next-css')
const withMDX = require('@zeit/next-mdx')({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [rehypePrism]
  }
});
const getPageMap = require('next-page-map')

const pageExtensions = ['js', 'jsx', 'md', 'mdx']

module.exports = withCSS(withMDX({
  assetPrefix: process.env.NODE_ENV === 'production' ? '/neptune-css/branch/export' : '',
  pageExtensions,
  publicRuntimeConfig: {
    pageExtensions,
    pageMap: getPageMap({pageExtensions})
  }
}));
