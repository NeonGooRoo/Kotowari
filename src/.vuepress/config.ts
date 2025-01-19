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
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Noto+Sans+JP:wght@100..900&family=Noto+Serif+JP:wght@200..900&display=swap",
        rel: "stylesheet",
      },
    ],
  ],

  locales: {
    "/en/": {
      lang: "en-US",
      title: "Kotowari",
      description: "Japanese with fun and ease",
    },

    "/": {
      lang: "ru-RU",
      title: "Котовари",
      description: "Японский язык с нуля! Бесплатные ресурсы и программы.",
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
