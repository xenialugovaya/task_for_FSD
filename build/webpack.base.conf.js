const path = require('path')
const webpack = require('webpack')
const fs = require('fs')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')




// Main const
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#main-const
const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  modules: path.join(__dirname, "node_modules"),
  assets: 'assets/'
}

const pages = [];

fs
  .readdirSync(path.resolve(__dirname, '..', 'src', 'project', 'pages'))
  .filter((file) => {
    return file.indexOf('base') !== 0;
  })
  .forEach((file) => {
    pages.push(file.split('/', 2));
  });

const htmlPlugins = pages.map(fileName => new HtmlWebpackPlugin({

  filename: `${fileName}.html`,
  template: `./src/project/pages/${fileName}/${fileName}.pug`,

}));

module.exports = {
  // BASE config
  externals: {
    paths: PATHS
  },
  entry: {
    app: PATHS.src,
    // module: `${PATHS.src}/index.js`,
  },
  output: {
    filename: `${PATHS.assets}js/[name].[hash].js`,
    path: PATHS.dist,
    publicPath: './'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [{
      test: /\.pug$/,
      loader: 'pug-loader',
      exclude: '/node_modules/'
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/'
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loader: {
          scss: 'vue-style-loader!css-loader!sass-loader'
        }
      }
    }, {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]'
      }
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]'
      }
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            url: false
          }
        }, {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            config: {
              path: `./postcss.config.js`
            }
          }
        }, {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              includePaths: ['./node_modules']
            },
            sourceMap: true
          }
        }
      ]
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            url: false
          }
        }, {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            config: {
              path: `./postcss.config.js`
            }
          }
        }
      ]
    }]
  },
  resolve: {
    alias: {
      '~': PATHS.src,

    }
  },
  plugins: [

    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/main.css`,
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery'
    }),
    new CopyWebpackPlugin([{
        from: `${PATHS.src}/${PATHS.assets}img`,
        to: `${PATHS.assets}img`
      },
      {
        from: `${PATHS.src}/${PATHS.assets}fonts`,
        to: `${PATHS.assets}fonts`
      },
    ]),
  ].concat(htmlPlugins),
}