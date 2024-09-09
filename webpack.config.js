const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.tsx', 
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'blocker-react',
    libraryTarget: 'umd', 
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  externals: {

    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
  },
};
