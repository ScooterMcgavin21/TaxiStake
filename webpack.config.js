const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

// const mode = process.env.NODE_ENV == 'production' ? 'production' : 'development'
/** Swaping from production and dev to view builds */
let mode = "development";
if(process.env.NODE_ENV === "production"){
  mode = "production";
}

module.exports = {
  mode: mode,
  /**
   * This is unnecessary in Webpack 5, because it's the default.
   * However, react-refresh-webpack-plugin can't find the entry without it.
   */
  entry: './src/index.js',
  output: {
    // output path is required for `clean-webpack-plugin`
    path: path.resolve(__dirname, './dist'),
    // this places all images processed in an image folder
    assetModuleFilename: "images/[hash][ext][query]",
  },
  module: {
    rules: [
      /* JavaScript */
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      /** Images */
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset',
      },
      /** Fonts */ 
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        type: 'asset/inline',
      },
      /** CSS */
      {
        test:/\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "" }, // This is required for asset imports in CSS, such as url()
          },
          "css-loader",
        ],
      },
      /** Videos */
      {
        test: /\.mp4$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'video'
            }
          }
        ]
      },
    ],
  },
  /* plugins */
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack Taxi',
      template: path.resolve(__dirname, './src/template.html'), // template file
      filename: 'index.html', // output file
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    //new ErrorOverlayPlugin(),
  ],

  /** Dev Server */
  devtool: 'cheap-module-source-map', // 'source-map'
  devServer: {
    static: './dist',
    port: 8080,
    compress: true,
    hot: true,
    open: true
  }
}