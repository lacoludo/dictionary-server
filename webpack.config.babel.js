import TerserPlugin from 'terser-webpack-plugin'
import nodeExternals from 'webpack-node-externals'
import path from 'path'

export default {
  mode: 'production',
  entry: './src/index',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  externals: [nodeExternals()],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  },
  output: {
    filename: 'app.js',
    path: path.resolve('./public')
  },
  target: 'node'
}
