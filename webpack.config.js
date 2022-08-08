const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'src/lfortran_wasm_kernel.wasm',
          to: '.'
        }
      ]
    })
  ]
};
