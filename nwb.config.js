module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ColUniv',
      externals: {
        react: 'React',
      },
    },
  },
};
