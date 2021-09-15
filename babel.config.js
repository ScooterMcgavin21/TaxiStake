// babel config written as javascript
const presets = [
  '@babel/preset-env',
  '@babel/preset-react'
];

const plugins = [
  ['babel-plugin-styled-components', {
    minify: true,
    pure: true
  }]
];

module.exports = { presets, plugins };