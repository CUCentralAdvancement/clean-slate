module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'CU',
      externals: {
        react: 'React'
      }
    }
  }
}
