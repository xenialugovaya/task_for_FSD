const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  CleanWebpackPlugin,
} = require('clean-webpack-plugin');


const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  modules: path.join(__dirname, 'node_modules'),
  assets: 'assets/',
};

const pages = fs.readdirSync(path.resolve(__dirname, '..', 'src', 'project', 'pages')).filter((fileName) => fileName.endsWith('.pug'));

const htmlPlugins = pages.map((fileName) => new HtmlWebpackPlugin({

  filename: `./${fileName.replace(/\.pug/, '.html')}`,
  template: `./src/project/pages/${fileName}`,

}));

module.exports = {
  externals: {
    paths: PATHS,
  },
  entry: {
    app: PATHS.src,
  },
  output: {
    filename: `${PATHS.assets}js/[name].[hash].js`,
    path: PATHS.dist,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [{
      test: /\.pug$/,
      loader: 'pug-loader',
      exclude: '/node_modules/',
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/',
    }, {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,

      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: (url, resourcePath, context) => {
          const relativePath = path.relative(context, resourcePath);
          // ignore SVG file if its relative path contains "images"
          if (/\/images\//.test(relativePath)) {
            return;
          }
          return `assets/fonts/${url}`;
        },
      },
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: (url, resourcePath, context) => {
          const relativePath = path.relative(context, resourcePath);

          // ignore SVG file if its relative path contains "fonts"
          if (/\/fonts\//.test(relativePath)) {
            return;
          }

          return `assets/images/${url}`;
        },
      },
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            url: true,
          },
        }, {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            config: {
              path: './postcss.config.js',
            },
          },
        }, {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              includePaths: ['./node_modules'],
            },
            sourceMap: true,
          },
        }, {
          loader: 'sass-resources-loader',
          options: {
            resources: [path.resolve(__dirname, `${PATHS.src}/assets/scss/utils/vars.scss`), path.resolve(__dirname, `${PATHS.src}/assets/scss/utils/mixins.scss`)],
          },
        },
      ],
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            url: false,
          },
        }, {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            config: {
              path: './postcss.config.js',
            },
          },
        },
      ],
    }],
  },
  resolve: {
    alias: {
      '~': PATHS.src,
    },
  },
  plugins: [

    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[contenthash].css',
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery',
    }),

  ].concat(htmlPlugins),
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    overlay: true,
  },
};