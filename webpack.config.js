module.exports = {
  entry: './src/js/Index.jsx',
  output: {
    path: `${__dirname}/src/public/assets/`,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js','.json', '.jsx', '.css']
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]--[local]--[hash:base64:8]'
            }
          },
          'postcss-loader'
        ]
      }
    ]
  }
};
