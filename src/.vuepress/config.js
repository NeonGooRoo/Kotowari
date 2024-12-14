const { viteBundler } = require('@vuepress/bundler-vite');

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

  themeConfig: {
    // Define locales if you are using multilingual support

    localeDetection: false,
  },
};
