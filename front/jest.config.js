module.exports = {
  testEnvironment: 'jsdom',
  globals: {
    fetch: global.fetch,
  },
  transform:{
    '^.+\\.jsx?$': 'babel-jest',
    ".+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
  }
};