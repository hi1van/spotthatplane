// craco.config.js
module.exports = {
  webpack: {
    resolve: {
      fallback: {
        stream: require.resolve("stream-browserify"),
        zlib: require.resolve("browserify-zlib"),
        buffer: require.resolve("buffer/"),
        os: require.resolve("os-browserify/browser"),
        https: require.resolve("https-browserify"),
        http: require.resolve("stream-http"),
        url: require.resolve("url/"),
        crypto: require.resolve("crypto-browserify"),
      },
    },
  },
};