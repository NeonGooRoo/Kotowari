module.exports = {
    bundler: viteBundler({
      viteOptions: {
        server: {
          fs: {
            cachedChecks: false,
          },
        },
      },
    }),
  }