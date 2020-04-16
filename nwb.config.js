const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    // umd: {
    //   global: 'ColUniv',
    //   externals: {
    //     react: 'React',
    //   },
    // },
  },
  webpack: {
    extra: {
      plugins: [new BundleAnalyzerPlugin({ generateStatsFile: true, analyzerPort: 8787 })],
    },
  },
};
