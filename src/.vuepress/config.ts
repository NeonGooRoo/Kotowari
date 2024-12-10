import { defineUserConfig } from "vuepress";  
import theme from "./theme.js";
import { hopeTheme } from "vuepress-theme-hope";
import { viteBundler } from '@vuepress/bundler-vite'

import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

export default defineUserConfig({

  bundler: viteBundler({
    viteOptions: {
      server: {
        fs: {
          cachedChecks: false,
        },
      },
    },
  }),

  base: "/",

  
  head: [

    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap",
        rel: "stylesheet",
      },
    ],
  ],
  locales: {
    "/en/": {
      lang: "en-US",
      title: "NeonGooRoo's Guide",
      description: "Japanese with fun and ease",
    },

    "/": {
      lang: "ru-RU",
      title: "Kotowari",
      description: "Японский легко и с удовольствием",
    },

  },

  plugins: [
      googleAnalyticsPlugin({
        id: 'G-G6HDTB0VXG',
      }),
  ],

  theme,


  // Enable it with pwa
  // shouldPrefetch: false,
});




