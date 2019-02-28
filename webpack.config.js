const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    filename: './bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map',
  devServer: {
    port: 3001,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        API_URL: JSON.stringify('http://localhost:3005/api'),
        GITHUB_LOGIN_URL: JSON.stringify('http://localhost:3005/api/auth/github'),
      },
    }),
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([
      {
        from: './*.html',
      },
    ]),
  ],
};
