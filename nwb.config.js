const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

let config = {
  polyfill: false,
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ColUniv',
      entry: './umd.js',
      externals: {
        react: 'React',
        // 'react-select': 'ReactSelect',
        // 'theme-ui': 'ThemeUI',
      },
    },
  },
  webpack: {
    extra: {
      plugins: [new BundleAnalyzerPlugin({ generateStatsFile: true, analyzerMode: 'disabled' })],
    },
  },
};

// if (process.env.NODE_ENV === 'production') {
//   console.log('Whooopie!!!!');
//   config.babel = {
//     plugins: 'transform-react-remove-prop-types',
//   };
// }

module.exports = config;
