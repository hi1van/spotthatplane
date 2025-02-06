module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        webpackConfig.resolve.fallback = {
          ...webpackConfig.resolve.fallback,
          stream: require.resolve("stream-browserify"),
          zlib: require.resolve("browserify-zlib"),
          path: require.resolve("path-browserify"),
          os: require.resolve("os-browserify/browser"),
          crypto: require.resolve("crypto-browserify"),
          https: require.resolve("https-browserify"),
          http: require.resolve("stream-http"),
          assert: require.resolve("assert/"),
          util: require.resolve("util/"),
          fs: false,  // if fs is not needed
          net: false, // if net is not needed
          tls: false, // if tls is not needed
        };
        return webpackConfig;
      },
    },
  };
  