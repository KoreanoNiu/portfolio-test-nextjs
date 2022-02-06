const webpack = require('webpack');
const withImages = require('next-images');
const withVideos = require('next-videos');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const conf = {
    webpack5: true,
    swcMinify: true,
    reactStrictMode: true,
    devtool: 'source-map',
    compress: true,
    target: "serverless",
    ssr: false,
    images: {
      disableStaticImages: true
    },
    optimizeFonts: true,
    optimization: {
        removeEmptyChunks: true,
        splitChunks: {
          chunks: "all",
          cacheGroups: {
            vendors: {
              test: /[\\/]node_modules[\\/]/,
              chunks: "all",
              Priority: 10,
              enforce: true,
            },
          }
        },
        moduleIds: "hashed",
        chunkIds: 'deterministic',
        minimize: true,
        minimizer: [
          new TerserPlugin({
            test: /\.js($|\?)/i,
            include: /\.js$/,
            parallel: true,
            extractComments: true,
            terserOptions: {
              parse: {
                ecma: 8,
              },
              compress: {
                ecma: 5,
                warnings: false,
                comparisons: false,
                inline: 2,
              },
              mangle: {
                safari10: true,
              },
              output: {
                ecma: 5,
                comments: false,
                ascii_only: true,
              },
            },
          }),
      ]
    },
    webpack: (config) => {
      config.optimization.minimizer.push(
        new OptimizeCSSAssetsPlugin({
          assetNameRegExp: /\.optimize\.css$/g,
          cssProcessor: require('cssnano'),
          cssProcessorPluginOptions: {
            preset: ['default', { discardComments: { removeAll: true } }],
          },
        })
     );
      config.plugins.push(
        new webpack.optimize.LimitChunkCountPlugin({
           maxChunks: 1,
        }),
     );
      return config
    },
}

module.exports = withVideos(withImages(conf, {}));